import dbConnect from "@/lib/mongodb";
import Game from "@/models/Game";
import cloudinary from "@/lib/cloudinary";

const getPublicIdFromUrl = (url) => {
  if (!url) return null;
  const parts = url.split("/");
  const fileName = parts.pop();
  const folderPath = parts.slice(parts.indexOf("reborn-club")).join("/");
  const publicId = `${folderPath}/${fileName.split(".")[0]}`;
  return publicId;
};

export const getAllGames = async () => {
  try {
    await dbConnect();
    const games = await Game.find({}).sort({ createdAt: -1 });
    return { success: true, data: games, status: 200 };
  } catch (error) {
    return { success: false, message: "Fetch failed", status: 500 };
  }
};

export const getGameById = async (id) => {
  try {
    await dbConnect();
    const game = await Game.findById(id);
    if (!game)
      return { success: false, message: "Game nahi mila", status: 404 };
    return { success: true, data: game, status: 200 };
  } catch (error) {
    return { success: false, message: "Invalid ID", status: 400 };
  }
};

export const deleteGame = async (id) => {
  try {
    await dbConnect();
    const game = await Game.findById(id);
    if (!game)
      return { success: false, message: "Game nahi mila", status: 404 };

    // 1. Delete Main Image
    if (game.image) {
      const mainId = getPublicIdFromUrl(game.image);
      await cloudinary.uploader.destroy(mainId);
    }

    // 2. Delete Gallery Images
    if (game.gallery && game.gallery.length > 0) {
      const deletePromises = game.gallery.map((url) => {
        const publicId = getPublicIdFromUrl(url);
        return cloudinary.uploader.destroy(publicId);
      });
      await Promise.all(deletePromises);
    }

    // 3. Delete Video (Cloudinary needs resource_type: "video")
    if (game.video) {
      const videoId = getPublicIdFromUrl(game.video);
      await cloudinary.uploader.destroy(videoId, { resource_type: "video" });
    }

    // 4. Delete from Database
    await Game.findByIdAndDelete(id);

    return {
      success: true,
      message: "Game, Images, Gallery aur Video sab clean! 🗑️",
      status: 200,
    };
  } catch (error) {
    console.error("Delete Controller Error:", error);
    return { success: false, message: "Delete error", status: 500 };
  }
};

// 4. UPDATE GAME
export const updateGame = async (id, updateData) => {
  try {
    await dbConnect();

    const oldGame = await Game.findById(id);
    if (!oldGame) {
      return { success: false, message: "Game nahi mila", status: 404 };
    }

    if (updateData.image && oldGame.image) {
      const oldImageId = getPublicIdFromUrl(oldGame.image);
      if (oldImageId) {
        await cloudinary.uploader.destroy(oldImageId);
      }
    }
    if (updateData.video && oldGame.video) {
      const oldVideoId = getPublicIdFromUrl(oldGame.video);
      if (oldVideoId) {
        await cloudinary.uploader.destroy(oldVideoId, {
          resource_type: "video",
        });
      }
    }

    if (updateData.gallery && oldGame.gallery) {
      const urlsToDelete = oldGame.gallery.filter(
        (url) => !updateData.gallery.includes(url),
      );

      const deletePromises = urlsToDelete.map((url) => {
        const publicId = getPublicIdFromUrl(url);
        if (publicId) return cloudinary.uploader.destroy(publicId);
      });
      await Promise.all(deletePromises);
    }
    const updatedGame = await Game.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    return { success: true, data: updatedGame, status: 200 };
  } catch (error) {
    console.error("Update Controller Error:", error);
    return { success: false, message: "Update error", status: 400 };
  }
};

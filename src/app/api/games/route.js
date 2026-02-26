import { NextResponse } from "next/server";
import { getAllGames } from "@/controllers/gameController";
import Game from "@/models/Game";
import dbConnect from "@/lib/mongodb";
import { uploadToCloudinary } from "@/controllers/uploadController";

export async function GET() {
  const result = await getAllGames();
  return NextResponse.json(result, { status: result.status || 200 });
}

export async function POST(req) {
  try {
    await dbConnect();
    const formData = await req.formData();

    const name = formData.get("name");
    const description = formData.get("description");
    const category = formData.get("category");

    const imageFile = formData.get("image");
    if (!imageFile || typeof imageFile === "string") {
      return NextResponse.json(
        { success: false, message: "Image is required" },
        { status: 400 },
      );
    }
    const imagePromise = (async () => {
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      return uploadToCloudinary(buffer, "reborn-club/games", name);
    })();

    // 2. Prepare Gallery Images Promises Array
    const galleryFiles = formData.getAll("gallery");
    const galleryPromises = galleryFiles
      .filter((file) => file && typeof file !== "string" && file.size > 0)
      .map(async (file, index) => {
        const buffer = Buffer.from(await file.arrayBuffer());

        return uploadToCloudinary(
          buffer,
          "reborn-club/gallery",
          `${name}-gallery-${Date.now()}-${index}`,
        );
      });

    // 3. Prepare Native Video Promise
    const videoFile = formData.get("video");
    let videoPromise = Promise.resolve("");

    if (videoFile && typeof videoFile !== "string" && videoFile.size > 0) {
      videoPromise = (async () => {
        const buffer = Buffer.from(await videoFile.arrayBuffer());
        return uploadToCloudinary(
          buffer,
          "reborn-club/videos",
          `${name}-video-${Date.now()}`,
        );
      })();
    }

    const [imageUrl, videoUrl, galleryUrls] = await Promise.all([
      imagePromise,
      videoPromise,
      Promise.all(galleryPromises),
    ]);

    // 5. Save to Database
    const newGame = await Game.create({
      title: name,
      description,
      category,
      image: imageUrl,
      gallery: galleryUrls,
      video: videoUrl,
    });

    return NextResponse.json({ success: true, data: newGame }, { status: 201 });
  } catch (error) {
    console.error("API POST Error:", error.message);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

import { NextResponse } from "next/server";
import {
  getGameById,
  deleteGame,
  updateGame,
} from "@/controllers/gameController";
import { uploadToCloudinary } from "@/controllers/uploadController";
import dbConnect from "@/lib/mongodb";

export async function GET(req, { params }) {
  const { id } = await params;
  const result = await getGameById(id);
  return NextResponse.json(result, { status: result.status || 200 });
}

export async function DELETE(req, { params }) {
  const { id } = await params;
  const result = await deleteGame(id);
  return NextResponse.json(result, { status: result.status || 200 });
}

export async function PATCH(req, { params }) {
  try {
    await dbConnect();
    const { id } = await params;
    const formData = await req.formData();
    const updateData = {};

    if (formData.has("name")) updateData.title = formData.get("name");
    if (formData.has("description"))
      updateData.description = formData.get("description");
    if (formData.has("category"))
      updateData.category = formData.get("category");

    // 1. Prepare Main Image
    const imageFile = formData.get("image");
    const imagePromise =
      imageFile && typeof imageFile !== "string" && imageFile.size > 0
        ? (async () => {
            const buffer = Buffer.from(await imageFile.arrayBuffer());
            return uploadToCloudinary(
              buffer,
              "reborn-club/games",
              updateData.title || id,
            );
          })()
        : null;

    // 2. Prepare Video
    const videoFile = formData.get("video");
    const removeVideo = formData.get("removeVideo") === "true";
    const videoPromise =
      videoFile && typeof videoFile !== "string" && videoFile.size > 0
        ? (async () => {
            const buffer = Buffer.from(await videoFile.arrayBuffer());
            return uploadToCloudinary(
              buffer,
              "reborn-club/videos",
              `${updateData.title || id}-video-${Date.now()}`,
            );
          })()
        : null;

    // 3. Prepare Gallery
    const newGalleryFiles = formData
      .getAll("gallery")
      .filter((f) => f && typeof f !== "string" && f.size > 0);
    const galleryPromises = newGalleryFiles.map(async (file, index) => {
      const buffer = Buffer.from(await file.arrayBuffer());
      return uploadToCloudinary(
        buffer,
        "reborn-club/gallery",
        `${updateData.title || id}-gallery-${Date.now()}-${index}`,
      );
    });

    const [imageUrl, videoUrl, galleryUrls] = await Promise.all([
      imagePromise,
      videoPromise,
      Promise.all(galleryPromises),
    ]);

    if (imageUrl) updateData.image = imageUrl;

    if (videoUrl) {
      updateData.video = videoUrl;
    } else if (removeVideo) {
      updateData.video = "";
    }

    const existingGallery = formData.getAll("existingGallery");
    updateData.gallery = [...existingGallery, ...(galleryUrls || [])];

    const result = await updateGame(id, updateData);
    return NextResponse.json(result, { status: result.status || 200 });
  } catch (error) {
    console.error("PATCH Error:", error.message);
    return NextResponse.json(
      { success: false, message: "Update failed" },
      { status: 500 },
    );
  }
}

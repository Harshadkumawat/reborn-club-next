import { NextResponse } from "next/server";
import { uploadToCloudinary } from "@/controllers/uploadController";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("files");

    if (!files || files.length === 0) {
      return NextResponse.json(
        { success: false, message: "No files found" },
        { status: 400 },
      );
    }

    const uploadPromises = files.map(async (file) => {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      return uploadToCloudinary(buffer);
    });

    const urls = await Promise.all(uploadPromises);

    return NextResponse.json(
      {
        success: true,
        urls: urls,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Upload Error:", error);
    return NextResponse.json(
      { success: false, message: "Upload failed" },
      { status: 500 },
    );
  }
}

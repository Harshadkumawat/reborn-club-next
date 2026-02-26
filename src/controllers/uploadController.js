import cloudinary from "@/lib/cloudinary";

export const uploadToCloudinary = async (
  fileBuffer,
  folder = "reborn-club",
  customName = "image",
) => {
  return new Promise((resolve, reject) => {
    const publicId = `${customName.replace(/\s+/g, "-").toLowerCase()}-${Date.now()}`;

    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: folder,
        resource_type: "auto",
        public_id: publicId,
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url);
      },
    );
    uploadStream.end(fileBuffer);
  });
};

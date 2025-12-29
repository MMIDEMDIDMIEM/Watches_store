import React, { useState } from "react";

const ImageUploader = ({ onUpload }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const CLOUD_NAME = "docvbr5nt";
  const UPLOAD_PRESET = "react_upload";

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setImageUrl(data.secure_url);

      // نرسل الرابط للصفحة الأب (مثلاً AddProduct)
      if (onUpload) onUpload(data.secure_url);

      console.log("✅ Uploaded:", data.secure_url);
    } catch (err) {
      console.error("❌ Upload error:", err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-gray-50 text-center">
      <input type="file" onChange={handleImageUpload} className="mb-3" />
      {uploading && <p className="text-blue-500">Uploading...</p>}
      {imageUrl && (
        <div>
          <img
            src={imageUrl}
            alt="Uploaded"
            className="w-40 h-40 object-cover rounded-lg mx-auto shadow"
          />
          <p className="text-xs text-gray-500 mt-2 break-all">{imageUrl}</p>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;

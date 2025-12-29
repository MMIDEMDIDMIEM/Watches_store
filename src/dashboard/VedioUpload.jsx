import React, { useState } from "react";

const VideoUploader = ({ onUpload }) => {
  const [video, setVideo] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!video) return alert("Please select a video first!");
    setUploading(true);

    const data = new FormData();
    data.append("file", video);
    data.append("upload_preset", "react_upload"); // تأكد من اسم preset في Cloudinary

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/docvbr5nt/video/upload"
, {
        method: "POST",
        body: data,
      });

      const file = await res.json();
      onUpload(file.secure_url);
      alert("🎥 Video uploaded successfully!");
    } catch (error) {
      console.error("Upload error:", error);
      alert("❌ Failed to upload video");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="border p-3 rounded-lg bg-gray-50">
      <input type="file" accept="video/*" onChange={handleVideoChange} />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className={`mt-3 w-full px-4 py-2 rounded-lg text-white ${
          uploading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
        } transition`}
      >
        {uploading ? "Uploading..." : "Upload Video"}
      </button>
    </div>
  );
};

export default VideoUploader;

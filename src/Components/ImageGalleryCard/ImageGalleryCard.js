import React from "react";

function ImageGalleryCard({ title, thumbnail, ...props }) {
  return (
    <div className="gallery-card">
      <img src={thumbnail} alt="thumnail" />
      <h1>{title}</h1>
    </div>
  );
}

export default ImageGalleryCard;

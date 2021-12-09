import React, { useEffect, useState } from "react";
import ImageGalleryCard from "../Components/ImageGalleryCard/ImageGalleryCard"

import apiJson from "../Assets/api.json";
import "./Gallery.css"

function Gallery() {
  const [galleries, setGallery] = useState([]);

  useEffect(() => {
    setGallery(apiJson);
  }, []);
  return (
    <div className="gallery-container">
      {galleries.map((gallery) => {
        return <ImageGalleryCard key={gallery.id} {...gallery}/>;
      })}
    </div>
  );
}

export default Gallery;

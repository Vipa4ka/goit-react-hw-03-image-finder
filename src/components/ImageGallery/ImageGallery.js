// import React from "react";
// import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";

const ImageGallery = ({ hits, onClick }) => (
  <ul className="ImageGallery" onClick={onClick}>
    {hits.map(({ webformatURL, id, tags, largeImageURL }) => (
      <ImageGalleryItem
        webformatURL={webformatURL}
        key={id}
        tags={tags}
        largeImageURL={largeImageURL}
      />
    ))}
  </ul>
);

export default ImageGallery;

//   <ul className="ImageGallery">
//   {/* <!-- Набор <li> с изображениями --> */}
// </ul>

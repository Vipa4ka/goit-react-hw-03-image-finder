// import React from "react";
// import PropTypes from "prop-types";

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => (
  <li className="ImageGalleryItem">
    <img
      src={webformatURL}
      data-url={largeImageURL}
      alt={tags}
      className="ImageGalleryItem-image"
    />
  </li>
);

export default ImageGalleryItem;

// import React from "react";
// import PropTypes from "prop-types";

const ImageGalleryItem = ({ webformatURL, tags }) => (
  <li className="ImageGalleryItem">
    <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
  </li>
);

export default ImageGalleryItem;

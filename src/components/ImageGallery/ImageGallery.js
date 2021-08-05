// import React from "react";
// import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";

const ImageGallery = ({ hits }) => (
  <ul className="ImageGallery">
    {hits.map(({ webformatURL, id, tags }) => (
      <ImageGalleryItem webformatURL={webformatURL} key={id} tags={tags} />
    ))}
  </ul>
);

export default ImageGallery;

//   <ul className="ImageGallery">
//   {/* <!-- Набор <li> с изображениями --> */}
// </ul>

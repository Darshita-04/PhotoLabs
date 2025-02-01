import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
  const photos = props.photo;
  const PhotoListItems = photos.map((photo) =>
    <PhotoListItem key={photo.id} photo={photo} />
  );
  return (
    <ul className="photo-list">
      {PhotoListItems}
    </ul>
  );
};

export default PhotoList;

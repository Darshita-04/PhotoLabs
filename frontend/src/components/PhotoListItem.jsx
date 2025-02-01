import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <img src={props.photo.imageSource} alt="..." />
      <img src={props.photo.profile} alt="..." />
      <h5>{props.photo.username}</h5>
      <p>{props.photo.location.city}, {props.photo.location.country}</p>
    </div>
  );
};

export default PhotoListItem;

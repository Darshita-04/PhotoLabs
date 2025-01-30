import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  return (
    <>
      <img src={props.imageSource} alt="..." />
      <img src={props.profile} alt="..." />
      <h5>{props.username}</h5>
      <p>{props.location.city}, {props.location.country}</p>
    </>
  );
};

export default PhotoListItem;

import React, {useState} from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = ({photo, isFavorite, addFavorite, removeFavorite, handleVisibility}) => {
  const handleClick = () => {
    isFavorite ? removeFavorite(photo.id) : addFavorite(photo)
  }
  const { urls, user, location } = photo;
  const { regular:photoUrl, full } = urls || {};
  const { name, username, profile } = user || {};
  const { city, country } = location || {};
  return (
    <div className="photo-list__item">
      
      <PhotoFavButton handleClick={handleClick} isFavorite={isFavorite}/>
      {photoUrl && <img src={photoUrl} alt={name} className="photo-list__image" onClick={handleVisibility}/> }
      <div className="photo-list__user-details">
       {profile && <img className="photo-list__user-profile" src={profile} alt={username} /> }
        <div className="photo-list__user-info">
          <div>{name}</div>
          <div className="photo-list__user-location">{city}, {country}</div>
        </div>
      </div>


    </div>
  );
};

export default PhotoListItem;

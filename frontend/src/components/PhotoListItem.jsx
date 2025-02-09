import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo, isFavorite, addFavorite, removeFavorite, handleModalVisibility }) => {
  const handleClick = () => {
    isFavorite ? removeFavorite(photo.id) : addFavorite(photo.id); // Store only the ID
  };

  const { urls, user, location } = photo;
  const { regular: photoUrl } = urls || {};
  const { name, username, profile } = user || {};
  const city = location?.city || "";
  const country = location?.country || "";
  
  return (
    <div className="photo-list__item">      
      <PhotoFavButton handleClick={handleClick} isFavorite={isFavorite} />
      
      {photoUrl && (
        <img
          src={photoUrl}
          alt={name}
          className="photo-list__image"
          onClick={() => handleModalVisibility(photo)}
        />
      )}
      
      <div className="photo-list__user-details">
        {profile && <img className="photo-list__user-profile" src={profile} alt={username} />}
        
        <div className="photo-list__user-info">
          <div>{name}</div>
          {city || country ? (
            <div className="photo-list__user-location">{city}, {country}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;

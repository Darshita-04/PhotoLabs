import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos, favorites, addFavorite, removeFavorite, handleVisibility}) => {
  const PhotoListItems = photos.map((photo) =>
    <PhotoListItem 
    key={photo.id} 
    photo={photo} 
    isFavorite={favorites.some(fav => fav.id === photo.id)}
    addFavorite={addFavorite} 
    removeFavorite={removeFavorite}
    handleVisibility={handleVisibility} />
  );
  return (
    <ul className="photo-list">
      {PhotoListItems}
    </ul>
  );
};

export default PhotoList;

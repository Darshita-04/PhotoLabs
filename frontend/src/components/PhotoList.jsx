import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos,favorites,addFavorite,removeFavorite}) => {
  const PhotoListItems = photos.map((photo) =>
    <PhotoListItem 
    key={photo.id} 
    photo={photo} 
    isFavorite={favorites.some(fav => fav.id === photo.id)}
    addFavorite={addFavorite} 
    removeFavorite={removeFavorite} />
  );
  return (
    <ul className="photo-list">
      {PhotoListItems}
    </ul>
  );
};

export default PhotoList;

import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, likedPhotos, addFavorite, removeFavorite, handleModalVisibility }) => {
  const PhotoListItems = photos.map((photo) => (
    <PhotoListItem 
      key={photo.id} 
      photo={photo} 
      isFavorite={likedPhotos.includes(photo.id)}
      addFavorite={addFavorite} 
      removeFavorite={removeFavorite}
      handleModalVisibility={handleModalVisibility} 
    />
  ));
  try {
    return (
      <ul className="photo-list">
        {PhotoListItems}
      </ul>
    );
  } catch (error) {
    console.error("Error in PhotoList:", error);
    return <div>Something went wrong. Check the console.</div>;
  }
};

export default PhotoList;

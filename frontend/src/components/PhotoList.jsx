import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import Skeleton from "./Skeleton";


const PhotoList = ({ photos, likedPhotos, addFavorite, removeFavorite, handleModalVisibility, loading}) => {
  const PhotoListItems =  loading
    ? Array(9)
        .fill(null)
        .map((_, index) => (
          <div className="photo-card" key={index}>
            <Skeleton width="100%" height="200px" borderRadius="10px" />
            <Skeleton width="80%" height="20px" />
            <Skeleton width="60%" height="20px" />
          </div>
        ))
    : photos.map((photo) => (
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

import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
  
const PhotoFavButton = ({ handleClick, isFavorite }) => {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon isFavorite={isFavorite} handleClick={handleClick} className="photo-list__fav-icon" />
      </div>
    </div>
  );
}

export default PhotoFavButton;

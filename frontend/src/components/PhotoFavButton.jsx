import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({handleClick, displayAlert, isFavorite}) {

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon handleClick={handleClick} isFavorite={isFavorite} displayAlert={displayAlert} className="photo-list__fav-icon" />
      </div>
    </div>
  );
}

export default PhotoFavButton;
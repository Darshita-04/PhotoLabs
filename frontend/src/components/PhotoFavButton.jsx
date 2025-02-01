import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({handleClick, displayAlert, selected}) {

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon handleClick={handleClick} selected={selected} displayAlert={displayAlert} className="photo-list__fav-icon" />
      </div>
    </div>
  );
}

export default PhotoFavButton;
import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ displayAlert,isFavorite = true}) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={displayAlert} isFavorite={isFavorite} />
    </div>
  ) 
};

export default FavBadge;
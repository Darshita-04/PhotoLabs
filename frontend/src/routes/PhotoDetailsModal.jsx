import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({handleClose,photo}) => {
  const { urls, user } = photo;
  const { full } = urls || {};
  const { name } = user || {};
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {console.log(photo)}
      {full && <img src={full} alt={name} style={{width:'100%'}}/> }    
    </div>
  )
};

export default PhotoDetailsModal;

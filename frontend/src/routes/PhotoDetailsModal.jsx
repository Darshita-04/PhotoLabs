import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({photos,handleClose,favorites, photo,isFavorite, addFavorite, removeFavorite,handleModalVisibility}) => {
  const handleClick = () => {
    isFavorite ? removeFavorite(photo.id) : addFavorite(photo)
  }
  const { urls, user, location } = photo;
  const { full } = urls || {};
  const { name, username, profile } = user || {};
  const { city, country } = location || {};
  if (!photo) return null;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton handleClick={handleClick} isFavorite={isFavorite}/>
        {full && <img src={full} alt={name} className="photo-details-modal__image"/> }
        <div className="photo-details-modal__photographer-details">
        {profile && <img className="photo-details-modal__photographer-profile" src={profile} alt={username} /> }
          <div className="photo-details-modal__photographer-info">
            <div>{name}</div>
            <div className="photo-details-modal__photographer-location">{city}, {country}</div>
          </div>
        </div>
      </div>
      <PhotoList photos={photos} 
      favorites={favorites} 
      addFavorite={addFavorite} 
      removeFavorite={removeFavorite}
      handleModalVisibility={handleModalVisibility} />
    </div>
  )
};

export default PhotoDetailsModal;

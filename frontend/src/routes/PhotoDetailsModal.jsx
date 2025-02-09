import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = ({handleClose, likedPhotos, photo, addFavorite, removeFavorite,handleModalVisibility}) => {
  if (!photo) {    
    console.error("PhotoDetailsModal: `photo` is undefined!"); // Debugging log

    return null; // Don't render anything if photo is undefined
  }
  const isFavorite = Array.isArray(likedPhotos) ? likedPhotos.includes(photo.id) : false; // Ensure favorites is an array
  const handleClick = () => {
    isFavorite ? removeFavorite(photo.id) : addFavorite(photo.id)
  }


  const { urls, user, location } = photo;
  const { full } = urls || {};
  const { name, username, profile } = user || {};
  const { city, country } = location || {};
  
  // convert `similar_photos` object to an array
  const similarPhotosArray = photo.similar_photos ? Object.values(photo.similar_photos) : [];


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
        
        <div className='photo-details-modal__header'>Similar Photos</div>
        <PhotoList photos={similarPhotosArray || []} 
        likedPhotos={likedPhotos} 
        addFavorite={addFavorite} 
        removeFavorite={removeFavorite}
        handleModalVisibility={handleModalVisibility} />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;

import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({photos,topics,favorites,addFavorite,removeFavorite, handleModalVisibility}) => {
  const isFavPhotoExist = favorites.length > 0;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList photos={photos} 
      favorites={favorites} 
      addFavorite={addFavorite} 
      removeFavorite={removeFavorite}
      handleModalVisibility={handleModalVisibility} />
    </div>
  );
};

export default HomeRoute;

import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({ photos, topics, likedPhotos, addFavorite, removeFavorite, handleModalVisibility,fetchPhotosByTopic }) => {
  const isFavPhotoExist = likedPhotos && likedPhotos.length > 0; // Ensure it doesn't break if undefined

  return (
    <>    
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist} fetchPhotosByTopic={fetchPhotosByTopic} />
      <div className="home-route">
        <PhotoList 
          photos={photos} 
          likedPhotos={likedPhotos}
          addFavorite={addFavorite} 
          removeFavorite={removeFavorite}
          handleModalVisibility={handleModalVisibility} 
        />
      </div>
    </>
  );
};

export default HomeRoute;

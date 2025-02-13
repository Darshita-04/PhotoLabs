import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({ photos, topics, likedPhotos, addFavorite, removeFavorite, handleModalVisibility,fetchPhotosByTopic,selectedTopicId,toggleTheme,theme,loading}) => {
  const isFavPhotoExist = likedPhotos && likedPhotos.length > 0; // Ensure it doesn't break if undefined
  return (
    <>    
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist} fetchPhotosByTopic={fetchPhotosByTopic} selectedTopicId={selectedTopicId} toggleTheme={toggleTheme} theme={theme} loading={loading}/>
      <div className="home-route">
        <PhotoList 
          loading={loading}
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

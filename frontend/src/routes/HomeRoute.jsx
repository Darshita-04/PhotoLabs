import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({photos,topics,favorites,addFavorite,removeFavorite}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} />
      <PhotoList photos={photos} 
      favorites={favorites} 
      addFavorite={addFavorite} 
      removeFavorite={removeFavorite}/>
    </div>
  );
};

export default HomeRoute;

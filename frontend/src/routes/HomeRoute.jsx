import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = ({photos,topics,favorites,displayAlert,addFavorite,removeFavorite}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} displayAlert={displayAlert} />
      <PhotoList photos={photos} 
      favorites={favorites} 
      addFavorite={addFavorite} 
      removeFavorite={removeFavorite}
      displayAlert={displayAlert} />
    </div>
  );
};

export default HomeRoute;

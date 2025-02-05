import React, {useState} from "react";
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    favorites,
    modalVisibility,
    selectedPhoto,
    addFavorite,
    handleModalVisibility,
    removeFavorite
  } = useApplicationData();


  return (
    <div className="App">      
      <HomeRoute photos={photos} 
      topics={topics} 
      favorites={favorites} 
      addFavorite={addFavorite} 
      removeFavorite={removeFavorite} 
      handleModalVisibility={handleModalVisibility}/>
      {modalVisibility && <PhotoDetailsModal  photos={photos} favorites={favorites} 
      addFavorite={addFavorite} 
      removeFavorite={removeFavorite} 
      handleModalVisibility={handleModalVisibility} handleClose={handleModalVisibility} photo={selectedPhoto}/>}
    </div>
  );
};

export default App;

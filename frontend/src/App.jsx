import React from "react";
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

const App = () => {
  const {
    likedPhotos,
    modalVisibility,
    selectedPhotoId,
    photos,
    topics,
    addFavorite,
    removeFavorite,
    handleModalVisibility,
    fetchPhotosByTopic
  } = useApplicationData();
  const selectedPhoto = photos.find(photo => photo.id === selectedPhotoId);

  return (
    <div className="App">      
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        likedPhotos={likedPhotos} 
        addFavorite={addFavorite} 
        removeFavorite={removeFavorite} 
        handleModalVisibility={handleModalVisibility}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />

      {modalVisibility && selectedPhoto &&(
        <PhotoDetailsModal  
          likedPhotos={likedPhotos} 
          addFavorite={addFavorite} 
          removeFavorite={removeFavorite} 
          handleModalVisibility={handleModalVisibility} 
          handleClose={handleModalVisibility} 
          photo={selectedPhoto} // Fetch selected photo
        />
      )}
    </div>
  );
};

export default App;

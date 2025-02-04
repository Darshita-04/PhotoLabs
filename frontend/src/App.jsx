import React, {useState} from "react";
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const addFavorite = (photo) => {
    setFavorites((prevFavorites) => [...prevFavorites, photo]);
  };

  // open modal and set selected photo

  const handleModalVisibility = (photo = null) => {
    setModalVisibility((prev) => !prev);
    setSelectedPhoto(photo);
  } 

  const removeFavorite = (photoId) => {
    setFavorites((prevFavorites) => 
      prevFavorites.filter(photo => photo.id !== photoId)
    );
  };

  return (
    <div className="App">      
      <HomeRoute photos={photos} 
      topics={topics} 
      favorites={favorites} 
      addFavorite={addFavorite} 
      removeFavorite={removeFavorite} 
      handleModalVisibility={handleModalVisibility}/>
      {modalVisibility && <PhotoDetailsModal handleClose={handleModalVisibility} photo={selectedPhoto}/>}
    </div>
  );
};

export default App;

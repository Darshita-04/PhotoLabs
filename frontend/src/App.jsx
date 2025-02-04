import React, {useState} from "react";
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from "routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [visibility, setVisibility] = useState(false)
  const addFavorite = (photo) => {
    setFavorites((prevFavorites) => [...prevFavorites, photo]);
  };

  const handleVisibility = () => {
    setVisibility((prev) => !prev);
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
      handleVisibility={handleVisibility}/>
      {visibility && <PhotoDetailsModal />}
    </div>
  );
};

export default App;

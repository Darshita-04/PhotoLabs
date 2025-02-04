import React, {useState} from "react";
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [displayAlert, setDisplayAlert] = useState(false);
  const addFavorite = (photo) => {
    setFavorites((prevFavorites) => [...prevFavorites, photo]);    
    setDisplayAlert(true);
  };

  const removeFavorite = (photoId) => {
    setFavorites((prevFavorites) => 
      prevFavorites.filter(photo => photo.id !== photoId)
    );
    if(favorites.length === 1){
      setDisplayAlert(false);
    }
  };

  return (
    <div className="App">      
      <HomeRoute photos={photos} 
      topics={topics} 
      favorites={favorites} 
      addFavorite={addFavorite} 
      removeFavorite={removeFavorite} 
      displayAlert={displayAlert} />
    </div>
  );
};

export default App;

import { useState } from "react";

const useApplicationData = () => {

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

  return {
    favorites,
    modalVisibility,
    selectedPhoto,
    addFavorite,
    handleModalVisibility,
    removeFavorite
  };
}

export default useApplicationData;
import { useReducer } from "react";
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  TOGGLE_MODAL: "TOGGLE_MODAL",
}
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        likedPhotos: [...state.likedPhotos, action.photoId],
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        likedPhotos: state.likedPhotos.filter(id => id !== action.photoId),
      };

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.photos,
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.topics,
      };

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhotoId: action.photoId,
      };

    case ACTIONS.TOGGLE_MODAL:
      return {
        ...state,
        modalVisibility: action.payload !== null, // Set to true if a photo is passed
        selectedPhotoId: action.payload ? action.payload.id : null,
      };

    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}
const initialState = {
  likedPhotos: [],
  photos: [],
  topics: [],
  displayPhotoDetails: false,
  photoDetails: null,
  modalVisibility: false,
  selectedPhotoId: null,
};

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to add a photo to favorites
  const addFavorite = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, photoId });
  };

  // Function to remove a photo from favorites
  const removeFavorite = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, photoId });
  };

  // Function to set the photos from an API response
  const setPhotoData = (photos) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, photos });
  };

  // Function to set topics from an API response
  const setTopicData = (topics) => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, topics });
  };

  // Function to select a photo
  const selectPhoto = (photoId) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, photoId });
  };

  // Function to display modal
  const handleModalVisibility = (photo = null) => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL, payload: photo });
  };



  return {
    likedPhotos: state.likedPhotos,
    photos: state.photos,
    topics: state.topics,
    photoDetails: state.photoDetails,
    modalVisibility: state.modalVisibility,
    selectedPhotoId: state.selectedPhotoId,
    handleModalVisibility,
    addFavorite,
    removeFavorite,
    setPhotoData,
    setTopicData,
    selectPhoto
  };

  // const [favorites, setFavorites] = useState([]);
  // const [modalVisibility, setModalVisibility] = useState(false);
  // const [selectedPhoto, setSelectedPhoto] = useState(null);
  
  // const addFavorite = (photo) => {
  //   setFavorites((prevFavorites) => [...prevFavorites, photo]);
  // };

  // // open modal and set selected photo

  // const handleModalVisibility = (photo = null) => {
  //   setModalVisibility((prev) => !prev);
  //   setSelectedPhoto(photo);
  // } 

  // const removeFavorite = (photoId) => {
  //   setFavorites((prevFavorites) => 
  //     prevFavorites.filter(photo => photo.id !== photoId)
  //   );
  // };

  // return {
  //   favorites,
  //   modalVisibility,
  //   selectedPhoto,
  //   addFavorite,
  //   handleModalVisibility,
  //   removeFavorite
  // };
}

export default useApplicationData;


import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  TOGGLE_MODAL: "TOGGLE_MODAL",
};

const initialState = {
  likedPhotos: [],   
  photoData: [],
  topicData: [],
  modalVisibility: false,
  selectedPhotoId: null,
};



function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        likedPhotos: state.likedPhotos.includes(action.photoId)
          ? state.likedPhotos // Prevent duplicate
          : [...state.likedPhotos, action.photoId],
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        likedPhotos: state.likedPhotos.filter((id) => id !== action.photoId),
      };

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhotoId: action.photoId,
      };

    case ACTIONS.TOGGLE_MODAL:
      return {
        ...state,
        modalVisibility: action.modalVisibility, // Explicit boolean value
        selectedPhotoId: action.modalVisibility ? action.photoId : null, // Reset selected photo when closing modal
      };

    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addFavorite = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, photoId });
  };

  const removeFavorite = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, photoId });
  };

  const setPhotoData = (photos) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, photos });
  };

  const setTopicData = (topics) => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, topics });
  };

  const selectPhoto = (photoId) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, photoId });
  };

  // handle visibility of Modal
  const handleModalVisibility = (photo = null) => {
    dispatch({ 
      type: ACTIONS.TOGGLE_MODAL, 
      modalVisibility: !!photo, // explicit boolean
      photoId: photo ? photo.id : null 
    });
  };

  
  // fetch photos data on first render

  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, []);

    // fetch topics data on first render

    useEffect(() => {
      fetch("http://localhost:8001/api/topics")
        .then((response) => response.json())
        .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
    }, []);

  return {
    likedPhotos: state.likedPhotos,
    photos: state.photoData,
    topics: state.topicData,
    modalVisibility: state.modalVisibility,
    selectedPhotoId: state.selectedPhotoId,
    handleModalVisibility,
    addFavorite,
    removeFavorite,
    setPhotoData,
    setTopicData,
    selectPhoto,
  };
};

export default useApplicationData;

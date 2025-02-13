import { useReducer, useEffect } from "react";

// Action types for different state changes
export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SET_PHOTOS_BY_TOPIC: "SET_PHOTOS_BY_TOPIC",
  SELECT_PHOTO: "SELECT_PHOTO",
  TOGGLE_MODAL: "TOGGLE_MODAL",
  TOGGLE_THEME:"TOGGLE_THEME"
};

// Initial state for the application
const initialState = {
  likedPhotos: [],
  photoData: [],
  topicData: [],
  modalVisibility: false,
  selectedPhotoId: null,
  selectedTopicId: null,
  theme: localStorage.getItem("theme") || "light"
};

// Reducer function to handle state updates based on dispatched actions
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        likedPhotos: state.likedPhotos.includes(action.photoId)
          ? state.likedPhotos // Prevent duplicate additions
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
        photoData: action.payload, // Updates the photo data state
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload, // Updates the topic data state
      };

    case ACTIONS.SET_PHOTOS_BY_TOPIC:
      return { 
        ...state, 
        photoData: action.payload, // Updates photo data based on selected topic
        selectedTopicId: action.topicId
      }; 
  
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhotoId: action.photoId, // Updates the selected photo ID
      };

    case ACTIONS.TOGGLE_MODAL:
      return {
        ...state,
        modalVisibility: action.modalVisibility, // Controls modal visibility
        selectedPhotoId: action.modalVisibility ? action.photoId : null, // Resets selected photo when closing modal
      };
      
    case ACTIONS.TOGGLE_THEME:
        const newTheme = state.theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme); // Save preference
        return { ...state, theme: newTheme };
    default:
      throw new Error(`Unsupported action type: ${action.type}`); // Error handling for unknown actions
  }
}

// Custom hook for managing application state
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

  // Function to set photo data
  const setPhotoData = (photos) => {
    dispatch({ type: ACTIONS.SET_PHOTO_DATA, photos });
  };

  // Function to set topic data
  const setTopicData = (topics) => {
    dispatch({ type: ACTIONS.SET_TOPIC_DATA, topics });
  };

  // Function to select a specific photo
  const selectPhoto = (photoId) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, photoId });
  };

  // Function to handle modal visibility
  const handleModalVisibility = (photo = null) => {
    dispatch({ 
      type: ACTIONS.TOGGLE_MODAL, 
      modalVisibility: !!photo, // Converts photo presence to boolean
      photoId: photo ? photo.id : null // Sets selected photo ID if modal is opened
    });
  };

  // Function to change theme
  const toggleTheme = () => {
    dispatch({ type: ACTIONS.TOGGLE_THEME });
  };
  
  useEffect(() => {
    document.body.className = state.theme; // Apply theme class to body
  }, [state.theme]);

  // Fetches photos data when the component first mounts
  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch((error) => console.error("Error fetching photos ", error));
  }, []);

  // Fetches topic data when the component first mounts
  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data })
      })
      .catch((error) => console.error("Error fetching topics ", error));
  }, []);

  // Fetches photos based on a selected topic
  const fetchPhotosByTopic = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTOS_BY_TOPIC, payload: data,topicId});
      })
      .catch((error) => console.error("Error fetching photos by topic:", error));
  };

  return {
    likedPhotos: state.likedPhotos,
    photos: state.photoData,
    topics: state.topicData,
    modalVisibility: state.modalVisibility,
    selectedPhotoId: state.selectedPhotoId,
    selectedTopicId: state.selectedTopicId,
    theme:state.theme,
    fetchPhotosByTopic,
    handleModalVisibility,
    addFavorite,
    removeFavorite,
    setPhotoData,
    setTopicData,
    selectPhoto,
    toggleTheme
  };
};

export default useApplicationData;

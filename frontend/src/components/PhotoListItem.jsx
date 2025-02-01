import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = ({photo}) => {
  const { urls, user, location } = photo;
  const { regular:photoUrl, full } = urls || {};
  const { name, profile } = user || {};
  const { city, country } = location || {};
  return (
    <div className="photo-list__item">
      {photoUrl && <img src={photoUrl} alt="..." className="photo-list__image" /> }
      <div className="photo-list__user-details">
       {profile && <img className="photo-list__user-profile" src={profile} alt="..." /> }
        <div className="photo-list__user-info">
          <div>{name}</div>
          <div className="photo-list__user-location">{city}, {country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;

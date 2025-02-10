import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({topicTitle,fetchPhotosByTopic,topicId}) => {
  return (
    <div className="topic-list__item" onClick={() => fetchPhotosByTopic(topicId)}>
      <span>{topicTitle}</span>
    </div>
  );
};

export default TopicListItem;

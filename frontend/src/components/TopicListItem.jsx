import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({topicTitle,fetchPhotosByTopic,topicId,selectedTopicId}) => {
  return (
    <div className="topic-list__item" onClick={() => fetchPhotosByTopic(topicId)}>
      <span className={selectedTopicId === topicId ? "active" : ""}>{topicTitle}</span>
    </div>
  );
};

export default TopicListItem;

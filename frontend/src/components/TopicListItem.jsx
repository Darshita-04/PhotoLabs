import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({topicTitle}) => {
  return (
    <div className="topic-list__item">
      <span>{topicTitle}</span>
    </div>
  );
};

export default TopicListItem;

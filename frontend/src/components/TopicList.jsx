import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topics,fetchPhotosByTopic,selectedTopicId}) => {
  const topicListItems = topics.map(topicItem => 
      <TopicListItem key={topicItem.id} topicId={topicItem.id} topicTitle={topicItem.title} fetchPhotosByTopic={fetchPhotosByTopic} selectedTopicId={selectedTopicId}/>
  );
  return (
    <div className="top-nav-bar__topic-list">
      {topicListItems}
    </div>
  );
};

export default TopicList;

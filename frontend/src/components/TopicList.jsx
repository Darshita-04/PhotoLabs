import React from "react";
import Skeleton from "./Skeleton";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topics,fetchPhotosByTopic,selectedTopicId,loading}) => {
  const topicListItems = loading
  ? Array(5)
      .fill(null)
      .map((_, index) => (
        <div className="topic-skeleton" key={index}>
          <Skeleton width="100%" height="100%"/>
        </div>
      ))
  : topics.map(topicItem => 
      <TopicListItem key={topicItem.id} topicId={topicItem.id} topicTitle={topicItem.title} fetchPhotosByTopic={fetchPhotosByTopic} selectedTopicId={selectedTopicId}/>
  );
  return (
    <div className="top-nav-bar__topic-list">
      {topicListItems}
    </div>
  );
};

export default TopicList;

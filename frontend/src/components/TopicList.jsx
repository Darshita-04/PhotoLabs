import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topics}) => {
  const topicListItems = topics.map(topicItem => 
      <TopicListItem key={topicItem.id} topicTitle={topicItem.title} />
  );
  return (
    <div className="top-nav-bar__topic-list">
      {topicListItems}
    </div>
  );
};

export default TopicList;

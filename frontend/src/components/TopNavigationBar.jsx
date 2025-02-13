import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({topics,isFavPhotoExist,fetchPhotosByTopic,selectedTopicId,toggleTheme,theme,loading}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className='top-nav-bar__menu-items'>
        <TopicList topics={topics} fetchPhotosByTopic ={fetchPhotosByTopic} selectedTopicId={selectedTopicId} loading={loading}/>
        <FavBadge isFavPhotoExist={isFavPhotoExist} />
        <button onClick={toggleTheme} className={theme === "light" ? "light-mode theme-changer" : "dark-mode theme-changer"}></button>
      </div>
    </div>
  )
}

export default TopNavigation;
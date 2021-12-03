import React, { useState } from "react";
// import ReactPlayer from './ReactPlayer'
import HoverVideoPlayer from "react-hover-video-player";
import Avatar from './Avatar'
import Title from './Title'
import FollowBtn from './FollowBtn'
import {Link} from 'react-router-dom'

const FollowThumb = ({ user, index }) => {
  const [isPlay, setIsPlay] = useState(false);

  return (
    <div className="follow__thumb">
      <HoverVideoPlayer
        style={{
            width: '100%',
            height: '100%',
        }}
        videoSrc={user.storis}
      />

      <div className='follow__thumb__user'>
        <Link to={`/profile/${user._id}`}>
            <Avatar src={user.avatar} size='small'/>
            <Title color='#353535'>{user.username}</Title>
            <Title margin='5px 0' size={13} color='#353535'>{user.fullname}</Title>
        </Link>
        <FollowBtn/>
      </div>

    </div>
  );
};

export default FollowThumb;

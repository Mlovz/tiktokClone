import React, {  forwardRef, useState } from "react";

const VideoSrc = forwardRef((props, ref ) => {
   const [isPlay, setIsPlay] = useState(true)
  
  
  
  return (
    <div className="video__show w-100 h-100" onClick={() => setIsPlay(!isPlay)}>
      <video id={props.id} width={props.width} height={props.height} autoPlay onPlay muted controls>
        <source src={props.src} type='video/mp4'/>
      </video>
     
     
      {/* <div className="video__show__pos video__show__volume" onClick={e => e.stopPropagation()}>
          {
              isVolume === 1 
              ?<i onClick={() => setIsVolume(0)} className="far fa-volume-up"></i>
              :<i onClick={() => setIsVolume(1)}  className="fal fa-volume-slash"></i>
          }
        
      </div>

      <div className="video__show__pos video__show__play">
        {
            !isPlay && <i onClick={(e) => {
                setIsPlay(true)
                e.stopPropagation()
            }} className="fas fa-play"></i> 
        }
      </div> */}
    </div>
  );
})

export default VideoSrc;

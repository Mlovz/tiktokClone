import React, { useEffect } from 'react'
import ReactPlayer from '../ReactPlayer'

const CardBody = ({post}) => {
    
    
    useEffect(() => {
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        }
        let callback = (entries, observer) => {
            entries.forEach(entry => {
                if(entry.target.id === 'myVideo'){
                    if(entry.isIntersecting){
                        entry.target.play()
                    }else{
                        entry.target.pause()
                    }
                }
            });
        }
        let observer = new IntersectionObserver(callback, options)
        const videos = document.querySelectorAll("#myVideo");
        videos.forEach(video => {
            observer.observe(video);
        });
    },[])
    
    
    return (
        <div className='card__body'>
            <ReactPlayer id='myVideo' src={post.video[0]?.url} width='100%' height='100%'/>
        </div>
    )
}

export default CardBody

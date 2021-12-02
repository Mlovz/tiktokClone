import React from 'react'
import ReactPlayer from '../ReactPlayer'

const CardBody = ({post}) => {
    return (
        <div className='card__body'>
            <ReactPlayer src={post.video[0]?.url} width='100%' height='100%'/>
        </div>
    )
}

export default CardBody

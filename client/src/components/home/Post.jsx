import React from 'react'
import CardHeader from '../card/CardHeader'
import CardFooter from '../card/CardFooter'
import CardBody from '../card/CardBody'

const Post = ({posts}) => {
    return (
        <>
            {
                posts.map(post => (
                    <div className='card'>
                        <CardHeader post={post}/>
                        <div className='d-flex align-items-end'>
                            <CardBody post={post}/>
                            <CardFooter post={post}/>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Post

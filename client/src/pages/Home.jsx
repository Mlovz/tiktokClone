import React from 'react'
import {useSelector} from 'react-redux'
import Post from '../components/home/Post'


const Home = () => {
    const {postRed} = useSelector(state => state)
    
    return (
        <div className='home w-100'>
            <Post posts={postRed.posts}/>
        </div>
    )
}

export default Home

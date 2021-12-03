import React from 'react'

const IsLikeBtn = ({isLike,handleLike,handleUnLike}) => {
    return (
        <>
         {
             isLike
             ? <div className='like'>
                 <i onClick={handleUnLike}  className="fas fa-heart text-danger"></i>
             </div>
             : <div>
                 <i onClick={handleLike} className="fas fa-heart"></i>
             </div>
         }   
        </>
    )
}

export default IsLikeBtn

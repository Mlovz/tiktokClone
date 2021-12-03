import React, { useState } from "react";
import IsLikeBtn from "../IsLikeBtn";
import Title from "../Title";

const CardFooter = ({ post }) => {
  const [isLike, setIsLike] = useState(false);

  const handleLike = () => {
    setIsLike(true);
  };

  const handleUnLike = () => {
    setIsLike(false);
  };

  return (
    <div className="card__footer">
      <div>
        <div className="card__footer__item">
          <IsLikeBtn
            isLike={isLike}
            handleLike={handleLike}
            handleUnLike={handleUnLike}
          />
        </div>

        <Title>
          {post.likes.length} {post.likes.length > 999 && "k"}
        </Title>
      </div>
      <div>
        <div className="card__footer__item">
          <i className="fas fa-comment-dots"></i>
        </div>
        <Title>
          {post.likes.length} {post.likes.length > 999 && "k"}
        </Title>
      </div>

      <div>
        <div className="card__footer__item">
            <i className="fas fa-share"></i>
        </div>
        <Title>
          {post.likes.length} {post.likes.length > 999 && "k"}
        </Title>
      </div>
      
    </div>
  );
};

export default CardFooter;

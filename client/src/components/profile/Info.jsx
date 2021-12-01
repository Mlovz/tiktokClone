import React from "react";
import Avatar from "../Avatar";
import FollowBtn from "../FollowBtn";
import Title from "../Title";

const Info = ({ auth, dispatch, id }) => {
  return (
    <div className="info">
      <div className="d-flex align-items-center">
        <Avatar src={auth.user?.avatar} size="big" />
        <div
          style={{
            marginLeft: "20px",
          }}
        >
          <Title margin="0 0 5px 0px" size={30} fw={700}>
            {auth.user?.username}
          </Title>
          <Title margin="0 0 10px 0px" size={20} fw={700}>
            {auth.user?.fullname}
          </Title>
          {/* {
                        auth.user?._id !== id && <FollowBtn id={id}/>
                    } */}
          <FollowBtn id={id} />
        </div>
      </div>

      <div className="mt-4 d-flex align-items-center">
        <Title size={17} fw={400}>
          <strong style={{ fontWeight: "600", fontSize: "19px", marginRight: '4px' }}>
            {auth.user?.following.length}
          </strong>
          Подписки
        </Title>
        <Title margin="0 20px 0 20px" size={17} fw={400}>
          <strong style={{ fontWeight: "600", fontSize: "19px", marginRight: '4px' }}>
            {auth.user?.followers.length}
          </strong>
          Подписчики
        </Title>

        <Title size={17} fw={400}>
          <strong style={{ fontWeight: "600", fontSize: "19px", marginRight: '4px' }}>331</strong>
          Лайки
        </Title>
      </div>

      <div>
          
      </div>
      
    </div>
  );
};

export default Info;

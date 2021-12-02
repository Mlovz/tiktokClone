import React, { useEffect, useState } from "react";
import Avatar from "../Avatar";
import FollowBtn from "../FollowBtn";
import Text from "../Text";
import Title from "../Title";

const Info = ({ auth, profile, dispatch, id }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (auth.user?._id === id) {
      setUserData([auth.user]);
    } else {
      const newData = profile.users.filter((user) => user._id === id);
      setUserData(newData);
    }
  }, [auth.user, id, profile.users]);

  return (
    <div className="info">
      {userData.map((user) => (
        <div key={user._id}>
          <div className="d-flex align-items-start justify-content-between">
            <div className="d-flex align-items-center">
              <Avatar src={user?.avatar} size="big" />
              <div
                style={{
                  marginLeft: "20px",
                }}
              >
                <Title margin="0 0 5px 0px" size={30} fw={700}>
                  {user?.username}
                </Title>
                <Title margin="0 0 10px 0px" size={20} fw={700}>
                  {user?.fullname}
                </Title>
                {/* {
                        auth.user?._id !== id && <FollowBtn id={id}/>
                    } */}
                <FollowBtn />
              </div>
            </div>
            <i style={{ fontSize: "25px" }} className="far fa-ellipsis-h"></i>
          </div>

          <div className="mt-4 d-flex align-items-center">
            <Title size={17} fw={400}>
              <strong
                style={{
                  fontWeight: "600",
                  fontSize: "19px",
                  marginRight: "4px",
                }}
              >
                {user?.following.length}
              </strong>
              Подписки
            </Title>
            <Title margin="0 20px 0 20px" size={17} fw={400}>
              <strong
                style={{
                  fontWeight: "600",
                  fontSize: "19px",
                  marginRight: "4px",
                }}
              >
                {user?.followers.length}
              </strong>
              Подписчики
            </Title>
            <Title size={17} fw={400}>
              <strong
                style={{
                  fontWeight: "600",
                  fontSize: "19px",
                  marginRight: "4px",
                }}
              >
                331
              </strong>
              Лайки
            </Title>
          </div>

          <div>
            <Text
              margin="10px 0 0 0"
              size={16}
              fw={500}
              txt={user?.story}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Info;

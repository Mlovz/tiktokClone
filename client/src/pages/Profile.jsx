import React, { useEffect, useState } from "react";
import Info from "../components/profile/Info";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Clips from "../components/Clips";
import Likes from "../components/Likes";
import { getProfileUser } from "../redux/actions/profileAction";

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { auth, profile } = useSelector((state) => state);
  const [tab, setTab] = useState(false);

  useEffect(() => {
    if (profile?.users?.every((user) => user._id !== id)) {
      dispatch(getProfileUser(id));
    }
  }, [dispatch, id, profile.users]);

  return (
    <div className="profile">
      {profile.loading ? (
        <div className="spin">
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <Info auth={auth} profile={profile} dispatch={dispatch} id={id} />
      )}
      <div className="profile__tab">
        <button onClick={() => setTab(false)} className={`${!tab && "active"}`}>
          Клипы
        </button>
        <button onClick={() => setTab(true)} className={`${tab && "active"}`}>
          Лайкнул(-а)
        </button>
      </div>
      {tab ? <Likes /> : <Clips />}
    </div>
  );
};

export default Profile;

import React, { useEffect, useState } from "react";
import Info from "../components/profile/Info";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
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
        <div className="text-dark d-flex align-items-center justify-content-center" style={{
            fontSize: '25px'
        }}>
          <span
            className="spinner-border spinner-border-md mx-2"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </div>
      ) : (
        <Info auth={auth} profile={profile} dispatch={dispatch} id={id} />
      )}
      <div className="profile__tab">
        <button onClick={() => setTab(false)} className={`${!tab && 'active'}`}>Клипы</button>
        <button onClick={() => setTab(true)} className={`${tab && 'active'}`}>Лайкнул(-а)</button>
      </div>
      {tab ? <Likes /> : <Clips />}
    </div>
  );
};

export default Profile;

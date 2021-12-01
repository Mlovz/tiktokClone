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
  const [tab, setTab] = useState(true);

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
      <div className="mt-4 profile__tab d-flex align-items-center justify-content-between">
        <Button
          onClick={() => setTab(true)}
          fullWidth
          variant={tab ? "outlinedBottom" : ""}
          colorText="#000"
        >
          Клипы
        </Button>
        <Button
          onClick={() => setTab(false)}
          fullWidth
          variant={!tab ? "outlinedBottom" : ""}
          colorText="#000"
        >
          Лайкнул(-а)
        </Button>
      </div>

      {tab ? <Clips /> : <Likes />}
    </div>
  );
};

export default Profile;

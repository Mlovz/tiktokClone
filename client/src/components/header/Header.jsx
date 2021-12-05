import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GLOBALTYPES } from "../../redux/actions/globalAction";
import { getDataApi } from "../../utils/Api";
import Button from "../Button";
import SearchModal from "../SearchModal";
import AuthModal from "./AuthModal";
import HeaderMenu from "./HeaderMenu";
import {Link} from 'react-router-dom'

const Header = () => {
  const dispatch = useDispatch();
  const { authModal, auth } = useSelector((state) => state);
  const [search, setSearch] = useState("");
  const [load, setLoad] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      if (search) {
        setLoad(true);
        await getDataApi(`user_search?username=${search}`, null)
          .then((res) => {
            setUsers(res.data.users);
            setLoad(false);
          })
          .catch((err) => {
            dispatch({
              type: GLOBALTYPES.ALERT,
              payload: { error: err.response.data.msg },
            });
          });
      }
    };
    getUsers();
  }, [search, dispatch]);

  return (
    <div className="header">
      <div className="container h-100 w-100">
        <div className="header__container">
          <Link to='/' className="header__logo">
            <img src="/tiktok.png" alt="" />
            <span>TikTok</span>
          </Link>
          <div className="header__search">
            <input
              type="text"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Поиск аккаунтов..."
            />
            {load ? (
              <div className="text-dark">
                <span
                  className="spinner-border spinner-border-sm mx-2"
                  role="status"
                  aria-hidden="true"
                ></span>
              </div>
            ) : (
              search &&
              !load && (
                <i onClick={() => setSearch("")} className="fal fa-times"></i>
              )
            )}
            {!search && <i className="fal fa-search"></i>}
            {search && <SearchModal users={users} setSearch={setSearch}/>}
          </div>
          {auth.token ? (
            <HeaderMenu />
          ) : (
            <Button
              onClick={() =>
                dispatch({ type: GLOBALTYPES.AUTH_MODAL, payload: true })
              }
              variant="contained"
              color="#FE2C55"
              disabled={authModal}
              padding='4px 20px'
            >
              Войти
            </Button>
          )}
        </div>
      </div>
      <AnimatePresence>{authModal && <AuthModal />}</AnimatePresence>
    </div>
  );
};

export default Header;

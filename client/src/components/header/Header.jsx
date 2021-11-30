import { AnimatePresence } from "framer-motion";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GLOBALTYPES } from "../../redux/actions/globalAction";
import Button from "../Button";
import AuthModal from "./AuthModal";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const dispatch = useDispatch();
  const {authModal, auth } = useSelector((state) => state);
  

  return (
    <div className="header">
      <div className="container h-100 w-100">
        <div className="header__container">
          <div className="header__logo">
            <img src="/tiktok.png" alt="" />
            <span>TikTok</span>
          </div>
          <div className="header__search">
            <input type="text" placeholder="Поиск аккаунтов..." />
            <i className="fal fa-search"></i>
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

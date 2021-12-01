import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, useLocation } from "react-router";
import Header from "./components/header/Header";
import Upload from "./pages/Upload";
import { refreshUser } from "./redux/actions/authAction";
import Alert from "./components/alert/Alert";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Sidebar from "./components/sideBar/Sidebar";
import Following from "./pages/Following";

function App() {
  const dispatch = useDispatch();
  // const {  } = useSelector((state) => state);
  const {pathname} = useLocation()

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <Alert />
      <div className="app__main">
        <div className="container d-flex">
          {
            pathname !== '/upload' && pathname !== '/message' && <Sidebar/>
          }
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/following" component={Following} />
            <Route path="/upload" component={Upload} />
            <Route path="/profile/:id" component={Profile} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

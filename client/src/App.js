import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router';
import Header from './components/header/Header';
import Upload from './pages/Upload';
import { refreshUser } from './redux/actions/authAction';
import Alert from './components/alert/Alert'
import Profile from './pages/Profile';

function App() {
  const dispatch = useDispatch()
  const {alert} = useSelector(state => state)

  useEffect(() => {
    dispatch(refreshUser())
  },[dispatch])
  
  return (
    <div className="App">
        <Header/>
        <Alert/>
        <Switch>
          <Route path='/upload' component={Upload}/>
          <Route path='/profile/:id' component={Profile}/>
        </Switch>
    </div>
  );
}

export default App;

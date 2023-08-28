import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
  // Outlet
} from "react-router-dom";
import AddQuestion from './components/AddQuestion/AddQuestion';
import ViewQuestion from './components/ViewQuestion';
import Auth from './components/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from "./firebase";
import PrivateRoute from './PrivateRoute';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          displayName: authUser.displayName,
          email: authUser.email
        }))
      }
      else {
        dispatch(logout());
      }
    })
  }, [dispatch])

  // const PrivateRoute = ({ component: Component, ...rest }) => {
  //   <Route
  //     {...rest}
  //     render={(props) =>
  //       user? (<Component {...props} />):(<Navigate to={{
  //         pathname:'/auth',
  //         state:{
  //           from:props.location,
  //         }
  //       }} />)}
  //   />
  // };

//   const PrivateRoute = () => {
//     const auth = null;
//     return auth ? <Outlet /> : <Navigate to="/auth" />;
// }

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path={user?'/':'/auth'} element={user?<Sidebar />:<Auth />} />
          <Route exact path='/' element={<PrivateRoute/>}><Route exact path='/' element={<Sidebar />} /></Route>
          <Route exact path='/add-question' element={<PrivateRoute/>}><Route exact path='/add-question' element={<AddQuestion />} /></Route>
          <Route exact path='/question' element={<PrivateRoute/>}><Route exact path='/question' element={<ViewQuestion />} /></Route>
          {/* <PrivateRoute path='/'>
            <Route exact path='/' element={<Sidebar />} />
            <Route exact path='/add-question' element={<AddQuestion />} />
            <Route exact path='/question' element={<ViewQuestion />} />
          </PrivateRoute> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

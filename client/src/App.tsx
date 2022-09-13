import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { autoLogin } from './actions/authActions';
import {Dashboard, Postedit, PostPage, SharedLayout, SharedLayoutv2} from './pages/Dashboard';
import Register from './pages/Register';
import AlertNotification from "./components/AlertNotification"
import { Landing, Profile, ProtectedRoute } from './pages';
import CompanyRegister from './pages/newPages/CompanyRegister';
import Home from './pages/newPages/adminSection/Home';

function App() {

  const dispatch = useDispatch();
  // auto login
  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch])
  
  return (
      <>
          <BrowserRouter>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/auth/register" element={<Register />} />
                <Route path="/company/register" element={<CompanyRegister />} />
                <Route
                  path="/user"
                  element={
                    <ProtectedRoute>
                      <SharedLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<PostPage />} />
                  <Route path="postdetail/:id" element={<Postedit />} />
                </Route>
                <Route
                  path="/profile/:id"
                  element={
                    <ProtectedRoute>
                      <SharedLayoutv2 />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Profile />} />
                </Route>
                <Route path="/" element={<Landing/>} />
                <Route
                  path='/admin-pannel'
                  element={
                    <ProtectedRoute>
                      <Home/>
                    </ProtectedRoute>
                  }
                >
                  <Route path='/admin-pannel' element={<Home/>}/>
                </Route>
              </Routes>
          </BrowserRouter>
          <AlertNotification />
      </>
  );
}

export default App;

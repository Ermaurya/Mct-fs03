import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Redux/Action';
import { Routes, Route, Navigate } from 'react-router-dom';

const Login = () => {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn); 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    }

    dispatch(loginUser(username, password));
  };

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }


  return (
    <div className="login-container container-fluid vh-100 hight d-flex align-items-center justify-content-center">
        <div className="card card-height round">
          <div className="row flex  justify-center box round">
            <div className="col-6 d-flex flex-column justify-content-end pb-4 ps-5 col-left round">
              <h1 className='login-detail-title position-absolute'>Welcome</h1>
              <p className=''>INTRODUCING BROKER OPERATING SYSTEM</p>
            </div>

            <div className="col-6">
              <div className="card-body h-100  d-flex flex-column align-items-center justify-content-center">
                <div className="text-center login-title my-5">
                  <h1>LOGIN</h1>
                </div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="username" className='login-form-label'>Username</label>
                      <div className="flex  justify-center justify-content-center border-bottom pe-2 b-color">
                        <input type="text" id="username" className="form-control border-0 shadow-none" onChange={(e) => setUsername(e.target.value)} />
                        <i className="fa-solid fa-user icon"></i>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label htmlFor="password" className='login-form-label'>Password</label>
                      <div className="flex  justify-center justify-content-center border-bottom pe-2 b-color">
                        <input type="password" className="form-control border-0 shadow-none" onChange={(e) => setPassword(e.target.value)} />
                        <i className="fa-solid fa-magnifying-glass fa-rotate-90 icon"></i>
                      </div>
                    </div>                  

                    <div className="flex  justify-center justify-content-center pb-4">
                      <button type="submit" className="btn rounded-40 w-95">Login</button>
                    </div>
                   
      {/* <div>
        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
   */}

                  </form>
                  <div className='card-bottom flex  justify-around flex-column align-items-end justify-content-end'>
                    <a href='#'>Forget</a>
                    <a href='#'>Help</a>
                  </div>
              </div>
              <p>username: username</p>
              <p>password: 123456</p>
            </div>
          </div>
        </div>
    </div>
   
  )
}

export default Login

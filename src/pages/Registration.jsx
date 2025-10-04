import React, { useReducer, useState } from "react";
import axios from 'axios';
import  '../pages/OTPVerificationPage.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import OTPVerificationPage from "../pages/OTPVerificationPage.jsx";
import "../styles/Registration.css";



const pageValues = {
    showOTPModel:false,
    userName:'',
    userEmail:'',
    userPassword:'',
    userType:1,
    message:'',
    loadStatus:false,
};
const reducerPage = (state, action) => {
    switch(action.type){
      case 1 :
        return {
          ...state,
          showOTPModel: action.value

        };
        case 2 :
        return {
          ...state,
          userName: action.value

        };
        case 3 :
        return {
          ...state,
          userEmail: action.value

        };
        case 4 :
        return {
          ...state,
          userPassword: action.value

        };
        case 5 :
        return {
          ...state,
          userType: action.value

        };
        case 6 :
        return {
          ...state,
          message: action.value

        };
        case 7 :
        return {
          ...state,
          loadStatus: action.value

        };
    };
};
const Registration = () => {
  const [state, dispatch] = useReducer(reducerPage, pageValues)
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userType, setUserType] = useState(1);
  const [message, setMessage] = useState('');
  const [loadStatus,setLoadStatus] = useState(false);
  const [showOTPModel,setShowOTPModel] = useState(false);
  const handleSubbmit = async(e) =>
    {e.preventDefault();
    setLoadStatus (true);
    dispatch({type:7, value:true});
  const requestData = {
    p_username : userName,
    p_useremail : userEmail,
    p_userpassword : userPassword,
    p_usertype : userType,
  };
  console.log(requestData);
try{
  const response = await axios.post('http://localhost:2911/newuser',null,{params:requestData});
  const result = response.data;
  if (result.includes('successfully')){
    setShowOTPModel(true);
    dispatch({type:1, value:true});
  }
  setMessage(response.data);
}
catch(error)
{setMessage(error.response.data)}
finally{
  setLoadStatus(false);
}

  };
  return (
    <>
      {!showOTPModel && (
    <div className="d-flex flex-column align-items-center" style={{ minHeight: "85vh", padding: "20px" }}>
      <div className="login-card p-4 shadow" style={{ width: "800px", borderRadius: "10px", backgroundColor: "#fff" }}>
         
            <div style = {{color : 'red', textAlign : 'center'}}>{message}</div>
            <h4 className="text-center mb-3">Registration Form</h4>
            <form onSubmit={handleSubbmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username:</label>
                <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Enter username"
                required
                value={userName}   // ✅ bind value
                onChange={(e)=>setUserName(e.target.value)}
              />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Id:</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter a valid email address"
                  required
                  onChange={(e)=>setUserEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="aadharNumber" className="form-label">Aadhar Card Number:</label>
                <input
                  type="text"
                  id="aadharNumber"
                  className="form-control"
                  placeholder="Aadhar Card Number"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="bloodGroup" className="form-label">Blood Group:</label>
                <input
                  type="text"
                  id="bloodGroup"
                  className="form-control"
                  placeholder="e.g., A+, B-, O+"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  required
                  onChange={(e)=>setUserPassword(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="form-control"
                  
                />
              </div>

              <button className="btn btn-danger w-100"  type="submit" desabled = {loadStatus}>{loadStatus?'Processing':'Register'}</button>

            </form>

            <p className="mt-3">
              Already User? <a href="../Login" >Login</a>
            </p>
          </div>
        </div>
      
      )}
      {showOTPModel && (
      <OTPVerificationPage userEmailAddress={userEmail}/>
      )}
    </>
  );
};

export default Registration;

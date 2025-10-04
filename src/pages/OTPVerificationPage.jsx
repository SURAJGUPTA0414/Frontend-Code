import React,{useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/OTPVerification.css";
import axios from "axios";
import Login from "./Login.jsx";

const OTPVerificationPage = ({userEmailAddress}) => {
     const [otp, setOtp] = useState(new Array(6).fill(""));
 const [timeLeft, setTimeLeft] = useState(300);
 const [canVerify,setCanVerify]=useState(true);
 const [loginModel, setLoginMode] = useState(false);
 const handleChange = (data, index) =>{
    if (!/^[0-9]$/.test(data.value) && data.value !==""){
        return;
    }
    const newOtp = [...otp];
    newOtp[index] = data.value;
    setOtp(newOtp);
    if (data.value && data.nextSibling && index < otp.length-1){
    data.nextSibling.focus();
    }
 };

 useEffect(() =>  {
    if (timeLeft<0){
        setCanVerify(false)
        return;
    }
    const time = setInterval(() => {
        setTimeLeft((prev) =>prev-1);
    },1000);
        return() => {
            clearInterval(time);
        };
    },[timeLeft]);

    const timeFormat = () =>{
        const minutes = Math.floor(timeLeft/60);
        const seconds = timeLeft%60;
        return`${minutes}:${seconds < 10 ? "0":""}${seconds}`;
    };
    const handleVerify = async(e) => {
        e.preventDefault();
        const requestData = {
            p_useremail:userEmailAddress,
            p_otpvalue:parseInt(otp.join(""),10),
        };
        try{
            const response = await axios.post('http://localhost:2911/otpverification',null,{params:requestData});
            alert(response.data);
            setLoginMode(true);
        }
        catch(error){
        
        }finally{

        }
        
    };
    useEffect(() => {

    },[setLoginMode]);
  return (
    <>
    {!loginModel && (
        <>
        <div className="otp-page">
      <div className="otp-card">
        <h2 className="otp-title">OTP Verification</h2>
        <p className="otp-subtitle">Enter the 6-digit code sent to your email <strong>{userEmailAddress}</strong></p>

        <div className="otp-timer">
          <span>Time Remaining: {timeFormat()} </span>
          <div
            className="otp-timer-bar"
            style={{ width: `${(timeLeft / 300) * 100}%` }}
          ></div>
        </div>

        <form className="otp-form" onSubmit={(e) => e.preventDefault()}>
          <div className="otp-input-group">
             {otp.map((data, index) => (
              <input
              key={index}
                type="text"
                maxLength="1"
                value={data}
                className="otp-input"
                onFocus={ (e) => e.target.select()}
                onChange={(e)=> handleChange(e.target, index) }
              />
             ))};
          </div>

          <div className="otp-button">
            {canVerify && (<button type="submit" className="otp-btn verify" onClick={handleVerify}>
              Verify
            </button>)}
            {!canVerify && (<button type="submit" className="otp-btn verify">
              Regenerate OTP
            </button>
            )}


            <button type="button" className="otp-btn cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>


        </>
    )}
    
    {loginModel && (
        <Login/>
    )}
    </>
    );
};
export default OTPVerificationPage;
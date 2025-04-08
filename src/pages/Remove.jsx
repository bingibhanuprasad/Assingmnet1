// import React, { useState } from "react";
// import "./Remove.css";
// import { FaHandshake, FaPhone } from "react-icons/fa";
// import "./Signup.css"
// const Remove = () => {
//   const [activeStep, setActiveStep] = useState(null);


// const[data,setData]=useState({
//     fullaname:"",
//     Email:"",
//     mobileNumber:"",
//     OTP:"",
//     Password:"",
//     ConfirmPassword:"",
//     AddharNumber:"",
//     OTPUIDAI:"",
//     PanNumber:"",
//     NameAsPerPAN:"",
//     DateofBirth:"",
//     AccountNumber:"",
//     IFSCCode:"",
//     AccountHolderName:""


// })


//     const changeHandler=(e)=>{
//         setData({...data,[e.target.name]:e.target.value})
//     }

//     const submitHandler=(e)=>{
//         try{
//         e.preventDefault();
//         console.log("form csubmiited")
//         console.log(data);
//         }
//     catch{
//         console.log("error in submit")
//     }}


//   return (
//     <div className="container">
      
//       <header className="header">
//         <div className="left">
//           <FaHandshake className="icon" />
//           <span>FinanceKYC</span>
//         </div>
//         <div className="center">Registration & KYC Process</div>
//         <div className="right">
//           <FaPhone className="icon" />
//           <span>Support</span>
//         </div>
//       </header>

      
//       <nav className="kyc-nav">
//         <ul>
//           {[
//             { id: "signup", label: "Signup" },
//             { id: "aadhar", label: "Aadhar KYC" },
//             { id: "pan", label: "PAN Card Verification" },
//             { id: "bank", label: "Bank Account" },
//           ].map((step, index) => (
//             <li key={step.id}>
//               <a
//                 href={`#${step.id}`}
//                 className={activeStep === step.id ? "active" : ""}
//                 onClick={() => setActiveStep(step.id)}
//               >
//                 <span className="step-number">{index + 1}</span>
//                 <span className="step-text">{step.label}</span>
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>

     
//       <main className="main-content">
//       <form className="form" onSubmit={submitHandler}>
//         <section id="signup">
//           <h2 className="Ac">Create Your Account</h2>
//           <div className="form">
//             <div className="form-row">
//               <div className="input-group">
//                 <label>Full Name</label>
//                 <input type="text" placeholder="Enter full name" value={data.fullaname} name="fullaname" onChange={changeHandler} />
//               </div>
//               <div className="input-group">
//                 <label>Address</label>
//                 <input type="text" placeholder="Enter address" value={data.Email} name="Email" onChange={changeHandler} />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="input-group">
//                 <label>Mobile Number</label>
//                 <input type="tel" placeholder="Enter mobile number"  value={data.mobileNumber} name="mobileNumber" onChange={changeHandler}/>
//               </div>
//               <div className="input-group">
//                 <label>OTP Verification</label>
//                 <input type="text" placeholder="Enter OTP"  value={data.OTP} name="OTP" onChange={changeHandler} />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="input-group">
//                 <label>Password</label>
//                 <input type="password" placeholder="Enter password" value={data.Password} name="Password" onChange={changeHandler} />
//               </div>
//               <div className="input-group">
//                 <label>Confirm Password</label>
//                 <input type="password" placeholder="Confirm password"  value={data.ConfirmPassword} name="ConfirmPassword" onChange={changeHandler}/>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Aadhar KYC Form */}
         
//         <section id="pan">
//           <h2 className="Ac">Aadhar eKYC Verification</h2>
//           <div className="form">
//             <div className="form-row">
//               <div className="input-group">
//                 <label>Aadhar Number</label>
//                 <input type="text" placeholder="Enter AAdhar Number" value={data.AddharNumber} name="AddharNumber" onChange={changeHandler} />
//               </div>
//               <div className="input-group">
//                 <label>OTP from UIDAI</label>
//                 <input type="text" placeholder="Enter OTP from UIDAI" value={data.OTPUIDAI} name="OTPUIDAI" onChange={changeHandler} />
//               </div>
//             </div>
             
//           </div>
//         </section>
//         {/* PAN Card Verification Form */}
//         <section id="pan">
//           <h2 className="Ac">PANCard Verification</h2>
//           <div className="form">
//             <div className="form-row">
//               <div className="input-group">
//                 <label>PAN Number</label>
//                 <input type="text" placeholder="Enter PAN Number" value={data.PanNumber} name="PanNumber" onChange={changeHandler}/>
//               </div>
//               <div className="input-group">
//                 <label>Name as per PAN</label>
//                 <input type="text" placeholder="Enter Name"  value={data.NameAsPerPAN} name="NameAsPerPAN" onChange={changeHandler}/>
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="input-group">
//                 <label>Date of Birth</label>
//                 <input type="date" className="date" value={data.DateofBirth} name="DateofBirth" onChange={changeHandler}/>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Bank Account Details Form */}
//         <section id="bank">
//           <h2 className="Ac">BankAccount Details</h2>
//           <div className="form">
//             <div className="form-row">
//               <div className="input-group">
//                 <label>Account Number</label>
//                 <input type="text" placeholder="Enter Bank Account Number" value={data.AccountNumber} name="AccountNumber" onChange={changeHandler} />
//               </div>
//               <div className="input-group">
//                 <label>IFSC Code</label>
//                 <input type="text" placeholder="Enter IFSC Code" value={data.IFSCCode} name="IFSCCode" onChange={changeHandler} />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="input-group">
//                 <label>Account Holder Name</label>
//                 <input type="text" placeholder="Enter Account Holder Name" value={data.AccountHolderName} name="AccountHolderName" onChange={changeHandler}/>
//               </div>
//             </div>
             
//           </div>
//         </section>
//          </form>
//       </main>
         
  



// export default Remove;




// import React, { useState } from "react";
// import "./Remove.css";
// import { FaHandshake, FaPhone } from "react-icons/fa";
// import "./Signup.css";
// import axios from'axios';
// import { Navigate, useNavigate } from "react-router-dom";

// const Remove = () => {
//   const [activeStep, setActiveStep] = useState(null);
// const navigate=useNavigate();
//   const [data, setData] = useState({
//     fullName: "",
//     Email: "",
//     mobileNumber: "",
//     OTP: "",
//     Password: "",
//     ConfirmPassword: "",
//     AadharNumber: "",
//     OTPUIDAI: "",
//     PanNumber: "",
//     NameAsPerPAN: "",
//     DateofBirth: "",
//     AccountNumber: "",
//     IFSCCode: "",
//     AccountHolderName: "",
//   });

//   const changeHandler = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     try {
//        if(data.Password==data.ConfirmPassword){
//       console.log("Form Submitted");
//       const response = axios.post("https://assignment1-fe4ec-default-rtdb.firebaseio.com/assignmentTable.json", data);
//       console.log("Data saved successfully:", data);
//       alert("Registration successful!");
//       setTimeout(() => {
//         navigate('/login');
//       }, 2000);
    
      
//     }else{
//         alert("password not mathced");
//     }


//     } catch (error) {
//       console.log("Error in submit", error);
//     }
//   };

//   return (
//     <div className="container">
     
//       <header className="header">
//         <div className="left">
//           <FaHandshake className="icon" />
//           <span>FinanceKYC</span>
//         </div>
//         <div className="center">Registration & KYC Process</div>
//         <div className="right">
//           <FaPhone className="icon" />
//           <span>Support</span>
//         </div>
//       </header>
 
//       <nav className="kyc-nav">
//         <ul>
//           {[
//             { id: "signup", label: "Signup" },
//             { id: "aadhar", label: "Aadhar KYC" },
//             { id:"pan", label: "PAN Card Verification" },
//             { id: "bank", label: "Bank Account" },
//           ].map((step, index) => (
//             <li key={step.id}>
//               <a 
//                 href={`#${step.id}`}
//                 className={activeStep === step.id ? "active" : ""}
//                 onClick={() => setActiveStep(step.id)}
//               >
//                 <span className="step-number">{index + 1}</span>
//                 <span className="step-text">{step.label}</span>
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>
 
//       <main className="main-content">
//         <form className="form" onSubmit={submitHandler}>
   
//           <section id="signup">
//             <h2 className="Ac">Create Your Account</h2>
//             <div className="form-row">
//               <div className="input-group">
//                 <label>Full Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter full name"
//                   value={data.fullName}
//                   name="fullName"
//                   onChange={changeHandler}
//                 />
//               </div>
//               <div className="input-group">
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   placeholder="Enter email"
//                   value={data.Email}
//                   name="Email"
//                   onChange={changeHandler}
//                 />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="input-group">
//                 <label>Mobile Number</label>
//                 <input
//                   type="tel"
//                   placeholder="Enter mobile number"
//                   value={data.mobileNumber}
//                   name="mobileNumber"
//                   onChange={changeHandler}
//                 />
//               </div>
//               <div className="input-group">
//                 <label>OTP Verification</label>
//                 <input
//                   type="text"
//                   placeholder="Enter OTP"
//                   value={data.OTP}
//                   name="OTP"
//                   onChange={changeHandler}
//                 />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="input-group">
//                 <label>Password</label>
//                 <input
//                   type="password"
//                   placeholder="Enter password"
//                   value={data.Password}
//                   name="Password"
//                   onChange={changeHandler}
//                 />
//               </div>
//               <div className="input-group">
//                 <label>Confirm Password</label>
//                 <input
//                   type="password"
//                   placeholder="Confirm password"
//                   value={data.ConfirmPassword}
//                   name="ConfirmPassword"
//                   onChange={changeHandler}
//                 />
//               </div>
//             </div>
//           </section>
 
//           <section id="aadhar">
//             <h2 className="Ac">Aadhar eKYC Verification</h2>
//             <div className="form-row">
//               <div className="input-group">
//                 <label>Aadhar Number</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Aadhar Number"
//                   value={data.AadharNumber}
//                   name="AadharNumber"
//                   onChange={changeHandler}
//                 />
//               </div>
//               <div className="input-group">
//                 <label>OTP from UIDAI</label>
//                 <input
//                   type="text"
//                   placeholder="Enter OTP from UIDAI"
//                   value={data.OTPUIDAI}
//                   name="OTPUIDAI"
//                   onChange={changeHandler}
//                 />
//               </div>
//             </div>
//           </section>

          
//           <section id="pan">
//             <h2 className="Ac">PAN Card Verification</h2>
//             <div className="form-row">
//               <div className="input-group">
//                 <label>PAN Number</label>
//                 <input
//                   type="text"
//                   placeholder="Enter PAN Number"
//                   value={data.PanNumber}
//                   name="PanNumber"
//                   onChange={changeHandler}
//                 />
//               </div>
//               <div className="input-group">
//                 <label>Name as per PAN</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Name"
//                   value={data.NameAsPerPAN}
//                   name="NameAsPerPAN"
//                   onChange={changeHandler}
//                 />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="input-group">
//                 <label>Date of Birth</label>
//                 <input
//                   type="date"
//                   value={data.DateofBirth}
//                   name="DateofBirth"
//                   onChange={changeHandler}
//                 />
//               </div>
//             </div>
//           </section>

       
//           <section id="bank">
//             <h2 className="Ac">Bank Account Details</h2>
//             <div className="form-row">
//               <div className="input-group">
//                 <label>Account Number</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Bank Account Number"
//                   value={data.AccountNumber}
//                   name="AccountNumber"
//                   onChange={changeHandler}
//                 />
//               </div>
//               <div className="input-group">
//                 <label>IFSC Code</label>
//                 <input
//                   type="text"
//                   placeholder="Enter IFSC Code"
//                   value={data.IFSCCode}
//                   name="IFSCCode"
//                   onChange={changeHandler}
//                 />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="input-group">
//                 <label>Account Holder Name</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Account Holder Name"
//                   value={data.AccountHolderName}
//                   name="AccountHolderName"
//                   onChange={changeHandler}
//                 />
//               </div>
//             </div>
//           </section>

         
//           <div className="button-group">
//             <button type="button" className="draft-btn">Save As Draft</button>
//             <button type="submit" className="register-btn">
//               Register
//             </button>
//           </div>
//         </form>
//       </main>
//     </div>
//   );
// };

// export default Remove;





import React, { useState } from "react";
import "./Remove.css";
import { FaHandshake, FaPhone } from "react-icons/fa";
import "./Signup.css";
import axios from'axios';
import { Navigate, useNavigate } from "react-router-dom";

const Remove = () => {
  const [activeStep, setActiveStep] = useState(null);
const navigate=useNavigate();
  const [data, setData] = useState({
    fullName: "",
    Email: "",
    mobileNumber: "",
    OTP: "",
    Password: "",
    ConfirmPassword: "",
    AadharNumber: "",
    OTPUIDAI: "",
    PanNumber: "",
    NameAsPerPAN: "",
    DateofBirth: "",
    AccountNumber: "",
    IFSCCode: "",
    AccountHolderName: "",
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    try {
       if(data.Password==data.ConfirmPassword){
      console.log("Form Submitted");
      const response = axios.post("https://assignment1-fe4ec-default-rtdb.firebaseio.com/assignmentTable.json", data);
      console.log("Data saved successfully:", data);
      alert("Registration successful!");
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    
      
    }else{
        alert("password not mathced");
    }


    } catch (error) {
      console.log("Error in submit", error);
    }
  };

  return (
    <div className="container">
     
      <header className="header">
        <div className="left">
          <FaHandshake className="icon" />
          <span>FinanceKYC</span>
        </div>
        <div className="center">Registration & KYC Process</div>
        <div className="right">
          <FaPhone className="icon" />
          <span>Support</span>
        </div>
      </header>
 
      <nav className="kyc-nav">
         <div className="group">
          <div className="group1">
            <h3>1</h3>
            <a href="#signup">SignUp</a>
          </div>
          <div className="group1">
            <h3>2</h3>
            <a href="#aadhar">Aadhar</a>
          </div>
          <div className="group1">
            <h3>3</h3>
            <a href="#pan">panCard</a>
          </div>
          <div className="group1">
            <h3 href="#bank">4</h3>
            <a href="#bank">bank</a>
          </div>
     </div>
      </nav>
 
      <main className="main-content">
        <form className="form" onSubmit={submitHandler}>
   
          <section id="signup">
            <h2 className="Ac">Create Your Account</h2>
            <div className="form-row">
              <div className="input-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  value={data.fullName}
                  name="fullName"
                  onChange={changeHandler}
                />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  value={data.Email}
                  name="Email"
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="input-group">
                <label>Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  value={data.mobileNumber}
                  name="mobileNumber"
                  onChange={changeHandler}
                />
              </div>
              <div className="input-group">
                <label>OTP Verification</label>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={data.OTP}
                  name="OTP"
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={data.Password}
                  name="Password"
                  onChange={changeHandler}
                />
              </div>
              <div className="input-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  value={data.ConfirmPassword}
                  name="ConfirmPassword"
                  onChange={changeHandler}
                />
              </div>
            </div>
          </section>
 
          <section id="aadhar">
            <h2 className="Ac">Aadhar eKYC Verification</h2>
            <div className="form-row">
              <div className="input-group">
                <label>Aadhar Number</label>
                <input
                  type="text"
                  placeholder="Enter Aadhar Number"
                  value={data.AadharNumber}
                  name="AadharNumber"
                  onChange={changeHandler}
                />
              </div>
              <div className="input-group">
                <label>OTP from UIDAI</label>
                <input
                  type="text"
                  placeholder="Enter OTP from UIDAI"
                  value={data.OTPUIDAI}
                  name="OTPUIDAI"
                  onChange={changeHandler}
                />
              </div>
            </div>
          </section>

          
          <section id="pan">
            <h2 className="Ac">PAN Card Verification</h2>
            <div className="form-row">
              <div className="input-group">
                <label>PAN Number</label>
                <input
                  type="text"
                  placeholder="Enter PAN Number"
                  value={data.PanNumber}
                  name="PanNumber"
                  onChange={changeHandler}
                />
              </div>
              <div className="input-group">
                <label>Name as per PAN</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={data.NameAsPerPAN}
                  name="NameAsPerPAN"
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="input-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  value={data.DateofBirth}
                  name="DateofBirth"
                  onChange={changeHandler}
                />
              </div>
            </div>
          </section>

       
          <section id="bank">
            <h2 className="Ac">Bank Account Details</h2>
            <div className="form-row">
              <div className="input-group">
                <label>Account Number</label>
                <input
                  type="text"
                  placeholder="Enter Bank Account Number"
                  value={data.AccountNumber}
                  name="AccountNumber"
                  onChange={changeHandler}
                />
              </div>
              <div className="input-group">
                <label>IFSC Code</label>
                <input
                  type="text"
                  placeholder="Enter IFSC Code"
                  value={data.IFSCCode}
                  name="IFSCCode"
                  onChange={changeHandler}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="input-group">
                <label>Account Holder Name</label>
                <input
                  type="text"
                  placeholder="Enter Account Holder Name"
                  value={data.AccountHolderName}
                  name="AccountHolderName"
                  onChange={changeHandler}
                />
              </div>
            </div>
          </section>

         
          <div className="button-group">
            <button type="button" className="draft-btn">Save As Draft</button>
            <button type="submit" className="register-btn">
              Register
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Remove;

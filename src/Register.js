import React,{useState} from 'react';
import './Register.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import RegImage from './images/register-image.jpg';
import LogoLight from './images/logo-light.png';
import { NavLink } from 'react-router-dom';




const Register = () => {
    const [sucmsg,setSucmsg]=useState("");
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [phone,setPhone]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [cpassword,setCpassword]=useState("");
    const [lotemail,setLotemail]=useState(false);
    const [tnc,setTnc]=useState(false);
    

const  handleSubmit= async (e)=>{
e.preventDefault();


if(password===cpassword){
    let data={fname,lname,phone,email,password,cpassword,lotemail,tnc}
    // console.log(data);
   let result=await fetch("https://jsonplaceholder.typicode.com/users",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(data)
    });
    result=await result.json();
    console.log("result is:",result);
    localStorage.setItem("user-data",JSON.stringify(result))

    setFname("");
    setLname("");
    setPhone("");
    setEmail("");
    setPassword("");
    setCpassword("");
    setLotemail();
    setTnc();
    setSucmsg(alert("Login succesfully"))
    

}else{
    alert("pasword not matched")
}
   
}


    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "#00ced1" }}>
                <div className="row">
                    <div className="col-sm-12 col-xs-12 py-5">

                        <div className="container-fluid" >
                            <div className="row">
                                <div className="col-sm-4 text-white" style={{ backgroundColor: "#3B82F6" }} >

                                    <div className="container " >
                                        <div className="row">

                                            <div className="col-sm-12">
                                                <div>
                                                    <img src={LogoLight} style={{ height: "30px", width: "30px", marginRight: "15px", marginBottom: "5px" }} /><h4  style={{ display: "inline-block", marginTop: "40px" }}>Lottery Display</h4>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <h2 style={{fontSize:"25px",fontWeight:"inherit",fontFamily:"sans-serif",marginTop:"70px"}}>A few clicks away from creating your Lottery Display</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={RegImage} style={{width:"230px",alignContent:"center",height:"230px",marginLeft:"60px",marginTop:"40px"}}/>
                                    </div>
                                </div>
                                <div className="col-sm-8 px-5" style={{ backgroundColor: "	#f8f8ff" }}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-12" >
                                                <h1 style={{ fontWeight: "normal", fontSize: "40px", marginTop: "50px", color: "#4169e1", fontFamily: "sans-serif" }} >Register</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-6" >
                                                <h3 style={{ fontWeight: "bold", fontSize: "20px", marginTop: "10px", color: "#4682b4", fontFamily: "sans-serif" }}>manage all your efficiently</h3>
                                                <p style={{ fontWeight: "normal", fontSize: "12px", marginTop: "5px", color: "#b0c4de", fontFamily: "sans-serif" }}>let get you  all your setup so you can verify personal account and begin setting up your profile</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-12 " >
                                                <form className="textfont" onSubmit={handleSubmit}>
                                                    <div className="form-row py-2">
                                                        <div className="col ">
                                                            <label htmlFor="uname" className="form-label">First Name</label>
                                                            <input type="text" className="form-control" id="fname" name="fname" value={fname} onChange={(e)=>setFname(e.target.value)} required/>
                                                        </div>
                                                        <div className="col">
                                                            <label for="uname">Last Name</label>
                                                            <input type="text" className="form-control" id="lname" name="lname" value={lname} onChange={(e)=>setLname(e.target.value)} required/>
                                                        </div>
                                                    </div>
                                                    <div className="form-row py-2">
                                                        <div className="col">
                                                            <label for="uname">Phone Number</label>
                                                            <input type="number" className="form-control" id="number" name="number" value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
                                                        </div>
                                                        <div className="col">
                                                            <label for="uname">Email</label>
                                                            <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                                                        </div>
                                                    </div>
                                                    <div className="form-row py-2">
                                                        <div className="col">
                                                            <label for="uname">Password</label>
                                                            <input type="password" className="form-control" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                                                        </div>
                                                        <div className="col">
                                                            <label for="uname">Confirm Password</label>
                                                            <input type="password" className="form-control" id="cpassword" name="cpassword" value={cpassword} onChange={(e)=>setCpassword(e.target.value)} required/>
                                                        </div>
                                                       
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="lotemail" onChange={(e)=>setLotemail(e.target.checked)} required />
                                                            <label className="form-check-label" for="gridCheck" style={{fontSize:"11px"}}>
                                                                Yes,I want to recieve Lottery Emails
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="tnc" onChange={(e)=>setTnc(e.target.checked)} required />
                                                            <label className="form-check-label" for="gridCheck" style={{fontSize:"11px"}}>
                                                                I agree to terms privacy policy and fees
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <button type="submit" className="btn btn-primary">Create Account</button>
                                                    </div>
                                                    <p style={{fontSize:"12px"}}>already have an account? <NavLink to="/login">Log in </NavLink></p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;

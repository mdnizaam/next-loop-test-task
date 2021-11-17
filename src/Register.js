import React,{useState ,useRef} from 'react';
import './Register.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import RegImage from './images/register-image.jpg';
import LogoLight from './images/logo-light.png';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";




const Register = () => {

    const { register, formState: { errors },handleSubmit ,watch} = useForm();
    const password = useRef({});
    password.current = watch("password", "");

    const [msg,setMsg]=useState("")


    




const onSubmit = async (data) =>{
console.log(data);

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
        setMsg(alert("Sign Up Successfully"))
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
                                                <h1 style={{ fontWeight: "normal", fontSize: "40px", marginTop: "50px", color: "#4169e1", fontFamily: "sans-serif" }} >{msg}</h1>
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
                                                <form className="textfont" onSubmit={handleSubmit(onSubmit)}>
                                                    <div className="form-row py-2">
                                                        <div className="col ">
                                                            <label htmlFor="uname" className="form-label">First Name</label>
                                                            <input type="text" className="form-control" id="fname" name="fname"
                                                            {...register('fname', { required: true })}  />
                                                           <p className="text-danger"> {errors.fname?.type === 'required' && "First Name is required"}</p>
                                                           
                                                        </div>
                                                        <div className="col">
                                                            <label for="uname">Last Name</label>
                                                            <input type="text" className="form-control" id="lname" name="lname"
                                                            {...register('lname', { required: true })}  />
                                                             <p className="text-danger"> {errors.lname?.type === 'required' && "Last Name is required"}</p>
                                                        </div>
                                                    </div>
                                                    <div className="form-row py-2">
                                                        <div className="col">
                                                            <label for="uname">Phone Number</label>
                                                            <input type="number" className="form-control" id="number" name="number" 
                                                            {...register('number', { required: true,maxLength:10,
                                                              pattern:/^(\+\d{1,3}[- ]?)?\d{10}$/ })}  />

                                                            <p className="text-danger"> {errors.number?.type === 'required' && "Mobile phone number"}</p>
                                                            <p className="text-danger"> {errors.number?.type === 'pattern' && "write valid number"}</p>
                                                        </div>
                                                        <div className="col">
                                                            <label for="uname">Email</label>
                                                            <input type="email" className="form-control" id="email" name="email"
                                                            {...register('email', { required: true,
                                                            pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}  />
                                                            <p className="text-danger"> {errors.email?.type === 'required' && "Email required"} </p>
                                                            <p className="text-danger"> {errors.email?.type === 'pattern' && "Invalid Email"}</p>
                                                        </div>
                                                    </div>
                                                    <div className="form-row py-2">
                                                        <div className="col">
                                                            <label for="uname">Password</label>
                                                          
                                                            <input type="password" className="form-control" id="password" name="password" 
                                                             {...register('password', { required: true ,minLength: {
                                                                value: 6,
                                                                message: "Password must have at least 8 characters"
                                                              },maxLength:10})} />
                                                         
                                                            <p className="text-danger"> {errors.password?.type === 'required' && "Password is required"}</p>
                                                            <p className="text-danger"> {errors.password?.type === 'minLength' && "password must have at least 6 char"}</p>
                                                            <p className="text-danger"> {errors.password?.type === 'maxLength' && "password not more than 10"}</p>
                                                        </div>
                                                        <div className="col">
                                                            <label for="uname">Confirm Password</label>
                                                            <input type="password" className="form-control" id="cpassword" name="cpassword" 
                                                            {...register('cpassword', { required: true ,
                                                                validate: value =>
                                                                value === password.current || " password  not match"})}  />
                                                                 <p className="text-danger">{errors.cpassword && <p>{errors.cpassword.message}</p>}</p>
                                                        </div>
                                                       
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="lotemail" name="lotemail" 
                                                            {...register('lotemail', { required: true })} />
                                                            <label className="form-check-label" for="gridCheck" style={{fontSize:"11px"}}>
                                                                Yes,I want to recieve Lottery Emails
                                                            </label>
                                                            <p className="text-danger"> {errors.lotemail?.type === 'Required' && "plz click checked"}</p>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="tnc" name="tnc"
                                                            {...register('tnc', { required: true })}  />
                                                            <label className="form-check-label"  for="gridCheck" style={{fontSize:"11px"}}>
                                                                I agree to terms privacy policy and fees
                                                            </label>
                                                            <p className="text-danger"> {errors.tnc?.type === 'Required' && "plz click checked"}</p>
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

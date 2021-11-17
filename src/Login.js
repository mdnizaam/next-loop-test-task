import React ,{useState}from 'react';
import './Register.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoDark from './images/logo-dark.jpg';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {

    const { register, formState: { errors },handleSubmit ,watch} = useForm();
   

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
    }
    

    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "#1e90ff" }}>
                <div className="row">
                    <div className="col-sm-12 py-5">

                        <div className="container-fluid" >
                            <div className="row">
                                <div className="col-sm-7 text-white bgimage">

                                    <div className="container " >
                                        <div className="row">

                                        </div>
                                    </div>
                                    
                                    
                                </div>
                                <div className="col-sm-5 px-5" style={{ backgroundColor: "	#f8f8ff" }}>
                                    <div className="container">
                                        <div className="row">

                                            <div className="col-sm-12">
                                                <div>
                                                    <img src={LogoDark} style={{ height: "30px", width: "30px", marginRight: "15px", marginBottom: "5px" }} /><h4 style={{ display: "inline-block", marginTop: "40px" }}>Lottery Display</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-12" >
                                                <h3 style={{ fontWeight: "bold", fontSize: "22px", marginTop: "10px", color: "#4682b4", fontFamily: "sans-serif", marginTop: "60px" }}>Login</h3>
                                                <h3 style={{ fontWeight: "bold", fontSize: "18px", marginTop: "1px", color: "#4682b4", fontFamily: "sans-serif", marginTop: "60px" }}>Login To Your Account</h3>
                                                <p style={{ fontWeight: "initial", fontSize: "15px", marginTop: "6px", color: "#b0c4de", fontFamily: "sans-serif" }}>Thank you for get back to Lottery Display,let's access out the best recommendation for you</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-12 my-3" >
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                    <div class="form-group">
                                                        <label for="email">Username:</label>
                                                        <input type="email" class="form-control" placeholder=" Email or Phone Number" id="email" name="uname"
                                                        {...register('uname', { required: true,
                                                            pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })}  />
                                                             <p className="text-danger"> {errors.uname?.type === 'required' && "Email or Phone required"} </p>
                                                            <p className="text-danger"> {errors.uname?.type === 'pattern' && "Invalid Email or Phone"}</p>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="pwd">Password:</label>
                                                        <input type="password" class="form-control" placeholder="Password" id="pwd" name="password"
                                                        {...register('password', { required: true })} />
                                                        <p className="text-danger"> {errors.password?.type === 'required' && "Password required"}</p>
                                                    </div>
                                                    <div class="form-group form-check">
                                                        <label class="form-check-label">
                                                            <input class="form-check-input" type="checkbox" name="check" 
                                                            {...register('check', { required: true })}/>
                                                            
                                                            Remember me
                                                            <p className="text-danger"> {errors.check?.type === 'required' && "plz checked"}</p>
                                                        </label>
                                                        <label className="text-primary  float-end">Forgot Password?</label>
                                                    </div>

                                                    <button type="submit" class="btn btn-primary btn-block">Sign in</button>
                                                    <label className="">Don't Have An Account yet?<span className="text-primary"><NavLink to="/"  >Join Lottery Display</NavLink></span></label>

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

export default Login

import { useState } from "react"
import axios from "axios";
import {Navigate, useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { adduser } from "./utils/userSlice";
import { BASE_URL } from "./utils/constants";
const Login=()=>{
    const[email,setemail]=useState("");
    const[password,setpass]=useState("");
    const [error,seterror]=useState("");
    const[firstName,setfirst]=useState("");
    const[lastName,setlast]=useState("");
    const[islogin,setislogin]=useState(true)
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleLogin=async()=>{  
try{
        const res=await axios.post(BASE_URL+"/login",{email,password},{withCredentials:true})
        dispatch(adduser(res.data))
        return navigate("/") 
    }
        catch(err){
          console.log(err);
          seterror(err?.response?.data)   
        } }
    const handlesignup=async()=>{
      try{
const res=await axios.post(BASE_URL+"/signup",{firstName,lastName,email,password},{withCredentials:true})
dispatch(adduser(res.data));
return navigate("/profile")
      }
      catch(err){
        seterror(err)
        }  }
    return(
        <div className="flex justify-center my-10"><div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">{islogin?"Login":"Signup"}</h2>
         <div>
       {!islogin&&(
        <>
        <label className="form-control w-full max-w-xs my-4">
  <div className="label">
    <span className="label-text">First Name</span>
  
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={firstName} onChange={(e)=>setfirst(e.target.value)}/>
 
</label>
<label className="form-control w-full max-w-xs my-4">
  <div className="label">
    <span className="label-text">LastName</span>
  
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={lastName} onChange={(e)=>setlast(e.target.value)}/>
 
</label>
</>)}

         <label className="form-control w-full max-w-xs my-4">
  <div className="label">
    <span className="label-text">Email id</span>
  
  </div>
  <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={email} onChange={(e)=>setemail(e.target.value)}/>
 
</label>
<label className="form-control w-full max-w-xs my-2">
  <div className="label">
    <span className="label-text">Password</span>
  
  </div>
  <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={password} onChange={(e)=>setpass(e.target.value)} />
 
</label>
         </div>
         {error&&<p className="text-red-500">{error}</p>}
          <div className="card-actions justify-center">
            <button className="btn btn-primary m-2"onClick={islogin?handleLogin:handlesignup}>{islogin?"Login":"Signup"}</button>
          </div>
          <p onClick={()=>setislogin((value)=>!value)}>{islogin?"New user?Sign up here":"Already account?Login here"}</p>
        </div>
      </div></div>
    )
}
export default Login
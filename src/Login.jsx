import { useState } from "react"
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { adduser } from "./utils/userSlice";
import { BASE_URL } from "./utils/constants";
const Login=()=>{
    const[email,setemail]=useState("");
    const[password,setpass]=useState("");
    const [error,seterror]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleLogin=async()=>{
       
try{
        const res=await axios.post(BASE_URL+"/login",{email,password},{withCredentials:true})
        dispatch(adduser(res.data))
        console.log(res.data);
        return navigate("/")
      
    }
     
        catch(err){
          console.log(err);
          seterror(err?.response?.data)
          
        }
    }
    return(
        <div className="flex justify-center my-10"><div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
         <div>
         <label className="form-control w-full max-w-xs my-4">
  <div className="label">
    <span className="label-text">Email id</span>
  
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={email} onChange={(e)=>setemail(e.target.value)}/>
 
</label>
<label className="form-control w-full max-w-xs my-2">
  <div className="label">
    <span className="label-text">Password</span>
  
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={password} onChange={(e)=>setpass(e.target.value)} />
 
</label>
         </div>
         <p className="">{error}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary m-2"onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div></div>
    )
}
export default Login
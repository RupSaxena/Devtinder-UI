import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Usercard from "./Usercard";
import { BASE_URL } from "./utils/constants";
import { adduser } from "./utils/userSlice";
import axios from "axios";
const Editprofile=({user})=>{
    const[firstName,setfirstName]=useState(user.firstName);
    const[lastName,setlastName]=useState(user.lastName);
    const[age,setage]=useState(user.age||"");
    const[gender,setgender]=useState(user.gender||"");
    const[about,setabout]=useState(user.about)||"";
    const [error,seterror]=useState("");
    const[toast,settoast]=useState(false);
    const dispatch=useDispatch();
    const saveprofile=async()=>{
      console.log("bgggg");
      seterror("");
        try{
            const res=await axios.patch(BASE_URL+"/profile/edit",{firstName,lastName,age,gender,about},{withCredentials:true})
       dispatch(adduser(res.data))
       settoast(true)
       console.log(res.data);
       setTimeout(()=>{
        settoast(false)
       },3000)
     
        }
        catch(err){
            seterror(err.massage);
        }
    }
    return(
        <>
        <div className="flex justify-center my-10">
        <div className="flex justify-center mx-10"><div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Edit Profile</h2>
         <div>
         <label className="form-control w-full max-w-xs my-4">
  <div className="label">
    <span className="label-text">FirstName</span>
  
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={firstName} onChange={(e)=>setfirstName(e.target.value)}/>
 
</label>
<label className="form-control w-full max-w-xs my-2">
  <div className="label">
    <span className="label-text">LastName</span>
  
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={lastName} onChange={(e)=>setlastName(e.target.value)} />
 
</label>
<label className="form-control w-full max-w-xs my-4">
  <div className="label">
    <span className="label-text">Age</span>
  
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={age} onChange={(e)=>setage(e.target.value)}/>
 
</label>
<label className="form-control w-full max-w-xs my-4">
  <div className="label">
    <span className="label-text">About</span>
  
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={about} onChange={(e)=>setabout(e.target.value)}/>
 
</label>
<label className="form-control w-full max-w-xs my-4">
  <div className="label">
    <span className="label-text">Gender</span>
  
  </div>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={gender} onChange={(e)=>setgender(e.target.value)}/>
 
</label>
         </div>
         <p className="">{error}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary m-2" onClick={saveprofile}>Save Profile</button>
          </div>
        </div>
      </div></div>
      <Usercard user={{firstName,lastName,age,about,gender}}/>
      </div>
      {toast&&<div className="toast toast-top toast-center">
  
  <div className="alert alert-success">
    <span>Profile saved successfully.</span>
  </div>
</div>}
      </>
    )
}
export default Editprofile;
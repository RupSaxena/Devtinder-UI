import axios from "axios";
import { BASE_URL } from "./utils/constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addrequests, removerequest } from "./utils/requestslice";

const Request=()=>{
    const dispatch=useDispatch();
    
    const Requests=useSelector((store)=>store.requests)
    
    const reviewReject=async(status,_id)=>{
const res=await axios.post(BASE_URL+"/request/review/"+status+"/"+_id,{},{withCredentials:true})
dispatch(removerequest(_id));

    }
    const fetchrequest=async()=>{
        try{
const res=await axios.get(BASE_URL+"/user/requests/received",{withCredentials:true})
console.log(res.data);
dispatch(addrequests(res.data))
        }
        catch(err){
            console.log("error");s
        }
    }
    useEffect(()=>{fetchrequest()},[])
     
    if(!Requests) return;
    if(Requests.length===0) return <h1>No Requests found</h1>
    return (
        <div className="text-center my-10">
          <h1 className="text-bold text-white text-3xl">Request Connections</h1>
    
          {Requests.map((req) => {
            const { _id, firstName, lastName, photoUrl, age, gender, about } =
              req.fromUserId;
    return(
        
 <div
key={_id}
 className=" flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-2/3 mx-auto"
>
 {/* <div>
   <img
     alt="photo"
     className="w-20 h-20 rounded-full object-cover"
     src={photoUrl}
   />
 </div> */}
 <div className="text-left mx-4 ">
   <h2 className="font-bold text-xl">
     {firstName + " " + lastName}
   </h2>
   {age && gender && <p>{age + ", " + gender}</p>}
   <p>{about}</p>
 </div>
 <div>
 <button className="btn btn-primary mx-2" onClick={()=>reviewReject("rejected",req._id)}>Reject</button>
<button className="btn btn-secondary mx-2"onClick={()=>reviewReject("accepted",req._id)}>Accept</button>
 </div>
</div>
);   })}</div>);

}
export default Request;
import axios from "axios";
import { BASE_URL } from "./utils/constants";
import { useDispatch } from "react-redux";
import { removeuserfromfeed } from "./utils/feedslice";

const Usercard=({user})=>{
    const{_id,firstName,lastName,about,gender,age}=user;
    
    const dispatch=useDispatch();
  const handlesendrequest=async(status,id)=>{
    try{
const res=await axios.post(BASE_URL+"/request/send/"+status+"/"+id,{},{withCredentials:true})

dispatch(removeuserfromfeed(id))
    }
    catch(err){
      console.log("something went wrong"+ err);
    }
  }
    return(
<div className="card card-compact bg-base-100 w-96 shadow-xl">
  {/* <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure> */}
  <div className="card-body">
    <h2 className="card-title">{firstName}{lastName}</h2>
    {about&&<p>{about}</p>}
    {gender&&<p>{gender}</p>}
    {age&&<p>{age}</p>}
    <div className="card-actions justify-end">
      <button className="btn btn-primary"onClick={()=>handlesendrequest("ignored",_id)}>Ignore</button>
      <button className="btn btn-Secondary" onClick={()=>handlesendrequest("interested",_id)}>Interested</button>
    </div>
  </div>
</div>
    )
}
export default Usercard;
import axios from "axios";
import { BASE_URL } from "./utils/constants";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addfeed } from "./utils/feedslice";
import Usercard from "./Usercard";
import { useEffect } from "react";
const Feed=()=>{
    const dispatch=useDispatch();
    const feeddata=useSelector((store)=>store.feed)
    console.log("selector data="+feeddata);
    const feedapi=async()=>{
        if(feeddata) return ;
        try{
        const res=await axios.get(BASE_URL+"/feed",{withCredentials:true})
        console.log(res.data);
        dispatch(addfeed(res.data))
        }
        catch(err){
            console.log("something went wrong"+err);
        }
    }
    useEffect(()=>{feedapi()},[])
    return(
        feeddata&&(
       // <div>dd</div>
         <Usercard user={feeddata}/>
        )
    )
}
export default Feed;
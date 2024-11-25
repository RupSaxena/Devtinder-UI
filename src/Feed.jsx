import axios from "axios";
import { BASE_URL } from "./utils/constants";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addfeed } from "./utils/feedslice";
import Usercard from "./Usercard";
import { useEffect } from "react";

// now try to refresh page see the data is coming?
// are you seeing anything in the terminal ?


const Feed=()=>{
    const dispatch=useDispatch();
    const feeddata=useSelector((store)=>store.feed)
 // here data will come
    const feedapi=async()=>{
        //  if(feeddata) {console.log("hello feeddata"); return ;}
        if(!feeddata) return;
        try{
        const res=await axios.get(BASE_URL+"/feed",{withCredentials:true})
        
        dispatch(addfeed(res?.data))
        }
        catch(err){
            console.log("something went wrong"+err);
        }
    }
    useEffect(()=>{
        feedapi()
    },[])
    if(!feeddata) return;
    if(feeddata.length<=0) return <h1>No user available</h1>
    return(
        feeddata&&(
       
         <Usercard user={feeddata[0]}/>
        )
    )
}
export default Feed;
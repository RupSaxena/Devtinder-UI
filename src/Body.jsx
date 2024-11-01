import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BASE_URL } from "./utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { adduser } from "./utils/userSlice";
import { useEffect } from "react";
import axios from "axios";
const Body=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const userdata=useSelector(store=>store.user)
    const fetchdata=()=>{
        if(userdata) return;
        try{
        const res=axios.get(BASE_URL+"/profile",{withCredentials:true});
dispatch(adduser(res.data))
        }
        catch(err){
            if(err.code===401){
            navigate("/login");
            }
            console.log(err);
        }
    }
    useEffect(()=>{
        
    fetchdata();
    },[])
return(<>
    <Navbar/>
    <Outlet/>
    <Footer/></>
)
}
export default Body;
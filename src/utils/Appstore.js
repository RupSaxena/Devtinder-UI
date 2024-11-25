import { configureStore } from "@reduxjs/toolkit";
import requestReducer from "./requestslice";
import connectionReducer from "./connectionslice"
import userReducer from "./userSlice";
import feedReducer from"./feedslice"
const Appstore=configureStore({
    reducer:{
        user:userReducer,
        feed:feedReducer,
        connections:connectionReducer,
        requests:requestReducer,
    }
})
export default Appstore;
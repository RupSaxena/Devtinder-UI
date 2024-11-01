import { createSlice } from "@reduxjs/toolkit";
const feedslice=createSlice({
    name:'feed',
    initialState:null,
    reducers:{
        addfeed:(state,action)=>{
         action.payload}
        ,
        removefeed:(state,action)=>
         null
        
    }
})
export const {addfeed,removefeed}=feedslice.actions;
export default feedslice.reducer;
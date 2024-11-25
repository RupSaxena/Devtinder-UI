import { createSlice } from "@reduxjs/toolkit";
const initialstate = {
    data : null     // null for the initial value or state
  }
const connectionSlice=createSlice({
    name:"connections",
    initialState:initialstate,
    reducers:{
        addconnection:(state,action)=>{
            console.log(action.payload);
state.data=action.payload}
        ,
        removeconnection:(state,action)=>
            null
        
    }
})
export const{addconnection,removeconnection}=connectionSlice.actions;
export default connectionSlice.reducer;
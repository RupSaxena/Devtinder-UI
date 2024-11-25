import { createSlice } from "@reduxjs/toolkit";
// const initialState={
//     data:null
// }
const requestSlice=createSlice({
    name:"requests",
    initialState:null,
    reducers:{
        addrequests:(state,action)=>{
        //    state.data= action.payload;
        return action.payload;
        },
        removerequest:(state,action)=>{
            const newArray=state.filter((r)=>r._id!==action.payload)
            return newArray;
        }
    }
})
export const {addrequests,removerequest}=requestSlice.actions;
export default requestSlice.reducer;
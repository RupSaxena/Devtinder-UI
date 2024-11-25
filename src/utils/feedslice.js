import { createSlice } from "@reduxjs/toolkit";
// const initialstate = {
//     data : null     // null for the initial value or state
//   }
const feedslice=createSlice({
    name:'feed',
    initialState:null,
    reducers:{
        addfeed:(state,action)=>{
        //    console.log('payload: ', action.payload);
            // state.data = action.payload
            return action.payload;
        },
        removeuserfromfeed:(state,action)=>
         {
            const newArray=state.filter((user)=>user._id!==action.payload);
            return newArray
         }
        
    }
})
export const {addfeed,removeuserfromfeed}=feedslice.actions;
export default feedslice.reducer;
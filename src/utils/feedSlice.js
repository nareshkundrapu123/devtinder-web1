import { createSlice } from "@reduxjs/toolkit";


const feedSlice = createSlice({
    name: "feed",
    initialState:null,
    reducers:{
        addFeed:(state,action)=>{
            console.log("Feed Added to Slice:",action.payload);
            return action.payload;
        },
        removeFeed:(state,action)=>{
            return null;
        },
    }, 

});

export const {addFeed}= feedSlice.actions;
export default feedSlice.reducer;
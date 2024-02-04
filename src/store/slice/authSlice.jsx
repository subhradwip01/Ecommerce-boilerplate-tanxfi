import { createSlice } from "@reduxjs/toolkit";

const INITIAL_USERSTATE = {
    isLoggedIn:false,
    user:{},
    token:null,
    isLoading:false
}

const userSilce = createSlice({
    name : "user",
    initialState:INITIAL_USERSTATE,
    reducers:{
       initialStateStup:(state,action)=>{

       } 
    },
    extraReducers:{
        
    }
})
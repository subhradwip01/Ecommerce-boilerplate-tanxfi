import { createSlice } from "@reduxjs/toolkit";

const INITIAL_USERSTATE = {
    isLoggedIn:false,
    user:{},
}

const userSilce = createSlice({
    name : "user",
    initialState:INITIAL_USERSTATE,
    reducers:{
       initialUserStateSet:(state,action)=>{
         const {userInfo} = action.payload;
         console.log("In",userInfo);
         state.isLoggedIn = true;
         state.user = userInfo.user;
         return state;
       },
       login:(state,action)=>{
        const {userInfo} = action.payload;
        console.log(action.payload);
        state.user = userInfo;
        state.isLoggedIn=true;
        localStorage.setItem('userInfo',JSON.stringify(state));
        return state;
       },
       logout:(state,action)=>{
            localStorage.removeItem('userInfo');
            return INITIAL_USERSTATE;
       }
    },
})

export const {initialUserStateSet, login, logout} = userSilce.actions

export default userSilce.reducer;
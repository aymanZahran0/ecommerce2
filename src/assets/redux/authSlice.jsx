import { createSlice } from "@reduxjs/toolkit";
import { Login_api, register_api } from "../../api/Auth_api";



const initialState = {
   authData:{
    data: null,
    token: sessionStorage.getItem('myToken') || null,
    loading: false,
    error: null,
   },
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        resetAuthState: (state) => {
            state.authData.data = null;
            state.authData.error = null;
            state.authData.loading = false;
        },
        logout: (state) => {
            state.authData.data  = null;
            state.authData.token = null;
            sessionStorage.removeItem("myToken");
            localStorage.removeItem('myUserData');
          },
    },

    extraReducers:(builder) => {
        builder

        // register
        .addCase(register_api.pending,(state) => {
            state.authData.loading= true;
        })
        .addCase(register_api.fulfilled,(state,action) => {
            state.authData.loading= false;
            state.authData.data = action.payload;
            console.log(action);
        })
        .addCase(register_api.rejected,(state,action) => {
            state.authData.loading = false;
            state.authData.error = action.error.message;
            console.log(action);

        })

        // login
        .addCase(Login_api.pending,(state) => {
            state.authData.loading= true;
        })
        .addCase(Login_api.fulfilled,(state,action) => {
            state.authData.loading= false;
            state.authData.data = action.payload;
            state.authData.token = action.payload.Data?.AccessToken || null;
            console.log(action);
        })
        .addCase(Login_api.rejected,(state,action) => {
            state.authData.loading = false;
            state.authData.error = action.error.message;
            console.log(action);

        })

    }
});

export const { resetAuthState,logout } = authSlice.actions;

export default authSlice.reducer;

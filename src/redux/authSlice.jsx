import { createSlice } from "@reduxjs/toolkit";
import { getUserById, } from "../api/Auth_api";


const initialState = {
   authData:{
    data: null ,
    token: localStorage.getItem('myToken') || null,
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
            state.authData.error = null;
            localStorage.removeItem("myToken");
            localStorage.removeItem('myUserData');
          },
    },

    extraReducers:(builder) => {
        builder

        // // register
        // .addCase(register_api.pending,(state) => {
        //     state.authData.loading= true;
        // })
        // .addCase(register_api.fulfilled,(state,action) => {
        //     state.authData.loading= false;
        //     state.authData.data = action.payload;
        //     console.info(action);
        // })
        // .addCase(register_api.rejected,(state,action) => {
        //     state.authData.loading = false;
        //     state.authData.error = action.payload;
        //     console.error(action);
        // })

        // // login
        // .addCase(Login_api.pending,(state) => {
        //     state.authData.loading= true;
        // })
        // .addCase(Login_api.fulfilled,(state,action) => {
        //     state.authData.loading= false;
        //     state.authData.data = action.payload ;
        //     state.authData.token = action.payload.token || null;
        //     console.info(action);
        // })
        // .addCase(Login_api.rejected,(state,action) => {
        //     state.authData.loading = false;
        //     state.authData.error = action.payload;
        //     console.error(action);
        // })

        //  get userData by Id from api 
        .addCase(getUserById.pending, (state) => {
            state.authData.loading = true;
          })
          .addCase(getUserById.fulfilled, (state, action) => {
            state.authData.loading = false;
            state.authData.data = action.payload;
          })
          .addCase(getUserById.rejected, (state, action) => {
            state.authData.loading = false;
            state.authData.error = action.payload;
          })     
    }
});

export const { resetAuthState,logout } = authSlice.actions;

export default authSlice.reducer;

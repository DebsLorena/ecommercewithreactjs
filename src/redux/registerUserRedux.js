import { createSlice } from "@reduxjs/toolkit";

export const registerUserSlice = createSlice({
    name: "registerUser",
    initialState: {
        register: [],
        isFetching: false,
        error: false,
    },
    reducers: {
    
        //ADD
        addRegisterUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addRegisterUserSuccess: (state, action) => {
            state.isFetching = false;
            state.registerUsers.push(action.payload);
        },
        addRegisterUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {
    addRegisterUserStart,
    addRegisterUserSuccess,
    addRegisterUserFailure,
} = registerUserSlice.actions;

export default registerUserSlice.reducer;
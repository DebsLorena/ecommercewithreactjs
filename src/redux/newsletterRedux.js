import { createSlice } from "@reduxjs/toolkit";

export const newsletterSlice = createSlice({
    name: "newsletter",
    initialState: {
        email: [],
        isFetching: false,
        error: false,
    },
    reducers: {
    
        //ADD
        addNewsletterStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        addNewsletterSuccess: (state, action) => {
            state.isFetching = false;
            state.newsletters.push(action.payload);
        },
        addNewsletterFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {
    addNewsletterStart,
    addNewsletterSuccess,
    addNewsletterFailure,
} = newsletterSlice.actions;

export default newsletterSlice.reducer;
import { loginFailure, loginStart, loginSuccess, logoutSucess } from "./userRedux";
import { addNewsletterFailure, addNewsletterStart, addNewsletterSuccess
} from "./newsletterRedux";
import { addRegisterUserFailure, addRegisterUserStart, addRegisterUserSuccess
} from "./registerUserRedux";
import { publicRequest, userRequest } from "../requestMethods";

//LOGIN
export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};


//LOGOUT
export const logout = async (dispatch, user) => {
    try {
        const res = await publicRequest.post("/auth/logout", user);
        dispatch(logoutSucess(res.data));
    } catch (err) {}
};


//Newsletter
export const addNewsletter = async (dispatch, email) => {
    dispatch(addNewsletterStart());
    try {
        const res = await userRequest.post(`/newsletter`,email);
        dispatch(addNewsletterSuccess(res.data));
    } catch (err) {
        dispatch(addNewsletterFailure());
    }
};


//Register/User
export const addUser = async (dispatch, user) => {
    dispatch(addRegisterUserStart());
    try {
        const res = await userRequest.post(`/users`, user);
        dispatch(addRegisterUserSuccess(res.data));
    } catch (err) {
        dispatch(addRegisterUserFailure());
    }
};
import { loginFailure, loginStart, loginSuccess, logoutSucess } from "./userRedux";
import { addNewsletterFailure, addNewsletterStart, addNewsletterSuccess
} from "./newsletterRedux";
import { publicRequest, userRequest } from "../requestMethods";


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


export const addNewsletter = async (newsletter, dispatch) => {
    dispatch(addNewsletterStart());
    try {
        const res = await userRequest.post(`/newsletters`,newsletter);
        dispatch(addNewsletterSuccess(res.data));
    } catch (err) {
        dispatch(addNewsletterFailure());
    }
};
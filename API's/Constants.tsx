const baseURL = 'https://poweroften.org/';

const APIEndPoints = {
    BaseURL: baseURL,
    Signup: baseURL + "api/users/signup",
    login: baseURL + "api/users/login",
    verifyOtp: baseURL + "api/users/verifyOTP",
    forgotPassword: baseURL + "api/users/forgetPassword",
    createPost: baseURL + "api/feeds/create",

}

export default APIEndPoints;
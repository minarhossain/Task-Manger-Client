import axios from "axios";
import { errorToast, successToast } from "../helper/FormHelper";
import store from "../redux/store/store";
import { hideLoader, showLoader } from "../redux/stateSlice/settingsSlice";
import { setToken, setUserDetails } from "../helper/SessionHelper";

const baseUrl = 'http://localhost:5000/api/v1/';

const loginRequest = (email, password) => {
    store.dispatch(showLoader());
    let url = baseUrl + '/login';

    const loginData = {
        email: email,
        password: password
    };
    return new Promise((resolve, reject) => {
        axios.post(url, loginData)
            .then(res => {
                console.log('show the main response status', res);
                store.dispatch(hideLoader());
                if (res.data.status === 'success') {
                    setToken(res.data.token);
                    setUserDetails(res.data.user)
                    successToast(res.data.message);
                    resolve(true);
                } else {
                    errorToast('Something Went Wrong');
                    reject(false);
                }
            })
            .catch(error => {
                store.dispatch(hideLoader());
                errorToast('Login Failed');
                reject(false);
            })
    })
}

const registrationRequest = (email, firstName, lastName, mobile, password, photo) => {
    store.dispatch(showLoader())
    const url = baseUrl + '/registration';
    const userData = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        mobile: mobile,
        password: password,
        photo: photo
    }

    return new Promise((resolve, reject) => {
        axios.post(url, userData)
            .then(res => {
                store.dispatch(hideLoader());
                if (res.data.status === 'success') {
                    successToast(res.data.message);
                    resolve(true);
                } else {
                    errorToast('Something Went Wrong');
                    reject(false);
                }
            })
            .catch(error => {
                console.log(error);
                store.dispatch(hideLoader());
                errorToast('Registration Failed');
                reject(false);
            });
    })
}

export { registrationRequest, loginRequest };
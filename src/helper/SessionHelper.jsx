class SessionHelper {
    setToken(token) {
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    setUserDetails(userDetails) {
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
    }

    getUserDetails(userDetails) {
        return JSON.parse(localStorage.getItem('userDetails'));
    }
}


export const { setToken, getToken, setUserDetails, getUserDetails } = new SessionHelper();
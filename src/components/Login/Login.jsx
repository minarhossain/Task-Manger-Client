import { useRef } from "react";
import { Link, NavLink, BrowserRouter, HashRouter, useNavigate } from "react-router-dom";
import { errorToast, isEmail, isEmpty } from "../../helper/FormHelper";
import { loginRequest } from "../../APIRequest/APIRequest";

const Login = () => {
    let emailRef, passwordRef = useRef();
    const navigate = useNavigate()

    const submitLogin = () => {
        const email = emailRef.value;
        let password = passwordRef.value;

        if (isEmail(email)) {
            errorToast('Invalid Email Address');
        } else if (isEmpty(password)) {
            errorToast('Password is Required');
        } else {
            loginRequest(email, password)
                .then(result => {
                    if (result === true) {
                        navigate('/');
                        //window.location.href = '/';
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90  p-4">
                            <div className="card-body">
                                <h4>SIGN IN / Login</h4>
                                <br />
                                <input ref={input => emailRef = input} placeholder="User Email" className="form-control animated fadeInUp" type="email" />
                                <br />
                                <input ref={input => passwordRef = input} placeholder="User Password" className="form-control animated fadeInUp" type="password" />
                                <br />
                                <button onClick={submitLogin} className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                                <hr />
                                <div className="float-end mt-3">

                                    <span>
                                        <Link className="text-center ms-3 h6 animated fadeInUp" to="/registration">Sign Up </Link>
                                        <span className="ms-1">|</span>
                                        <Link className="text-center ms-3 h6 animated fadeInUp" to="/SendOTP">Forget Password</Link>
                                    </span>



                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
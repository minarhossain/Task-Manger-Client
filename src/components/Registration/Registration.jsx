import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
    let emailRef, firstNameRef, lastNameRef, mobileRef, passwordRef = useRef();
    const onRegister = () => {
        let email = emailRef.value;
        let firstName = firstNameRef.value;
        let lastName = lastNameRef.value;
        let mobile = mobileRef.value;
        let password = passwordRef.value;

        console.log(email, firstName, lastName, mobile, password);
    }



    return (

        <div className="container">
            <div className="row display-flex justify-content-center">
                <div className="col-md-10 col-lg-10 center-screen">
                    <div className="card animated fadeIn w-100 p-3">
                        <div className="card-body">
                            <h4>Sign Up / Registration</h4>
                            <hr />
                            <div className="container-fluid m-0 p-0">
                                <div className="row m-0 p-0">
                                    <div className="col-md-4 p-2">
                                        <label>Email Address</label>
                                        <input ref={(input) => emailRef = input} placeholder="User Email" className="form-control animated fadeInUp" type="email" />
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>First Name</label>
                                        <input ref={(input) => firstNameRef = input} placeholder="First Name" className="form-control animated fadeInUp" type="text" />
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Last Name</label>
                                        <input ref={(input) => lastNameRef = input} placeholder="Last Name" className="form-control animated fadeInUp" type="text" />
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Mobile Number</label>
                                        <input ref={(input) => mobileRef = input} placeholder="Mobile" className="form-control animated fadeInUp" type="mobile" />
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <label>Password</label>
                                        <input ref={(input) => passwordRef = input} placeholder="User Password" className="form-control animated fadeInUp" type="password" />
                                    </div>

                                </div>
                                <div lassName="row mt-2 p-0">
                                    <div className="col-md-4 p-2">
                                        <button onClick={onRegister} className="btn mt-3 w-100 float-end btn-primary animated fadeInUp">Submit</button>
                                    </div>
                                </div>
                                <span>
                                    Already have an account <Link className="text-black text-bold text-decoration-none" to='/login'>Sign In</Link>
                                </span>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Registration;
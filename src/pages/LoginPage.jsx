import React, { Suspense, lazy } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
const Login = lazy(() => import('../components/Login/Login'))

const LoginPage = () => {
    return (
        <div>
            <Suspense fallback={<LazyLoader />}>

                <h2>Login page is not master layout</h2>
                <Login />
            </Suspense>

        </div>
    );
};

export default LoginPage;
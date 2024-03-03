import React, { Suspense, lazy } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
const ForgetPassword = lazy(() => import('../components/ForgetPassword/ForgetPassword'))

const ForgetPasswordPage = () => {
    return (
        <div>
            <Suspense fallback={<LazyLoader />}>
                <h2>Forget Password in calling</h2>
                <ForgetPassword />
            </Suspense>
        </div>
    );
};

export default ForgetPasswordPage;
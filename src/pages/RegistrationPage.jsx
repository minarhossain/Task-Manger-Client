import React, { Suspense, lazy } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
const Registration = lazy(() => import('../components/Registration/Registration'))

const RegistrationPage = () => {
    return (
        <div>
            <Suspense fallback={<LazyLoader />}>

                <h2>Registration</h2>
                <Registration />
            </Suspense>


        </div>
    );
};

export default RegistrationPage;
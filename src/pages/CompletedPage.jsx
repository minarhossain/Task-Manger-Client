import React, { Suspense, lazy } from 'react';
import MasterLayout from '../components/MasterLayout/MasterLayout';
import LazyLoader from '../components/MasterLayout/LazyLoader';
const Completed = lazy(() => import('../components/Completed/Completed'))
const CompletedPage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader />}>

                    <h2>Completed </h2>
                    <Completed />
                </Suspense>
            </MasterLayout>

        </div>
    );
};

export default CompletedPage;
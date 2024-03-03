import React, { Suspense, lazy } from 'react';
import MasterLayout from '../components/MasterLayout/MasterLayout';
import LazyLoader from '../components/MasterLayout/LazyLoader';
const Canceled = lazy(() => import('../components/Canceled/Canceled'))

const CanceledPage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader />}>

                    <h2>Cancelled</h2>
                    <Canceled />
                </Suspense>
            </MasterLayout>

        </div>
    );
};

export default CanceledPage;
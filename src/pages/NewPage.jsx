import React, { Suspense, lazy } from 'react';
import MasterLayout from '../components/MasterLayout/MasterLayout';
import LazyLoader from '../components/MasterLayout/LazyLoader';
const New = lazy(() => import('../components/New/New'))
const NewPage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader />}>
                    <New />
                </Suspense>

            </MasterLayout>
        </div>
    );
};

export default NewPage;
import React, { Suspense, lazy } from 'react';
import MasterLayout from '../components/MasterLayout/MasterLayout';
import LazyLoader from '../components/MasterLayout/LazyLoader';

const Create = lazy(() => import('../components/Create/Create'))

const CreatePage = () => {
    return (
        <>
            <MasterLayout>
                <Suspense fallback={<LazyLoader />}>

                    <h2>Create Page</h2>
                    <Create />
                </Suspense>
            </MasterLayout>

        </>
    );
};

export default CreatePage;
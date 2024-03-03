import React, { Suspense, lazy } from 'react';
import MasterLayout from '../components/MasterLayout/MasterLayout';
import LazyLoader from '../components/MasterLayout/LazyLoader';
const Profile = lazy(() => import('../components/Profile/Profile'))
const ProfilePage = () => {
    return (
        <div>
            <MasterLayout>
                <Suspense fallback={<LazyLoader />}>

                    <h2>Profile is here</h2>
                    <Profile />
                </Suspense>
            </MasterLayout>

        </div>
    );
};

export default ProfilePage;
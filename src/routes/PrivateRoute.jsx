import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <LoadingSpinner minHScreen={"min-screen-h"}></LoadingSpinner>
    }

    if (!user) {
        return <Navigate to={'/auth/sign-in'} state={location.pathname}></Navigate>
    }

    return children
};

export default PrivateRoute;
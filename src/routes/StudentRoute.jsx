import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useStudent from '../hooks/useStudent';

const StudentRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isStudent, isStudentLoading] = useStudent();
    const location = useLocation();

    if(loading || isStudentLoading){
        return <progress className="w-56 progress"></progress>;
    }
    if(user && isStudent){
        return children;
    }
    
    return  <Navigate to="/" state={{from: location}} replace></Navigate>;
};

export default StudentRoute;
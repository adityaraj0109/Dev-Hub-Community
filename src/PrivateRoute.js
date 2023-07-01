import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectUser } from "./features/userSlice";

const PrivateRoute = ({component: Component, ...rest})=>{
    const user= useSelector(selectUser);
    return user? <Outlet/>:<Navigate to='/auth'/>;
};

export default PrivateRoute;
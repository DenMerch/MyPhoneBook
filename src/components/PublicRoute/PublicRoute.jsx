import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
    const isAuth = useSelector((state) => state.auth.token)

    return isAuth ? <Navigate to={redirectTo} /> : Component;
};
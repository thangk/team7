import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useSelector } from 'react-redux'

const PrivateRouteAdmin = () => {

    const { currentUser } = useAuth()

    // @ts-ignore
    const loggedInUser = useSelector(state => state.loggedInUser.current)

    if (currentUser && (loggedInUser.role !== 'Customer')) return <Outlet />

    return <Navigate to='/admin' replace />
}    

export default PrivateRouteAdmin;
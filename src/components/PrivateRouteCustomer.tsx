import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from 'react-redux'

const PrivateRouteCustomer = () => {


    // @ts-ignore
    const loggedInUser = useSelector(state => state.loggedInUser.current)

    if (!loggedInUser) return <Navigate to='/login' replace />

    if (loggedInUser.role !== 'Customer') return <Navigate to='/login' replace />
    
    if (loggedInUser.role === 'Customer') return <Outlet />

    return <Navigate to='/login' replace />
}     

export default PrivateRouteCustomer;
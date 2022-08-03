import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useSelector } from 'react-redux'

const PrivateRouteCustomer = () => {

    const { currentUser } = useAuth()

    // @ts-ignore
    const loggedInUser = useSelector(state => state.loggedInUser.current)

    if (!loggedInUser) return <Navigate to='/login' replace />

    if (currentUser && loggedInUser) { 
        console.log('option 2')
        return <Outlet />
    }
    // console.log(loggedInUser)
    // console.log(currentUser)

    return <Navigate to='/login' replace />
    
}     

export default PrivateRouteCustomer;
import { Navigate, Outlet } from "react-router-dom";
import { useAuthAdmin } from "../contexts/AuthContextAdmin";

const PrivateRouteAdmin = () => {

    const { currentAdmin } = useAuthAdmin()

    return currentAdmin ? <Outlet /> : <Navigate to='/admin' replace />}     

export default PrivateRouteAdmin;
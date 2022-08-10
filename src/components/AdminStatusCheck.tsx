import api from '../api/base'
import { useEffect, useState } from "react";
// import { dashboardStats } from "./Constants";

const AdminStatusCheck = () => {

    // const [admins, setAdmins] = useState([]);
    // const [error, setError] = useState(false);
    const [status, setStatus] = useState("Connecting...");

    useEffect(() => {
        const checkConnection = async () => {
            try {
                await api.get(`/admins`)
                setStatus("Status online [✓]")
            } catch (err) {
                //@ts-ignore
                setStatus("Status offline [X]")
                // @ts-ignore
                console.log(err.response.data)
                // @ts-ignore
                console.log(err.response.status)
                // @ts-ignore
                console.log(err.response.headers)
            }
        }

        checkConnection();
    }, [])

    return (
        <main>
            {/*@ts-ignore*/}
            <h1>{status}</h1>

        </main>
    )};

export default AdminStatusCheck;
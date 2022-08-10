import api from '../api/base'
import { useEffect, useState } from "react";
import { dashboardStats } from "./Constants";

const AdminStatusCheck = () => {

    const [admins, setAdmins] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const checkConnection = async () => {
            try {
                const backendResponse = await api.get(`/admins`)
            } catch (err) {
                //@ts-ignore
                setError(true)
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

    function checkError() {
        if (error === false) {
            return "Status Online ✓"
        }
        else {
            return "Status Offline [X]"
        }
    }

    return (
        <main>
            {/*@ts-ignore*/}
            <h1>{checkError()}</h1>

        </main>
    )};

export default AdminStatusCheck;
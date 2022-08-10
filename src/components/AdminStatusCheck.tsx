import api from '../api/base'
import { useEffect, useState } from "react";

const AdminStatusCheck = () => {

    const [status, setStatus] = useState({name: "Connecting...", color: "yellow"});

    useEffect(() => {
        const checkConnection = async () => {
            try {
                await api.get(`/admins`)
                setStatus({name: "online", color: "green"})
            } catch (err) {
                //@ts-ignore
                setStatus({name: "offline", color: "red"})
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
        <main className='adminStatus-outer-wrapper'>
            <div className='adminStatus-element'>
                {/*@ts-ignore*/}
                <h1 className='adminStatus-text'> Connection Status: 
                    <div style={{color: status.color}}>
                        {status.name}
                    </div>
                </h1>
            </div>
        </main>
    )};

export default AdminStatusCheck;
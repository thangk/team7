import axios from "axios";
import { useEffect, useState } from "react";
import { dashboardStats } from "./Constants";
// import api from '../api/base'

const AdminDashboard = () => {

    const [admins, setAdmins] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [products, setProducts] = useState([]);

    


    const getStat = (apiName: string) => {

        switch (apiName) {
            case 'admins': return admins.length ? admins.length : 0
            case 'customers': return customers.length ? customers.length : 0
            case 'watches': return products.length ? products.length : 0
            default: return 0
        }

    }

    

    useEffect(() => {
        const fetchDatas = async () => {
            try {
                const res_admin = await axios.get(`import api from '../api/base'
                admins`)
                const res_customers = await axios.get(`import api from '../api/base'
                customers`)
                const res_products = await axios.get(`import api from '../api/base'
                watches`)
    
                setAdmins(res_admin.data)
                setCustomers(res_customers.data)
                setProducts(res_products.data)
                
            } catch (err) {
                // @ts-ignore
                console.log(err.response.data)
                // @ts-ignore
                console.log(err.response.status)
                // @ts-ignore
                console.log(err.response.headers)
            }
        }

        fetchDatas();
    }, [])

    return (
        <main className="admindashboard__pagewrapper">
            
            
            {dashboardStats.map(item => {
                return (

                    <section className="admindashboard__wrapper" key={item.apiName}>
                        

                        
                        <h1>{getStat(item.apiName)}</h1>

                        <h2>{item.longName}</h2>

                    </section>
                )
            })}

        </main>
    )};

export default AdminDashboard;
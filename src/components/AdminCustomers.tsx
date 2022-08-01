import api from '../api/base'
import { useEffect, useState } from 'react';
import AdminAddForm from './AdminAddForm';
import AdminEditForm from './AdminEditForm';
// import { useNavigate } from 'react-router-dom';

const AdminCustomers = () => {

    // const navigate = useNavigate();

    const [customers, setCustomers] = useState([]);

    const [add, setAdd] = useState(false);
    const [edit, setEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    // @ts-ignore
    const handleEdit = (e) => {
        e.preventDefault()

        setEditId(e.currentTarget.id)
        setEdit(true)
    }

    useEffect(() => {
        const fetchAdmins = async () => {
            try {
                const res = await api.get('/customers');
                setCustomers(res.data);
            } catch (err) {
                // @ts-ignore
                console.log(err.response.data)
                // @ts-ignore
                console.log(err.response.status)
                // @ts-ignore
                console.log(err.response.headers)
            }
        }

        fetchAdmins()

    }, [add, edit])
    
        return (
            <>
                <main className="admincontents__wrapper">

                    {add && <AdminAddForm add={add} setAdd={setAdd} mode={'customers'} setList={setCustomers} />}
                    {/* @ts-ignore */}
                    {edit && <AdminEditForm edit={edit} setEdit={setEdit} mode={'customers'} setList={setCustomers} editId={editId} />}
    
                    <h1>{customers.length} Customers</h1>
    
                    <section className="admincontents__action-buttons-wrapper">
    
                        <button className="admin__buttons" onClick={() => setAdd(!add)}>Add</button>
    
                    </section>
    
    
                    <section className="admincontents__listing">
    
                    <div className='admincontents__listing_headerwrapper'>
                            <h2 className='admincontents__listing_item_id'>ID</h2>
                            <h2 className='admincontents__listing_item_firstname'>First Name</h2>
                            <h2 className='admincontents__listing_item_lastname'>Last Name</h2>
                            <h2 className='admincontents__listing_item_email'>Email</h2>
                        </div>


                        <div className='admincontents__listing_contents'>

                        {customers.map((item: any) => {   
                            return (                         
                            <div className='admincontents__listing_item' key={item.id} id={item.id} onClick={handleEdit}>
                                <h2 className='admincontents__listing_item_id'>{item.id}</h2>
                                <h2 className='admincontents__listing_item_firstname'>{item.firstName}</h2>
                                <h2 className='admincontents__listing_item_lastname'>{item.lastName}</h2>
                                <h2 className='admincontents__listing_item_email'>{item.email}</h2>
                            </div>)
                        })}
                        </div>
    
    
                    </section>
                </main>
    
            </>
        )};

export default AdminCustomers;
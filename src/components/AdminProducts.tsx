import { useEffect, useState } from 'react';
import AdminAddForm from './AdminAddForm';
import AdminEditForm from './AdminEditForm';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const AdminProducts = () => {

    // const navigate = useNavigate();

    const [products, setProducts] = useState([]);
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
        const fetchProducts = async () => {
            try {
                const res = await axios.get('https://team7-backend.herokuapp.com/watches');
                setProducts(res.data);
            } catch (err) {
                // @ts-ignore
                console.log(err.response.data)
                // @ts-ignore
                console.log(err.response.status)
                // @ts-ignore
                console.log(err.response.headers)
            }
        }

        fetchProducts()

    }, [add, edit])
    
        return (
            <>
                <main className="admincontents__wrapper">
                    {/* @ts-ignore */}
                    {add && <AdminAddForm add={add} setAdd={setAdd} mode={'watches'} setList={setProducts} />}
                    {/* @ts-ignore */}
                    {edit && <AdminEditForm edit={edit} setEdit={setEdit} mode={'watches'} setList={setProducts} editId={editId} />}
    
                    <h1>{products.length} Products</h1>
    
                    <section className="admincontents__action-buttons-wrapper">
    
                        <button className="admin__buttons" onClick={() => setAdd(!add)}>Add</button>
                        
    
                    </section>
    
    
                    <section className="admincontents__listing">
    
                        <div className='admincontents__listing_headerwrapper'>
                                <h2 className='admincontents__listing_item_id'>ID</h2>
                                <h2 className='admincontents__listing_item_image'>Image</h2>
                                <h2 className='admincontents__listing_item_name'>Name</h2>
                                <h2 className='admincontents__listing_item_brand'>Brand</h2>
                                <h2 className='admincontents__listing_item_casecolour'>Case Colour</h2>
                                <h2 className='admincontents__listing_item_bandcolour'>Band Colour</h2>
                                <h2 className='admincontents__listing_item_bandtype'>Band Type</h2>
                                <h2 className='admincontents__listing_item_movementtype'>Movement Type</h2>
                                <h2 className='admincontents__listing_item_facesize'>Face Size</h2>
                                <h2 className='admincontents__listing_item_price'>Price</h2>
                                <h2 className='admincontents__listing_item_stock'>Stock</h2>
                            </div>


                            <div className='admincontents__listing_contents'>

                            {products.map((item: any) => {   
                                return (                         
                                <div className='admincontents__listing_item' key={item.id} id={item.id} onClick={handleEdit}>
                                    <h2 className='admincontents__listing_item_id'>{item.id}</h2>
                                    <h2 className='admincontents__listing_item_image'><img src={item.imageUrl} alt={item.name} className='w-[35px] h-[25px] object-cover object-center' /></h2>
                                    <h2 className='admincontents__listing_item_name'>{item.name}</h2>
                                    <h2 className='admincontents__listing_item_brand'>{item.brand}</h2>
                                    <h2 className='admincontents__listing_item_casecolour'>{item.caseColour}</h2>
                                    <h2 className='admincontents__listing_item_bandcolour'>{item.bandColour}</h2>
                                    <h2 className='admincontents__listing_item_bandtype'>{item.bandType}</h2>
                                    <h2 className='admincontents__listing_item_movementtype'>{item.movementType}</h2>
                                    <h2 className='admincontents__listing_item_facesize'>{item.faceSize}</h2>
                                    <h2 className='admincontents__listing_item_price'>${item.price}</h2>
                                    <h2 className='admincontents__listing_item_stock'>{item.stock}</h2>
                                </div>)
                            })}
                            </div>


    
                    </section>
                </main>
    
            </>
        )};

export default AdminProducts;
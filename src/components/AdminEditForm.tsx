import { useEffect, useState } from "react";
import { addAdmin, addCustomers, addWatches } from "./Constants";
import { getInputType, noSpaces } from "./Utils";
import api from '../api/base'
import { AxiosResponse } from "axios";
// import { useAuthAdmin } from "../contexts/AuthContextAdmin";

import { useSelector, useDispatch } from 'react-redux'
import { setLoggedInUser } from "../features/loggedInUserSlice";

// @ts-ignore
const AdminEditForm = ({ edit, setEdit, mode, setList, editId }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('Staff');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [desc, setDesc] = useState('');
    const [caseColour, setCaseColour] = useState('');
    const [bandColour, setBandColour] = useState('');
    const [bandType, setBandType] = useState('');
    const [movementType, setMovementType] = useState('');
    const [faceSize, setFaceSize] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [imageUpload, setImageUpload] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState(0);

    // const { updateCurrentUserPassword } = useAuthAdmin()

    // @ts-ignore
    const loggedInUser = useSelector(state => state.loggedInUser.current)

    const dispatch = useDispatch()

    let addMode: any;

    switch (mode) {
        case 'admins': addMode = addAdmin; break;
        case 'customers': addMode = addCustomers; break;
        case 'watches': addMode = addWatches; break;
        default: break;
    }

    useEffect(() => {
        const fetchList = async () => {
            try {
                if (mode === 'admins') {
                    const res = await api.get(`/admins/${editId}`)
                    setFirstName(res.data.firstName);
                    setLastName(res.data.lastName);
                    setRole(res.data.role);
                    setEmail(res.data.email);
                    setPassword(res.data.password);
                }
                if (mode === 'customers') {
                    const res = await api.get(`/customers/${editId}`)
                    setFirstName(res.data.firstName);
                    setLastName(res.data.lastName);
                    setEmail(res.data.email);
                    setPassword(res.data.password);
                }
                if (mode === 'watches') {
                    const res = await api.get(`/watches/${editId}`)
                    setName(res.data.name);
                    setBrand(res.data.brand);
                    setDesc(res.data.desc);
                    setCaseColour(res.data.caseColour);
                    setBandColour(res.data.bandColour);
                    setBandType(res.data.bandType);
                    setMovementType(res.data.movementType);
                    setFaceSize(res.data.faceSize);
                    setImageUrl(res.data.imageUrl);
                    setImageUpload(res.data.imageUpload);
                    setPrice(res.data.price);
                    setStock(res.data.stock);
                }

            } catch (err) {
                // @ts-ignore
                console.log(err.response.data)
                // @ts-ignore
                console.log(err.response.status)
                // @ts-ignore
                console.log(err.response.headers)
            }
        }
        fetchList()
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editId])


    let actionArray: any;

    if (mode === 'admins') {

        actionArray = [
            {
                name: 'firstname',
                default: firstName,
                action: setFirstName
            },
            {
                name: 'lastname',
                default: lastName,
                action: setLastName
            },{
                name: 'role',
                default: role,
                action: setRole
            },{
                name: 'email',
                default: email,
                action: setEmail
            },{
                name: 'password',
                default: password,
                action: setPassword
            },
        ]
    }

    if (mode === 'customers') {

        actionArray = [
            {
                name: 'firstname',
                default: firstName,
                action: setFirstName
            },
            {
                name: 'lastname',
                default: lastName,
                action: setLastName
            },{
                name: 'email',
                default: email,
                action: setEmail
            },{
                name: 'password',
                default: password,
                action: setPassword
            },
        ]
    }

    if (mode === 'watches') {

        actionArray = [
            {
                name: 'name',
                default: name,
                action: setName
            },
            {
                name: 'brand',
                default: brand,
                action: setBrand
            },{
                name: 'desc',
                default: desc,
                action: setDesc
            },{
                name: 'casecolour',
                default: caseColour,
                action: setCaseColour
            },{
                name: 'bandcolour',
                default: bandColour,
                action: setBandColour
            },{
                name: 'bandtype',
                default: bandType,
                action: setBandType
            },{
                name: 'movementtype',
                default: movementType,
                action: setMovementType
            },{
                name: 'facesize',
                default: faceSize,
                action: setFaceSize
            },{
                name: 'imageurl',
                default: imageUrl,
                action: setImageUrl
            },
            {
                name: 'imageupload',
                default: imageUpload,
                action: setImageUpload
            },
            {
                name: 'price',
                default: price,
                action: setPrice
            },{
                name: 'stock',
                default: stock,
                action: setStock
            },
        ]
    }



    // @ts-ignore
    const handleUpdate = async (e) => {
        e.preventDefault();
 

        // await updateCurrentUserPassword(password)

        try {
            let res: AxiosResponse<any, any>;
            
            if (mode === 'admins') {
                try {
                    res = await api.patch(`/admins/${editId}`, {
                        firstName,
                        lastName,
                        role,
                        email,
                        password
                    })

                    dispatch(setLoggedInUser({...loggedInUser, firstName, lastName}))

                } catch {
                    alert('Something went wrong attempting to update.')
                }

                
            }
            if (mode === 'customers') {
                try {
                    res = await api.patch(`/customers/${editId}`, {
                        firstName,
                        lastName,
                        email,
                        password
                    })

                    dispatch(setLoggedInUser({...loggedInUser, firstName, lastName}))

                } catch {
                    alert('Something went wrong attempting to update.')
                }
            }
            if (mode === 'watches') {

                try {

                    res = await api.patch(`/watches/${editId}`, {
                        name,
                        brand,
                        desc,
                        caseColour,
                        bandColour,
                        bandType,
                        movementType,
                        faceSize,
                        imageUrl,
                        imageUpload,
                        price,
                        stock
                    })
                } catch {
                    alert('Something went wrong attempting to update.')
                }
            }
            setList((prev: any[]) => prev.map(item => item.id === editId ? { ...res.data} : item))
        } catch (err) {
            // @ts-ignore
            console.log(err.response.data)
            // @ts-ignore
            console.log(err.response.status)
            // @ts-ignore
            console.log(err.response.headers)
        }
        if (mode === 'admins' || mode === 'customers') {
            setFirstName(prev => prev = '')
            setLastName(prev => prev = '')
            setRole(prev => prev = '')
            setEmail(prev => prev = '')
            setPassword(prev => prev = '')
        }

        if (mode === 'watches') {
            setName(prev => prev = '')
            setBrand(prev => prev = '')
            setDesc(prev => prev = '')
            setCaseColour(prev => prev = '')
            setBandColour(prev => prev = '')
            setBandType(prev => prev = '')
            setMovementType(prev => prev = '')
            setFaceSize(prev => prev = '')
            setImageUrl(prev => prev = '')
            setImageUpload(prev => prev = '')
            setPrice(prev => prev = '')
            setStock(prev => prev = 0)
        }
        setEdit(false)
    }


    // @ts-ignore
    const handleDelete = async (e) => {
        e.preventDefault();

        try {

            if (mode === 'admins') {
                await api.delete(`/admins/${editId}`)
            }
            if (mode === 'customers') {
                await api.delete(`/customers/${editId}`)
            }
            if (mode === 'watches') {
                await api.delete(`/watches/${editId}`)
            }

            console.log(`Deleted ID: ${editId}`)
        } catch (err) {
            // @ts-ignore
            console.log(err.response.data)
            // @ts-ignore
            console.log(err.response.status)
            // @ts-ignore
            console.log(err.response.headers)
        }
        setEdit(false)
    }

    // @ts-ignore
    const handleCancel = (e) => {
        e.preventDefault();
        setEdit(false);
    }


    return (
        
        <main className={`admineditform__wrapper`}>

            <h1>Editing ID: {editId}</h1>

            <form>
                <div className={mode === 'watches' ? 'horizontal-form' : 'portrait-form'}>
                {/* @ts-ignore */}
                {addMode.map(item => {
                    return (
                        <div className="admineditform__listitem" key={item.name}>

                            <label htmlFor={noSpaces(item.name)} >{item.name}</label>
                            {getInputType('edit', item.type, item.name, item.options, actionArray)}
                        </div>
                    )
                })}
                </div>

                <div className="admineditform__buttons-wrapper">
                    <button className="admin__buttons" onClick={handleUpdate}>Update</button>
                    <button className="admin__buttons" onClick={handleDelete}>Delete</button>
                    <button className="admin__buttons" onClick={handleCancel}>Cancel</button>
                </div>

            </form>

        </main>
    )};

export default AdminEditForm;
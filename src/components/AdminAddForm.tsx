import { MouseEvent, useState } from "react";
import { addAdmin, addCustomers, addWatches } from "./Constants";
import { getInputType, noSpaces } from "./Utils";
import api from '../api/base'
import { AxiosError, AxiosResponse } from "axios";
import { useAuth } from "../contexts/AuthContext";

// @ts-ignore
const AdminAddForm = ({ add, setAdd, mode, setList }) => {


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
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);

    const { signup } = useAuth();

    if (name) { }

    if (imageUpload) { }

    let addMode: any;

    switch (mode) {
        case 'admins': addMode = addAdmin; break;
        case 'customers': addMode = addCustomers; break;
        case 'watches': addMode = addWatches; break;
        default: break;
    }


    let actionArray: any;

    if (mode === 'admins') {

        actionArray = [
            {
                name: 'firstname',
                action: setFirstName
            },{
                name: 'lastname',
                action: setLastName
            },{
                name: 'role',
                action: setRole
            },{
                name: 'email',
                action: setEmail
            },{
                name: 'password',
                action: setPassword
            },
        ]
    }

    if (mode === 'customers') {

        actionArray = [
            {
                name: 'firstname',
                action: setFirstName
            },{
                name: 'lastname',
                action: setLastName
            },{
                name: 'role',
                action: setRole
            },{
                name: 'email',
                action: setEmail
            },{
                name: 'password',
                action: setPassword
            },
        ]
    }

    if (mode === 'watches') {

        actionArray = [
            {
                name: 'name',
                action: setName
            },{
                name: 'brand',
                action: setBrand
            },{
                name: 'desc',
                action: setDesc
            },{
                name: 'casecolour',
                action: setCaseColour
            },{
                name: 'bandcolour',
                action: setBandColour
            },{
                name: 'bandtype',
                action: setBandType
            },{
                name: 'movementtype',
                action: setMovementType
            },{
                name: 'facesize',
                action: setFaceSize
            },{
                name: 'imageurl',
                action: setImageUrl
            },{
                name: 'imageupload',
                action: setImageUpload
            },{
                name: 'price',
                action: setPrice
            },{
                name: 'stock',
                action: setStock
            },
        ]
    }

    


    const handleAdd = async (e: MouseEvent) => {
        e.preventDefault();

        try {
            let res: AxiosResponse<any, any>;
            if (mode === 'admins') {
                res = await api.post('/admins', {
                    firstName,
                    lastName,
                    role,
                    email,
                    password
                })
            }
            if (mode === 'customers') {
                res = await api.post('/customers', {
                    firstName,
                    lastName,
                    role: 'Customer',
                    email,
                    password
                })
            }
            if (mode === 'watches') {
                res = await api.post('/watches', {
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
            }
            
            setList((prev: any) => [...prev, res.data])

        } catch (error) {

            const err = error as AxiosError

            console.log(err.response?.data)
            console.log(err.response?.status)
            console.log(err.response?.headers)
        }

        if (mode === 'admins' || mode === 'customers') {
            await signup(email, password)
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
            setPrice(prev => prev = 0)
            setStock(prev => prev = 0)
        }

        setAdd(false)
    }

    const handleCancel = (e: MouseEvent) => {
        e.preventDefault();
        setAdd(false);
    }


    return (
        
        <main className={`adminaddform__wrapper`}>

            <h1>Add</h1>

            <form>

                <div className={mode === 'watches' ? 'horizontal-form' : 'portrait-form'}>
                {/* @ts-ignore */}
                {addMode.map(item => {
                    return (
                        <div className="adminaddform__listitem" key={item.name}>

                            <label htmlFor={noSpaces(item.name)} >{item.name}</label>
                            
                            {getInputType('add', item.type, item.name, item.options, actionArray)}
                        </div>
                    )
                })}
                </div>

                <div className="adminaddform__buttons-wrapper">
                    <button className="admin__buttons" onClick={handleAdd}>Add</button>
                    <button className="admin__buttons" type="reset">Reset</button>
                    <button className="admin__buttons" onClick={handleCancel}>Cancel</button>
                </div>

            </form>

        </main>
    )};

export default AdminAddForm;
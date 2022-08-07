import { FormEvent, useRef, useState } from 'react';

import { useAuth } from '../contexts/AuthContext';

// @ts-ignore
import FileBase64 from 'react-file-base64'
import api from '../api/base'

import { useSelector, useDispatch } from 'react-redux'
import { setLoggedInUser } from '../features/loggedInUserSlice';


const AdminSettings = () => {

    const { updateCurrentUserPassword } = useAuth()


    // @ts-ignore
    const loggedInUser = useSelector(state => state.loggedInUser.current)

    const [newPassword, setNewPassword] = useState('');
    const [newProfilePic, setNewProfilePic] = useState('');

    const newPasswordRef = useRef()

    const dispatch = useDispatch()


    
    const handleSave = async (e: FormEvent) => {
        e.preventDefault()

        // console.log(loggedInUser.id)

        if (!newPassword.length && !newProfilePic) return
        
        // update password
        if (newPassword.length > 0) {
            await updateCurrentUserPassword(newPassword)
            console.log('Password updated')
            setNewPassword('')
            // @ts-ignore
            newPasswordRef.current.value = ''
        }

        // console.log(newProfilePic)

        // update profile pic
        if (newProfilePic.length > 0) {

            
            try {
                
                await api.patch(`/admins/${loggedInUser.id}`, {
                    imageUpload: newProfilePic
                }) 

                dispatch(setLoggedInUser({...loggedInUser, imageUpload: newProfilePic}))
            } catch {
                alert('Something went wrong. Maybe your file is too large.')
            }
            
        }

    }
    

    return (

        <form onSubmit={handleSave}>

        <main className="adminsettings__pagewrapper">
            

            
            <div className='adminsettings__item'>
                <p>Change Profile Picture<br /><span className='text-[12px]'>(jpg/png)</span></p>
                <FileBase64 
                    type='file' multiple={false}
                    // @ts-ignore
                    onDone={({ base64 }) => setNewProfilePic(base64)} />
            </div>

            <div className='adminsettings__item'>
                <p>Update Password<br /><span className='text-[12px]'>(leave empty to keep the same)</span></p>
                {/* @ts-ignore */}
                <input type='password' ref={newPasswordRef} onChange={e => setNewPassword(e.target.value)} />
            </div>

            <button type='submit' className='admin__buttons w-fit'>Save</button>

        </main>
        </form>
    )};

export default AdminSettings;
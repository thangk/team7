import { useRef, useState } from 'react';

import { useAuthAdmin } from '../contexts/AuthContextAdmin';

const AdminSettings = () => {

    const { updateCurrentUserPassword } = useAuthAdmin()

    const [newPassword, setNewPassword] = useState('');

    const newPasswordRef = useRef()


    // @ts-ignore
    const handleSave = async (e) => {
        e.preventDefault()
        
        if (newPassword.length > 0) {
            await updateCurrentUserPassword(newPassword)
            console.log('Password updated')
            setNewPassword('')
            // @ts-ignore
            newPasswordRef.current.value = ''
        } else {

            console.log('Password not updated')
        }

    }
    

    return (

        <form onSubmit={handleSave}>

        <main className="adminsettings__pagewrapper">
            

            
            <div className='adminsettings__item'>
                <p>Change Profile Picture<br /><span className='text-[12px]'>(jpg/png)</span></p>
                <input type='file' accept="image/png, image/jpeg, image/jpg" />
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
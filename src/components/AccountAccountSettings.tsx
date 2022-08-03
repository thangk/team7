import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useAuth } from '../contexts/AuthContext';
import { setPageTitle } from '../features/accountAreaSlice';
import { setLoggedInUser } from '../features/loggedInUserSlice';
import api from '../api/base'
// @ts-ignore
import FileBase64 from 'react-file-base64'

// @ts-ignore
const AccountAccountSettings = () => {

    const { updateCurrentUserPassword } = useAuth()

    const dispatch = useDispatch()
    
    dispatch(setPageTitle('settings'))

    const [newPassword, setNewPassword] = useState('');
    const [newProfilePic, setNewProfilePic] = useState('');

    const newPasswordRef = useRef()

    // @ts-ignore
    const loggedInUser = useSelector(state => state.loggedInUser.current)

    


    // @ts-ignore
    const handleSave = async (e) => {
        e.preventDefault();

        if (!newPassword.length && !newProfilePic) return

        // update password
        if (newPassword.length > 0) {
            await updateCurrentUserPassword(newPassword)

            await api.patch(`/customers/${loggedInUser.id}`, {
                password: newPassword
            }) 

            console.log('Password updated')
            setNewPassword('')
            // @ts-ignore
            newPasswordRef.current.value = ''
        }

        console.log(newProfilePic)

        // update profile pic
        if (newProfilePic.length > 0) {

            
            try {
                
                await api.patch(`/customers/${loggedInUser.id}`, {
                    imageUpload: newProfilePic
                }) 

                console.log(loggedInUser.id)

                dispatch(setLoggedInUser({...loggedInUser, imageUpload: newProfilePic}))

                console.log(loggedInUser.id)
                console.log(loggedInUser)
                console.log('Profile pic uploaded')
            } catch {
                alert('Something went wrong. Maybe your file is too large.')
            }
            
            console.log('this ran?')
        }
    }

    return (
        <main className="accountsettings__pagewrapper">

            <section className="accountsettings__item">

                <p className="accountsettings__item_col1 text-[18px]">Change Profile Picture<br /><span className="text-[14px]">(jpg/png)</span></p>

                <div className="accountsettings__item_col2">
                <FileBase64 
                    type='file' multiple={false}
                    // @ts-ignore
                    onDone={({ base64 }) => setNewProfilePic(base64)} />
                </div>
            </section>


            <section className="accountsettings__item">

                <p className="accountsettings__item_col1 text-[18px]">Update Password<br /><span className="text-[14px]">(leave empty to keep the same password)</span></p>

                <div className="accountsettings__item_col2">
                    <input type='password' />
                </div>
            </section>

            <section className="accountsettings__item">

                <button onClick={handleSave}>Save</button>
            </section>


        </main>
    )};

export default AccountAccountSettings;
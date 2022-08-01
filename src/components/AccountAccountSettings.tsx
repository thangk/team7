


// @ts-ignore
const AccountAccountSettings = ({ setPageTitle }) => {

    setPageTitle('account settings')

    // @ts-ignore
    const handleSave = (e) => {
        e.preventDefault();
    }

    return (
        <main className="accountsettings__pagewrapper">

            <section className="accountsettings__item">

                <p className="accountsettings__item_col1 text-[18px]">Change Profile Picture<br /><span className="text-[14px]">(jpg/png)</span></p>

                <div className="accountsettings__item_col2">
                    <input type='file' accept="image/png, image/jpeg, image/jpg" />
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
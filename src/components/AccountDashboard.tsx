

// @ts-ignore
const AccountDashboard = ({ setPageTitle }) => {

    setPageTitle('dashboard');

    return (
        
        <main className="accountdashboard__dashboard_wrapper">


            <section className="accountdashboard__numoforders">

                <h1>34</h1>
                <h2>orders</h2>

            </section>

            <section className="accountdashboard__numofitemsincart">

                <h1>10</h1>
                <h2>in cart</h2>

            </section>

        </main>
    )};

export default AccountDashboard;
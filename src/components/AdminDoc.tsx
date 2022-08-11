



const AdminDoc = () => {


    return (


        <main className="admindoc__pagewrapper">
            
            <div className="admindoc__docitem">
                <h1 className="admindoc__docheader">Where can I see the status of the backend connectivity?</h1>
                <p className="admindoc__doccontent">There is a status check tab in the left panel. This page will show whether the system is connected to the backend and database or not.</p>
            </div>

            <div className="admindoc__docitem">
                <h1 className="admindoc__docheader">Where can I manage the contents of the website?</h1>
                <p className="admindoc__doccontent">There are three tabs on the left for Administrators, Customers and Products. Each of those tabs will give access to the CRUD operations of each category. You can add new user, update and delete from that panel.</p>
            </div>

            <div className="admindoc__docitem">
                <h1 className="admindoc__docheader">What is the settings page for?</h1>
                <p className="admindoc__doccontent">In this page, the current logged in user can update their profile or password.</p>
            </div>

            <div className="admindoc__docitem">
                <h1 className="admindoc__docheader">What does the import / export page do?</h1>
                <p className="admindoc__doccontent">We have created this features to allow bulk uploading or downloading of content data for administrators, customers or the products. This is a very useful feature in the case of using it to backup data or to restore a lot of records at once to the database.</p>
            </div>

            <div className="admindoc__docitem">
                <h1 className="admindoc__docheader">Can this admin panel be accessed via mobile?</h1>
                <p className="admindoc__doccontent">Yes. Both the customer side frontend and admin panel is fully mobile responsive.</p>
            </div>


        </main>
        
    )};

export default AdminDoc;
import { format } from 'date-fns'


// @ts-ignore
const AccountOrders = ({ setPageTitle }) => {

    const today = format(new Date(),'dd-MM-yyyy');



    // console.log(today)

    setPageTitle('orders')

    return (
        <main className="accountorders__pagewrapper">

                <div className="accountorders__contentwrapper_header">
                    <div className="accountorders__contentwrapper_col1">Name</div>
                    <div className="accountorders__contentwrapper_col2">Qty</div>
                    <div className="accountorders__contentwrapper_col3">Date</div>
                </div>

                <hr className="accountorders__hr col-span-3" />

                <div className="accountorders__contentwrapper_item">
                    <div className="accountorders__contentwrapper_col1">Apple Watch 3 Apple Watch 3 Apple Watch 3 Apple Watch 3 Apple Watch 3 Apple Watch 3 Apple Watch 3 Apple Watch 3 Apple Watch 3 Apple Watch 3 Apple Watch 3 Apple Watch 3</div>
                    <div className="accountorders__contentwrapper_col2">2</div>
                    
                    <div className="accountorders__contentwrapper_col3">{today}</div>
                </div>

                <div className="accountorders__contentwrapper_item">
                    <div className="accountorders__contentwrapper_col1">Apple Watch 3</div>
                    <div className="accountorders__contentwrapper_col2">2</div>
                    
                    <div className="accountorders__contentwrapper_col3">{today}</div>
                </div>

                <div className="accountorders__contentwrapper_item">
                    <div className="accountorders__contentwrapper_col1">Apple Watch 3</div>
                    <div className="accountorders__contentwrapper_col2">2</div>
                    
                    <div className="accountorders__contentwrapper_col3">{today}</div>
                </div>

                <div className="accountorders__contentwrapper_item">
                    <div className="accountorders__contentwrapper_col1">Apple Watch 3</div>
                    <div className="accountorders__contentwrapper_col2">2</div>
                    
                    <div className="accountorders__contentwrapper_col3">{today}</div>
                </div>

                <div className="accountorders__contentwrapper_item">
                    <div className="accountorders__contentwrapper_col1">Apple Watch 3</div>
                    <div className="accountorders__contentwrapper_col2">2</div>
                    
                    <div className="accountorders__contentwrapper_col3">{today}</div>
                </div>

                <div className="accountorders__contentwrapper_item">
                    <div className="accountorders__contentwrapper_col1">Apple Watch 3</div>
                    <div className="accountorders__contentwrapper_col2">2</div>
                    
                    <div className="accountorders__contentwrapper_col3">{today}</div>
                </div>

                <div className="accountorders__contentwrapper_item">
                    <div className="accountorders__contentwrapper_col1">Apple Watch 3</div>
                    <div className="accountorders__contentwrapper_col2">2</div>
                    
                    <div className="accountorders__contentwrapper_col3">{today}</div>
                </div>

                <div className="accountorders__contentwrapper_item">
                    <div className="accountorders__contentwrapper_col1">Apple Watch 3</div>
                    <div className="accountorders__contentwrapper_col2">2</div>
                    
                    <div className="accountorders__contentwrapper_col3">{today}</div>
                </div>

                <div className="accountorders__contentwrapper_item">
                    <div className="accountorders__contentwrapper_col1">Apple Watch 3</div>
                    <div className="accountorders__contentwrapper_col2">2</div>
                    
                    <div className="accountorders__contentwrapper_col3">{today}</div>
                </div>

                <div className="accountorders__contentwrapper_item">
                    <div className="accountorders__contentwrapper_col1">Apple Watch 3</div>
                    <div className="accountorders__contentwrapper_col2">2</div>
                    
                    <div className="accountorders__contentwrapper_col3">{today}</div>
                </div>

                <div className="accountorders__contentwrapper_item">
                    <div className="accountorders__contentwrapper_col1">Apple Watch 3</div>
                    <div className="accountorders__contentwrapper_col2">2</div>
                    
                    <div className="accountorders__contentwrapper_col3">{today}</div>
                </div>

                <div className="accountorders__contentwrapper_item">
                    <div className="accountorders__contentwrapper_col1">Apple Watch 3</div>
                    <div className="accountorders__contentwrapper_col2">2</div>
                    
                    <div className="accountorders__contentwrapper_col3">{today}</div>
                </div>

                <div className="accountorders__contentwrapper_item">
                    <div className="accountorders__contentwrapper_col1">Apple Watch 3</div>
                    <div className="accountorders__contentwrapper_col2">2</div>
                    
                    <div className="accountorders__contentwrapper_col3">{today}</div>
                </div>

                <div className="accountorders__contentwrapper_item">
                    <div className="accountorders__contentwrapper_col1">Apple Watch 3</div>
                    <div className="accountorders__contentwrapper_col2">2</div>
                    
                    <div className="accountorders__contentwrapper_col3">{today}</div>
                </div>

                <div className="accountorders__contentwrapper_item">
                    <div className="accountorders__contentwrapper_col1">Apple Watch 3</div>
                    <div className="accountorders__contentwrapper_col2">2</div>
                    
                    <div className="accountorders__contentwrapper_col3">{today}</div>
                </div>

                <div className="accountorders__contentwrapper_item">
                    <div className="accountorders__contentwrapper_col1">Apple Watch 3</div>
                    <div className="accountorders__contentwrapper_col2">2</div>
                    
                    <div className="accountorders__contentwrapper_col3">{today}</div>
                </div>

                <div className="accountorders__contentwrapper_item">
                    <div className="accountorders__contentwrapper_col1">Apple Watch 3</div>
                    <div className="accountorders__contentwrapper_col2">2</div>
                    
                    <div className="accountorders__contentwrapper_col3">{today}</div>
                </div>



        </main>
    )};

export default AccountOrders;
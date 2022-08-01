import { dashboardStats } from "./Constants";
import api from '../api/base'

const AdminImportExport = () => {


    // @ts-ignore
    const handleImport = (apiName: string, e) => {
        e.preventDefault();

        const reader = new FileReader()
        reader.readAsText(e.target.files[0], "UTF-8")

        reader.onload = async e => {

            // @ts-ignore
            const result = JSON.parse(e.target.result)

            try {
                
                for (const item of result) {

                    await api.post(`/${apiName}`, item, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                }
                
                console.log(`Data posted to API server.`)

            } catch (err) {
                // @ts-ignore
                console.log(err.response.data)
                // @ts-ignore
                console.log(err.response.status)
                // @ts-ignore
                console.log(err.response.headers)
            }
        }
        
    }


    // @ts-ignore
    const handleExport = async (apiName: string, e) => {
        e.preventDefault();

        try {
            const res = await api.get(`/${apiName}`)
 
            const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
                JSON.stringify(res.data)
              )}`;
              const link = document.createElement("a");
              link.href = jsonString;
              link.download = `${apiName}.json`;
              link.click();

        } catch (err) {
            // @ts-ignore
            console.log(err.response.data)
            // @ts-ignore
            console.log(err.response.status)
            // @ts-ignore
            console.log(err.response.headers)
        }
    }
    

    return (
        <main className="ie__pagewrapper">
            
            
            {dashboardStats.map(item => {
                return (

                    <section className="ie__wrapper" key={item.apiName}>
                        
                        <h1>{item.longName}</h1>

                        <div>
                        <label htmlFor={item.apiName} className="admin__buttons hover:cursor-pointer" >Import</label>
                            <input type='file' id={item.apiName} className="hidden" accept='application/JSON' onChange={e => handleImport(item.apiName, e)} />
                        </div>

                        <button className="admin__buttons" onClick={e => handleExport(item.apiName, e)}>Export</button>

                    </section>
                )
            })}

        </main>
    )};

export default AdminImportExport;
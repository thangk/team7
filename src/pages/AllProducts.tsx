import styles from '../styles/AllProducts.module.scss'
import FilterPanel from '../components/FilterPanel';


const someRandomFunction = () => {
    // you can write some other random functions in this file also that's some how related to the main function below
}


const AllProducts = () => {
        
    // write logics here
    const pageTitle = 'All Products'
        
    return (
        <>
            <FilterPanel />
            
            {/* this is a comment, all HTML elements go here. any logics written here must be between curly braces like an example below */}
            <h1>{pageTitle}</h1>
            
        </>
    )

};

export default AllProducts;
import { motion } from "framer-motion";
// import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";




const HeaderCart = () => {

    // const navigate = useNavigate()

    // @ts-ignore
    const cartItemsCount = useSelector(state => state.cart.numOfItems)

    // @ts-ignore
    const currentTheme = useSelector(state => state.theme.current)


    return (
        <div className={`header__cartItemsCount theme-text-${currentTheme}-2 theme-bg-${currentTheme}-darker`}>
            <motion.div
            // initial={{ scale: 1.4 }}
            // animate={{ scale: 1.0 }}
            >{cartItemsCount}</motion.div>
        </div>
    )};

export default HeaderCart;
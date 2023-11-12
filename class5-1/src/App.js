import React , {Fragment} from 'react'
import Navbar from './stateEx/Navbar/Navbar'
import Product from './stateEx/Products/Product'
import Test from './stateEx/Products/Test'
import Product1 from './stateEx/Products/product-1'

const App =()=>{
    return(
        <Fragment>
            <Navbar/>
            <hr />
             <Product/>
             <Test/>
             <Product1/>

        </Fragment>
    )
}
export default App


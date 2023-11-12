import React , {Fragment} from 'react'
import Navbar from './stateEx/Navbar/Navbar'
import Employee from './stateEx/ListRendering/Employee'
import Home from './stateEx/ConditionalEx/Home'
import Home1 from  './stateEx/ConditionalEx/Home-1'
import Home2 from './stateEx/ConditionalEx/Home-2'

const App =()=>{
    return(
        <Fragment>
            <Navbar/>
            <hr />
             <Employee/>
             <Home/>
             <Home1 />
             <Home2 />
            
             
             

        </Fragment>
    )
}
export default App


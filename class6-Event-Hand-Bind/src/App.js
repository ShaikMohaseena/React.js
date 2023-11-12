import React , {Fragment} from 'react'
import Navbar from './stateEx/Navbar/Navbar'
import Salary from './stateEx/Message/Salary'
import Message from './stateEx/Message/Message'

const App =()=>{
    return(
        <Fragment>
            <Navbar/>
            <hr />
             <Salary/>
             <Message/>
             
             

        </Fragment>
    )
}
export default App


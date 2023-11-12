import React, {Component} from 'react'

class Test extends Component{
    state
     constructor(props){
        super(props)
        console.log("First Constructor")
        this.State={
            qty:1
        }
     }

     render(){
        console.log("Second Render method")
        return(
            <div>Test
 
               <h3>qty:{this.state.qty}</h3>
            </div>
        )
     }


}
export default Test
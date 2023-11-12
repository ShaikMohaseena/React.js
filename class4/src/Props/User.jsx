import React, {Component} from 'react'
import Employee from './Employee'
class User extends Component{
    user={
        name:"Pandu",
        email:"pandu@gmail.com",
        loc:['Wayanad','banglore']
    }

    render()
    {
        return <div>
            <h2>User Component</h2>
            <hr/>
            <Employee user={this.user} eid={101} />
        </div>

       
    
       
    }
}

export default User
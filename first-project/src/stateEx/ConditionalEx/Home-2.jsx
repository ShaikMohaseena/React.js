import React, {Component} from 'react'

export class Home2 extends Component{
    state={
        isLogin:false,
        message:""
    }
    loginHandler = () =>{
        this.setState({isLogin:true , message:"welcome-Buddy"})
    }
    logoutHandler =()=>{
        this.setState({isLogin:false , message:"visit again"})
    }
    render(){
        return(
            <div>{JSON.stringify(this.state)}
            
            <h3>Home Comp</h3>
            <hr />
            {
                !this.state.isLogin ?<> <button onClick={this.loginHandler}>Login </button>   </> :
                                     <> <button onClick={this.logoutHandler}>Logout </button>  </>
            }

            <h4>{this.state.message}</h4>
            </div>
        )
    }
}export default Home2
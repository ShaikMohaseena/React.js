import Header from './Components/Header'
import Landing from './Components/Landing'
import Service from './Components/Service'
import Footer from './Components/Footer'
let App = () =>{

    return <div>

        <nav  className='navbar navbar-dark bg-dark'>
            <a href=".#" className='navbar-brand'>Bootstrap Example</a>
         </nav>
         <hr/>
           <h1>App Component</h1>
         <hr/>
         <Header/>
         <Landing/>
         <Service/>
         <Footer/>

    </div>
}
export default App



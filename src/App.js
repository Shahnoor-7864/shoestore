import React from 'react';
import { Switch , Route ,  Router} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Product from './Product';
import ProductItem from './ProductItem';


function App() {
  return (
    <div className="App">
      <Navbar/>
   
      <Switch>
        <Route exact path= '/' component = {Home} />
        <Route path = "/About" component = {About}/>
        <Route exact path ='/Product' component ={Product}/>
        <Route path="/product/:id" component ={ProductItem}/>
        <Route path="*" component={()=><h2>404 not found</h2>}/>
        
        
      </Switch>
     
      


     {/*} <div className = "my-5" >
      
        <div className = "container-fluid mb-5">
            <div className = "row">
              <div className = "col-10 mx-auto">
              <div className ="row gy-4" > 
                  {Data.map((val, ind) => {
                      return <Product key = {ind} img = {val.img} title = {val.title} />
                  })}
               </div> 
              </div>
            </div>
        </div>
                </div>*/}
    
     
    </div>
  );
}
/*https://images.app.goo.gl/jNUiKNSF8TjJpRsE8
https://images.app.goo.gl/UpdJ851Nqh9CEBP78
https://images.app.goo.gl/1a9woDw9srA5ASKw6
https://images.app.goo.gl/eacFc511oeKTrreT9
https://images.app.goo.gl/8PQtT5BFPMYB1FKJ8 
https://images.app.goo.gl/AhxdS1Q6eDNYYNHG9
https://images.app.goo.gl/zDUuCNKC9usB7zMh6
https://images.app.goo.gl/jehdKarX59Yg6KuJ8
https://images.app.goo.gl/diEgSDNW6ommDgD78
https://images.app.goo.gl/mok4meiTZY615k6N8*/
export default App;

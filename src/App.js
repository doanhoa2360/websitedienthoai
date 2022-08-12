
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Product from './components/Product';
import {Route} from 'react-router-dom';
import {Redirect,Switch} from 'react-router'
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
function App() {
  return (
 <><Header/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/product" component={Product}/>
      <Route exact path="/product/:id" component={ProductDetail}/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/checkout" component={Checkout}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/footer" component={Footer}/>
      <Redirect to="/"/>
      
    </Switch>
    <Footer/>
 </>

  );
}

export default App;

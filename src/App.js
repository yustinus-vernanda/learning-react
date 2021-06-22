import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import CounterExample from './Components/CounterExample'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './View/Home'
import About from './View/About'
import Product from './View/Product'



function App() {

  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header/>
        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/product/:id">
              <Product/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>

  );
}

export default App;

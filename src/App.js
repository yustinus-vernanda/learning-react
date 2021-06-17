import logo from './logo.svg';
import './App.css';
import HelloWorld from './Components/HelloWorld'
import CounterExample from './Components/CounterExample'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


function App() {
  return (
    <div>
      <Header/>
      <HelloWorld name="Nanda"/>
      /*<Router>
      <ul>
        <li>
          <Link to="/" className="text-blue-500">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-blue-500">About</Link>
        </li>
      </ul>
      </Router>
      <Switch>
        <Route exact path="/">
          <h1 className="font-bold text-2xl">This is home page</h1>
        </Route>
        <Route path="/about">
          <h1 className="font-bold text-2xl">About us</h1>
        </Route>
      </Switch>*/
      <CounterExample/>
      <Footer/>
    </div>

  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import HelloWorld from './Components/HelloWorld'
import CounterExample from './Components/CounterExample'

import Header from './Components/Header'
import Footer from './Components/Footer'


function App() {
  return (
    <div>
      <Header/>
      <HelloWorld name="Nanda"/>
      <CounterExample/>
      <Footer/>
    </div>

  );
}

export default App;

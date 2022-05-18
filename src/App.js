import Navbar from './components/navbar.js';
import Home from './components/home.js';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <>
      <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
     </Switch>
    </>
  );
}

export default App;

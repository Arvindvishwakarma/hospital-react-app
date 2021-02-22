import './App.css';
import NavbarMenu from './components/NavbarMenu';
import Login from './pages/Login';
import Home from './pages/Home';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <Switch>
        <Route path="/" exact={true}><Home /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="*"><PageNotFound /></Route>
       </Switch>
      
    </div>
  );
}

function PageNotFound(){
  return(
    <div>
      <h1>It Is 404 Page Not Found</h1>
    </div>
  )
}

export default App;

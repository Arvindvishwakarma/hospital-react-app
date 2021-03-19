import './App.css';
import {React} from 'react'
import NavbarMenu from './components/NavbarMenu';
import Home from './pages/Home';
import Objectives from './pages/Objectives';
import Guide from './pages/Guide';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLogin from './pages/admin/AdminLogin';
import HospitalLogin from './pages/hospitals/HospitalLogin';
import HospitalRegister from './components/HospitalComponents/RequestForms';
import UserRegister from './components/HospitalComponents/UserForm';
import AdminDashboard from './pages/admin/AdminDashboard';
import HospitalDetsils from './pages/hospitals/HospitalsDetailsPage';
import HospitalDashboard from './pages/hospitals/HospitalDashboard';
import MapWork from './pages/mapWork';

import {Route, Switch} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <NavbarMenu />
      <Switch>
        <Route path="/" exact={true}><Home /></Route>
        <Route path="/objectives"><Objectives /></Route>
        <Route path="/guide"><Guide /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/admin_login"><AdminLogin /></Route>
        <Route path="/hospital_login"><HospitalLogin /></Route>
        <Route path="/hospital_register"><HospitalRegister /></Route>
        <Route path="/admin_dashboard"><AdminDashboard /></Route>
        <Route path="/user_register"><UserRegister /></Route>
        <Route path="/hospitalDetails"><HospitalDetsils /></Route>
        <Route path="/hospitalDashboard"><HospitalDashboard /></Route>
        <Route path="/mapWork"><MapWork /></Route>
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

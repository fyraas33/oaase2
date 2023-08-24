
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Allcss/Under.css'


import { Banner } from "./components/Banner";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Services } from './components/Services';

import { Solutions } from './components/Solutions';
import { About } from './components/About';
import { Outlet, Route, Routes } from 'react-router-dom';
import Outsourcing from './components/under-comp/Outsourcing';
import Home from './components/Home';
import Visualization from './components/under-comp/Visualization';
import Microsoftsol from './components/under-comp/Microsoftsol';
import Websol from './components/under-comp/Websol';
import Cyberance from './components/under-comp/Cyberance';
import DigitalMar from './components/under-comp/DigitalMar';
import Insgh from './components/under-comp/Insgh';
import Allcntct from './components/under-comp/Allcntct';
import Agb from './components/under-comp/Agb';
import Impressum from './components/under-comp/Impressum';
import Datensch from './components/under-comp/Datensch';





function App() {
 
  return (
    <div className="App">
    
 <NavBar/>
 <Routes>
 <Route path="/" element={<Home />}></Route> 

  <Route path="/Outsourcing" element={<Outsourcing />}></Route> 
  <Route path="/3D-Visualization" element={<Visualization />}></Route> 
  <Route path="/Microsoft-solutions" element={<Microsoftsol />}></Route> 
  <Route path="/Web-3.0-solutions" element={<Websol />}></Route> 
  <Route path="/Cyberance" element={<Cyberance />}></Route> 
  <Route path="/Digital-Marketing" element={<DigitalMar />}></Route> 
  <Route path="/Insights" element={<Insgh />}></Route> 
  <Route path="/Contact" element={<Allcntct />}></Route> 
  <Route path="/AGB" element={<Agb />}></Route> 
  <Route path="/Impressum" element={<Impressum />}></Route> 
  <Route path="/Datenschutzerklärung" element={<Datensch />}></Route> 
</Routes>
      <Footer />
     
    </div>
  );
}


export default App;

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navbar/Navbar'
import Home from './components/home/Home.js'
import LocationApp from './components/examples/location/LocationApp';
import Search from './components/examples/search/Search';
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/location" element={<LocationApp />}/>  
              <Route path="/search" element={<Search />}/>  
      </Routes>
    </div>
  );
}

export default App;

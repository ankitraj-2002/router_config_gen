import './App.css';
import * as React from 'react';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import PresetGen from "./components/page/presetGen/PresetGen";
import Navbar from "./components/navbar/Navbar"
import Homepage from "./components/page/homepage/Homepage"
function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        {/* <Link to="/presetGen">PresetGen</Link>
        <Link to= "/homepage">HomePage</Link> */}
        <Routes>
          <Route path="/homepage" element={<Homepage />}/>
          <Route path="/presetGen" element={<PresetGen />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
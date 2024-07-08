import './App.css';
import * as React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import PresetGen from "./components/page/presetGen/PresetGen";
import Navbar from "./components/navbar/Navbar"
import Homepage from "./components/page/homepage/Homepage"
import Terminal from "./components/page/terminal/Terminal"
import Landingpage from './components/page/landingpage/Landingpage';
// import img from "./components/images/gbm.png"
function App() {
  return (
    <div className="App">
      {/* <img src = {img} alt = ""></img> */}
      <Router>
        <Navbar />
        <div  className = "pages">
        <Routes>
          <Route path="/" element={<Landingpage />}/>
          <Route path="/homepage" element={<Homepage />}/>
          <Route path="/presetGen" element={<PresetGen />}/>
          <Route path="/terminal" element={<Terminal />}/>
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
import './App.css';
import * as React from 'react';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import PresetGen from "./components/page/presetGen/PresetGen";
import Header from "./components/header/Header"
import Homepage from "./components/page/homepage/Homepage"
function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Link to="/presetGen">PresetGen</Link>
        <Link to= "/homepage">HomePage</Link>
        <Routes>
          <Route path="/homepage" element={<Homepage />}/>
          <Route path="/presetGen" element={<PresetGen />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
import './App.css';
import * as React from 'react';

import Header from "./components/header/Header"
import Editorpage from "./components/page/editor_pg/Editorpage"
function App() {
  return (
    <div className="App">
      <div className  = "title">Policy Generator</div>
      <div className ="Base_Command">Set</div>
      <div> 
        <label>
            <select>

              <option value="interface">Interface</option>

              <option value="protocol bgp">Protocol Bgp</option>

              <option value="system">Systems</option>

            </select>
  
      </label>
</div>
    </div>
  );
}

export default App;
import './App.css';
import * as React from 'react';
import Header from "./components/header/Header"
import Homepage from "./components/page/homepage/Homepage"
function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
import './App.css';
import Intro from './pages/Intro';
import Home from './pages/Home';
import { userContext, diffContext } from './MyContext';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useState } from 'react';

function App() {

  const [user, setUser] = useState("");
  const [diff, setDiff] = useState("")

  return (
    <userContext.Provider value={{ user, setUser }}>
      <diffContext.Provider value={{ diff, setDiff }}>
        <Router>

          <div className="App">
            <div className='title_cont'>
              <h2 className='title1'>FOOTBALL</h2><h2 className='title2'>QUIZ</h2>
            </div>
            <Routes>
              <Route exact path="/" element={<Intro />}/>
              <Route path="/home" element={<Home />} />
            </Routes>

          </div>

        </Router>
      </diffContext.Provider>
    </userContext.Provider>

  );
}

export default App;

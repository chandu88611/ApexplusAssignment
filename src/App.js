import './App.css';
// import Canvas from './Canvas';
import Scenario from './Scenario';
import Vehicle from './Vehicle';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllScenarios from './AllScenarios';
import Home from './Home';
function App() {
  return (
    <div className="App">  
    <Router>
<Navbar/>
    <Routes>
      <Route path="addscene" element={ <Scenario/>}/>
      <Route path="/" element={ <Home/>}/>

      <Route path="/addvehicle" element={ <Vehicle/>}/>
      <Route path="/alls" element={ <AllScenarios/>}/>


    </Routes>
    </Router>
   


    {/* <Canvas/> */}
    </div>
  );
}

export default App;

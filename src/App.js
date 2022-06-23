import './App.css';
import {
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import SideMenu from './Components/Side Menu/SideMenu';
import Basement from './Components/Basement/Basement';
import ListAgents from './Components/ListAgents/ListAhents';
import AgentContainer from './Components/ListAgents/Agent/AgentContainer';


function App() {
  return (
    <div className="App">
      <div className='app_content'>
        <div className='app_navbar'>
          <SideMenu />
        </div>
        <div className='app_wrapper'>
          <Routes>
            <Route path="/" element={<div>home</div>} />
            <Route path="organizations" element={<ListAgents />}>
              <Route path="" element={<div>
                <div>List agents</div>
                <NavLink to='22'>org 22</NavLink>
              </div>} />
              <Route path=":id" element={<AgentContainer/>} />
            </Route>
            <Route path="find" element={<div>find</div>} />
            <Route path="setting" element={<div>setting</div>} />
            <Route path="support" element={<div>support</div>} />
            <Route path="logout" element={<div>logout</div>} />
          </Routes>
        </div>
      </div>
      <div className='app_basement'>
        <Basement />
      </div>
      <p className='test'>
        Learn React
      </p>
    </div>
  );
}

export default App;

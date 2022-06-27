import './App.css';
import { Routes, Route} from "react-router-dom";
import SideMenu from './Components/Side Menu/SideMenu';
import Basement from './Components/Basement/Basement';
import AgentContainer from './Components/ListAgents/Agent/AgentContainer';
import ChoiceOfAgentContainer from './Components/ListAgents/ChoiceOfAgent/ChoiceOfAgentContainer';
import ListAhentsContainer from './Components/ListAgents/ListAhentsContainer';
import LoginContainer from './Components/Login/LoginContainer';


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
            <Route path="organizations" element={<ListAhentsContainer />}>
              <Route path="agents">
                <Route path="" element={<ChoiceOfAgentContainer />} />
                <Route path=":id" element={<AgentContainer/>} />
              </Route>
            </Route>
            <Route path="find" element={<div>find</div>} />
            <Route path="setting" element={<div>setting</div>} />
            <Route path="support" element={<div>support</div>} />
            <Route path="logout" element={<div>logout</div>} />
            <Route path="login" element={<LoginContainer />} />
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

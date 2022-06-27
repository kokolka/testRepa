import './App.css';
import { Routes, Route} from 'react-router-dom';
import Basement from './Components/Basement/Basement';
import AgentContainer from './Components/ListAgents/Agent/AgentContainer';
import ChoiceOfAgentContainer from './Components/ListAgents/ChoiceOfAgent/ChoiceOfAgentContainer';
import ListAhentsContainer from './Components/ListAgents/ListAhentsContainer';
import LoginContainer from './Components/Login/LoginContainer';
import SideMenuContainer from './Components/Side Menu/SideMenuContainer';
import HomeContainer from './Components/Home/HomeContainer';

function App() {
  return (
    <div className="App">
      <div className='app_content'>
        <div className='app_navbar'>
          <SideMenuContainer />
        </div>
        <div className='app_wrapper'>
          <Routes>
            <Route path="/" element={<HomeContainer/>} />
            <Route path="organizations" element={<ListAhentsContainer />}>
              <Route path="agents">
                <Route path="" element={<ChoiceOfAgentContainer />} />
                <Route path=":id" element={<AgentContainer/>} />
              </Route>
            </Route>
            <Route path="search" element={<div>search</div>} />
            <Route path="setting" element={<div>setting</div>} />
            <Route path="support" element={<div>support</div>} />
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

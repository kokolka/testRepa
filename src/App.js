import './App.css';
import { Routes, Route } from 'react-router-dom';
import Basement from './Components/Basement/Basement';
import AgentContainer from './Components/ListAgents/Agent/AgentContainer';
import ChoiceOfAgentContainer from './Components/ListAgents/ChoiceOfAgent/ChoiceOfAgentContainer';
import ListAhentsContainer from './Components/ListAgents/ListAhentsContainer';
import LoginContainer from './Components/Login/LoginContainer';
import SideMenuContainer from './Components/Side Menu/SideMenuContainer';
import HomeContainer from './Components/Home/HomeContainer';
import CreatePageAgentContainer from './Components/CreatePageAgent/CreatePageAgentContainer';

import { connect } from 'react-redux';
import {setSizeApp} from './redux/appState/appState';

function App(props) {

  const reSize = () => { //функция для изменения размера root элемента в state
    if (props.sizeApp != document.getElementById('root').offsetWidth) { //проверка, изменился ли азмер экрана
      props.setSizeApp(document.getElementById('root').offsetWidth);
    }
  }

  new ResizeObserver(reSize).observe(document.getElementById('root')); //подписывание на изменение размера экрана

  return (
    <div className="App">
      <div className='app_content'>
        <div className='app_navbar'>
          <SideMenuContainer />
        </div>
        <div className='app_wrapper'>
          <Routes>
            <Route path="/"  >
              <Route path="create_page" element={<CreatePageAgentContainer />} />
              <Route path="" element={<HomeContainer />} />
            </Route>
            <Route path="organizations" element={<ListAhentsContainer />}>
              <Route path="agents">
                <Route path="" element={<ChoiceOfAgentContainer />} />
                <Route path=":id" element={<AgentContainer />} />
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

const mstp = (state) => ({
  sizeApp: state.appState.sizeApp
})

export default connect(mstp, {
  setSizeApp
})(App);

import logo from './logo.svg';
import './App.css';
import SideMenu from './Components/Side Menu/SideMenu';
import Basement from './Components/Basement/Basement';

function App() {
  return (
    <div className="App">
      <div>
        <SideMenu />
      </div>
      <div>
        <Basement />
      </div>
      <p>
        Learn React
      </p>
    </div>
  );
}

export default App;

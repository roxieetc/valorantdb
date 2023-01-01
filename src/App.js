import './App.css';
import { Routes, Route} from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Maps from './Components/Maps/Maps';
import Cards from './Components/Cards/Cards';
import Sprays from './Components/Sprays/Sprays';
import Agents from './Components/Agents/Agents';
import AgentInfo from './Components/AgentInfo/AgentInfo';
import Weapons from './Components/Weapons/Weapons';
import Skins from './Components/WeaponSkins/Skins';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/maps' element={<Maps />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/sprays' element={<Sprays />} />
        <Route path='/agents' element={<Agents />} />
        <Route path='/agents/:id' element={<AgentInfo />} />
        <Route path='/weapons' element={<Weapons />} />
        <Route path='/weapons/:id' element={<Skins />} />
      </Routes>  
    </>
  );
}

export default App;
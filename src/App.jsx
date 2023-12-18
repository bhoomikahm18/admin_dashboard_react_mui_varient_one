
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Sidenav from './components/Sidenav';
import Home from './pages/Home';
import About from './pages/About';
import Settings from './pages/Settings';
// import Navbar from './components/Navbar';
import Analytics from './pages/Analytics';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/analytics' exact element={<Analytics />} />
        <Route path='/settings' exact element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;

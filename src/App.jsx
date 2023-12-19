
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Analytics from './pages/Analytics';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/products' exact element={<Products />} />
        <Route path='/analytics' exact element={<Analytics />} />
        <Route path='/settings' exact element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Registr from './components/Registr';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/registration' element={<Registr/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/dashboard' element={<Dashboard/>}></Route>
</Routes>

    </>
  );
}

export default App;

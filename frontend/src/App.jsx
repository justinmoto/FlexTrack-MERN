import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LandingPage from './pages/LandingPage';

function App() {
  const { user } = useAuthContext();
  
  return (
    <>  
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/landingpage' element={<LandingPage/>}/>
          <Route path='/' element={user ? <Home/> : <Navigate to='/'/>}/>
          <Route path='/login' element={!user ? <Login/> : <Navigate to='/'/>}/>
          <Route path='/signup' element={!user ? <Signup/> : <Navigate to='/login'/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

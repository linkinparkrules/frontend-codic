import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Pages/Home';
import Introduction from './Pages/Introduction';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Exercise from './Pages/Exercise';
import Contact from './Pages/Contact';
import NotFound from './NotFound';
import BackToTop from './BackToTop'
import UserContext from './Context';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <UserContext.Provider value={{user: user, setUser: setUser}}>
        <NavBar />
        <BackToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/introduction' element={<Introduction />} />
          <Route path='/exercise' element={<Exercise />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;

import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Pages/Home';
import Introduction from './Pages/Introduction';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Exercise from './Pages/Exercise';
import Dictionary from './Pages/Dictionary';
import Element from './Pages/Element';
import Bug from './Pages/Game/Bug';
import DragDrop from './Pages/Game/Dragdrop';
import Contact from './Pages/Contact';
import NotFound from './NotFound';
import Admin from './Pages/Admin';
import BackToTop from './BackToTop'
import UserContext from './Context';
import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import http from './Utils/Axios';

function App() {
  AOS.init();

  useEffect(() => {
    if (!localStorage.getItem("jwt") && !sessionStorage.getItem("jwt")) {
      return;
    }
    // before access this api, the request interceptor run first. Check './Utils/Axios'
    http.get('/profile/me')
      .then((response) => {
        // console.log(response.data);
        setUser(response.data);
      }).catch((err) => {
        console.log(err.message);
      })
  },[]);

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
          <Route path='/exercise/dictionary' element={<Dictionary />} />
          <Route path='/exercise/element' element={<Element />} />
          <Route path='/exercise/bug' element={<Bug />} />
          <Route path='/exercise/dragdrop' element={<DragDrop />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/admin' element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;

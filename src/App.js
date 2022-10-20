import './App.css';
import {Routes, Route} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Pages/Home';
import Introduction from './Pages/Introduction';
import Login from './Pages/Login';
import NotFound from './NotFound';
import BackToTop from './BackToTop'

function App() {
  return (
    <div className="App">
      <NavBar />
      <BackToTop />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/introduction' element={<Introduction />} />
        <Route path='/login' element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

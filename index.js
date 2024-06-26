import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './about';
import Login from './login';
import Learnmore from './learnmore';
import Contact from './contact';
import Home1 from './home1';
import About1 from './about1';
import State from './state';

import ChangePassword from './changepassword';
function Website(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/learnmore' element={<Learnmore/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/home1' element={<Home1/>} />
        <Route path='/about1' element={<About1/>} />
        <Route path='/state' element={<State/>} />
        <Route path='/changepassword' element={<ChangePassword/>} />
        
        
        
      </Routes>
    </BrowserRouter>

    // <div className='full-height'>
    //   <Home/>
    //   <Login/>
    // </div>
  );
}

ReactDOM.render(<Website/>, document.getElementById('root'));
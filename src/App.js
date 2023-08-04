import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import {GlobalLayout} from "./layouts"
import { Crew, Destination, Home, Technology } from './pages';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <GlobalLayout>
              <Outlet/>
            </GlobalLayout>
          }>
            <Route path='/' element={<Home/>} />
            <Route path='/destination' element={<Destination/>} />
            <Route path='/crew' element={<Crew/>} />
            <Route path='/technology' element={<Technology/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

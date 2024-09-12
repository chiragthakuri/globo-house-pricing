import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import HouseList from '../house/HouseList';
import HouseDetail from '../house/HouseDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
          <BrowserRouter>
            <div className="container">
              <Header subtitle="Providing housing all over the world" />
              <Routes>
                <Route path="/" element={<HouseList />}></Route>
                <Route path="/house/:id" element={<HouseDetail />}></Route>
              </Routes>
            </div>
          </BrowserRouter>
  );
}

export default App;

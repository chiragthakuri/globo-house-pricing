import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import HouseList from '../house/HouseList';
import HouseDetail from '../house/HouseDetail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HouseAdd from '../house/HouseAdd';

function App() {
  return (
          <BrowserRouter>
            <div className="container">
              <Header subtitle="Providing housing all over the world" />
              <Routes>
                <Route path="/" element={<HouseList />}></Route>
                <Route path="/house/:id" element={<HouseDetail />}></Route>
                <Route path="/house/add" element={<HouseAdd />}></Route>
              </Routes>
            </div>
          </BrowserRouter>
  );
}

export default App;

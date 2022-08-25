import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './layout/App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./layout/Register";
import Login from './layout/Login';
import Extract from './layout/Extract';
import createGlobalStyle from "./assets/styles/global";

const GlobalStyle = createGlobalStyle;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/extract" element={<Extract />} />
      </Routes>
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>
);
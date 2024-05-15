import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.js'



import App from './App.jsx'
import Home from './pages/Home.jsx'
import LoginRegister from './pages/LoginRegister.jsx'

import { navLink } from './constant/navLink.jsx'

import './index.css'
import NotFound from './pages/NotFound.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='login' element={<LoginRegister />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
  </Provider>
)

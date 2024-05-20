import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux'
import store from './redux/store.js'



import App from './App.jsx'
import Home from './pages/Home.jsx'
import LoginRegister from './pages/LoginRegister.jsx'
import UserProfile from './pages/UserProfile.jsx'
import Test from './pages/Test.jsx';

import { navLink } from './constant/navLink.jsx'

import './index.css'
import NotFound from './pages/NotFound.jsx';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />}>
              <Route index element={<Home />} />
              <Route path='login' element={<LoginRegister />} />
              <Route path='profile' element={<UserProfile />} />
              <Route path='test' element={<Test />} />
              <Route path='*' element={<NotFound />} />
              <Route path='search' element/>
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>,
  </Provider>
)

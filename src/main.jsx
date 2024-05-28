import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store.js'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import LoginRegister from './pages/LoginRegister.jsx'
import UserProfile from './pages/UserProfile.jsx'
import Test from './pages/Test.jsx';
import NotFound from './pages/NotFound.jsx';
import UsersResult from './pages/UsersResult.jsx';
import DinerCreateForm from './pages/DinerCreateForm.jsx';

import { navLink } from './constant/navLink.jsx'

import './index.css'
import OtherProfile from './pages/OtherProfile.jsx';


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

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
                <Route exact path='search-result' element={<UsersResult />} />
                <Route exact path='profile/:id' element={<OtherProfile/>}/>
              <Route path='create-diner-post' element={<DinerCreateForm/>}/>
            </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </React.StrictMode>,
    </PersistGate>
  </Provider>
)

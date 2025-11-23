import { useState } from 'react'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './components/Body'
import Login from './components/Login'
import Profile from './components/Profile'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Feed from './components/Feed'
  <link href="/src/style.css" rel="stylesheet"></link>
function App() {

  return (
 <>
<Provider store={appStore}> 
  <BrowserRouter basename="/"> 
 <Routes>

    <Route path="/" element={<Body/>}>
    <Route path="/" element={<Feed/>} />
    <Route path="/Login" element={<Login/>} />
    <Route path="/Profile" element={<Profile/>} />
    </Route>

 </Routes>


 </BrowserRouter>
 </Provider>
 </>
  );
}

export default App;



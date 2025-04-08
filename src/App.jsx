 import React from 'react'
import LandingPage from './Components/LandingPage'
import { Route, Routes } from 'react-router-dom'
 
 import Login from './pages/Login';
import Remove from './pages/Remove';
 const App = () => {
   return (
     <div>
      
     

       <Routes>
        <Route path='/' element={<LandingPage/>}/>
          <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<Remove/>}/>
      </Routes>
      
     </div>
   )
 }
 
 export default App
 
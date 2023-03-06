import React from 'react'
import {Route, Routes} from 'react-router-dom'
import FullCard from './FullCard'
import Home from '../routes/Home'

function Routeur() {


  return (
    <Routes>
        <Route path="/:type" element={<Home/>}></Route>
        <Route path="/movie/:id" element={<FullCard />}></Route>
    </Routes>
  )
}

export default Routeur
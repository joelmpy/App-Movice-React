import React from 'react'
import {Route, Routes} from 'react-router-dom'
import FullCard from '../components/FullCard/FullCard'
import Home from '../components/Home'
import Main from '../components/Main/Main'

function Routeur() {


  return (
    <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/:type" element={<Home/>}></Route>
        <Route path="/movie/:id" element={<FullCard />}></Route>
    </Routes>
  )
}

export default Routeur
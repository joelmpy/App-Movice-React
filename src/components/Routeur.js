import React from 'react'
import {Route, Routes} from 'react-router-dom'

import Drama from "../routes/Drama"
import Comedie from "../routes/Comedie"
import Kids from "../routes/Kids"
import Serie from "../routes/Serie"
import Popular from "../routes/Popular"
import FullCard from './FullCard'
import Home from '../routes/Home'

function Routeur() {


  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Comedie" element={<Comedie/>}></Route>
        <Route path="/Drama" element={<Drama/>}></Route>
        <Route path="/Kids" element={<Kids/>}></Route>
        <Route path="/Serie" element={<Serie/>}></Route>
        <Route path="/Popular" element={<Popular/>}></Route>
        <Route path="/movie/:id" element={<FullCard />}></Route>
    </Routes>
  )
}

export default Routeur
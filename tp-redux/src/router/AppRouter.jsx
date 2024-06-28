import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeScreen } from '../pages/HomeScreen'
import { EditScreen } from '../pages/EditScreen'
import { SearchScreen } from '../pages/SearchScreen'
import { ResumeScreen } from '../pages/ResumeScreen'
import { Header } from '../components/Header'

const AppRouter = () => {

  return (
    <BrowserRouter>
      <Header />
        <Routes>
            <Route path='/' element={<HomeScreen />}/>
            <Route path='/edit' element={<EditScreen />} />
            <Route path='/search' element={<SearchScreen />} />
            <Route path='/resume' element={<ResumeScreen />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
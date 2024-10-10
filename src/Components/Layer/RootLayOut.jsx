import React from 'react'

import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

import Header from '../Header'
import SearchBar from '../SearchBar'

const RootLayOut = () => {
  return (
    <div>

        <Header/>
        <SearchBar/>
        <Outlet/>
        
        <Footer/>


    </div>
  )
}

export default RootLayOut
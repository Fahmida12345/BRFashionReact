import { useState } from 'react'
import './App.css'
import Navbar from './componants/Navbar'
import Banner from './componants/Banner/Banner'
import Trendy from './componants/Trendy/Trendy'
import Hotsell from './componants/Hotsell/Hotsell'
import Mens from './componants/Mens/Mens'
import Ladies from './componants/Ladies/Ladies'
import Kid from './componants/Kid/Kid'
import Feedback from './componants/Feedback/Feedback'




function App() {


  return (
    <>
       <Navbar/>
        <Banner/>
        <Trendy/>
        <Hotsell/>
        <Mens/>
        <Ladies/>
        <Kid/>
        <Feedback/>
    </>
  )
}

export default App

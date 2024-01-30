import React from 'react'

import {
  Navbar, Hero, FavGames, VRgames,
  TopGames,
  Feedback,
  Footer
} from './components/index'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <FavGames/>
      <VRgames/>
      <TopGames/>
      <Feedback/>
      <Footer/>
    </>
  )
}

export default App
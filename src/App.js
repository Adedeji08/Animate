import React from 'react'
import './App.scss'
import { DashboardPreview, Distribution, Feature, Footer, Home, Navbar, Scroll} from './Components'
import Analytics from './Components/Analytics'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      <DashboardPreview />
      <Analytics />
      <Feature />
      <Distribution />
      <Footer />
      <Scroll />
    </div>
  )
}

export default App
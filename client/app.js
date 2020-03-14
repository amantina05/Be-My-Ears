import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import Footer from '../client/components/footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <Footer />
    </div>
  )
}

export default App

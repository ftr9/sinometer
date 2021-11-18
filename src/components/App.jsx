import './App.css'

import Footer from './footer/Footer'
import Header from './Header/Header'
import Links from './Section/Links'

const App = () => {
  return (
    <div className="App__main">
      <Header />
      <div className="App__main--text">What we have for you</div>
      <Links />
      <Footer />
    </div>
  )
}

export default App

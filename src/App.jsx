import './index.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Solutions from './components/Solutions'
import Experience from './components/Experience'
import Team from './components/Team'
// import Contact from './components/Contact'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { useState } from 'react'

function App() {
  const [isDark, setIsDark] = useState(true)
  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <main className='overflow-y-scroll w-screen h-screen scroll-smooth'>
        <Banner />
        <Solutions />
        <Experience />
        <Team />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
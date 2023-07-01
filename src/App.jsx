import './index.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Solutions from './components/Solutions'
import Experience from './components/Experience'
import Team from './components/Team'
// import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <main className='snap-y snap-mandatory overflow-y-scroll w-screen h-screen'>
        <Banner />
        <Solutions />
        <Experience />
        <Team />
        <Footer />
      </main>
      {/*                
                <Contact />
              */}
    </>
  )
}

export default App
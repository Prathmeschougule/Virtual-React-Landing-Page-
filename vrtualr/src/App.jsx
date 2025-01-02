import { useState } from 'react'
import Navbar from './Componets/Navbar'
import HeroSection from './Componets/HeroSection'
import FeaturSection from './Componets/FeaturSection'
import WorkFlow from './Componets/WorkFlow'
import Princing from './Componets/Princing'
import Testomonial from './Componets/Testomonial'
import Footer from './Componets/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <Navbar/>
      <div  className='max-w-7xl mx-auto pt-20 px-6'>
           <HeroSection/>
           <FeaturSection/>
           <WorkFlow/>
           <Princing/>
           <Testomonial/>
           <Footer/>

      </div>
     
   </>
  )
}

export default App

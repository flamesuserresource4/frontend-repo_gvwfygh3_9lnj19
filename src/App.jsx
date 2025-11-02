import { useState, useCallback } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  const [loaded, setLoaded] = useState(false)

  const handleLoaderComplete = useCallback(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="bg-white">
      {!loaded && <LoadingScreen onComplete={handleLoaderComplete} />}
      <Hero />
      <Features />
      <CTA />
    </div>
  )
}

export default App

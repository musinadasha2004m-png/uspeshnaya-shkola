import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NeuroskorochtenieDirection from './pages/NeuroskorochtenieDirection'
import RepetitoryDirection from './pages/RepetitoryDirection'
import PodgotovkaKShkoleDirection from './pages/PodgotovkaKShkoleDirection'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/napravleniya/neuroskorochtenie"
          element={<NeuroskorochtenieDirection />}
        />
        <Route path="/napravleniya/repetitory" element={<RepetitoryDirection />} />
        <Route
          path="/napravleniya/podgotovka-k-shkole"
          element={<PodgotovkaKShkoleDirection />}
        />
      </Routes>
    </>
  )
}

export default App

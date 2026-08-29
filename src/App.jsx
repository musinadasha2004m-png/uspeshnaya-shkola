import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NeuroskorochtenieDirection from './pages/NeuroskorochtenieDirection'

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
      </Routes>
    </>
  )
}

export default App

import './App.css'
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {

  return (
  <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
    </Router>
  )
}

export default App
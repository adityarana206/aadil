import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Card from './components/Card'
import QRCodePage from './components/QRCodePage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/qr" element={<QRCodePage />} />
      </Routes>
    </Router>
  )
}

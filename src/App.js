import { Routes, Route } from 'react-router-dom'

import Welcome from './components/welcome/Welcome'
import Questions from './components/questions/Questions'
import Finish from './components/finish/Finish'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />}/>
      <Route path="/questions" element={<Questions />} />
      <Route path="/finish" element={<Finish />} />
    </Routes>
  )
}

export default App

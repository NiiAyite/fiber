import { Routes, Route } from "react-router-dom"
import { Home } from './home/Home'
import { Signup } from "./signup/Signup"
import './index.css'
import { Successful } from "./signup/Successful"

function App() {
  return (
    <div className="inter">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="signup" element={ <Signup /> } />
        <Route path="create-account-successful" element={ <Successful /> } />
      </Routes>
    </div>
  )
}

export default App

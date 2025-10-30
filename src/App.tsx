import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage'
import SignInPage from './pages/signInPage'
import RegisterUserPage from './pages/registerUserPage'
import DashBoardPage from './pages/dashboardPage'
import RoomPage from './pages/roomPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Homepage/>} />
        <Route path={"/signin"} element={<SignInPage />} />
        <Route path={"/register"} element={<RegisterUserPage />} />
        <Route path={"/dashboard"} element={<DashBoardPage />} />
        <Route path={"/room/:roomId"} element={<RoomPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

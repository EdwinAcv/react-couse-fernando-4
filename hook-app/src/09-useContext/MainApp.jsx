import { Navigate, Route,Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { AbautPage } from './AbautPage'
import { LoginPage } from './LoginPage'
import { NavBar } from './NavBar'
import { UserProvider } from './context/UserProvider'
export const MainApp = () => {
  return (
    <UserProvider>
        <h1>MainApp</h1>
        <NavBar />

        <hr />

        <Routes>
          <Route path = "/" element = { <HomePage /> } />
          <Route path = "login" element = { <LoginPage /> } />
          <Route path = "abaut" element = { <AbautPage /> } />

          <Route path = "/*" element = { <Navigate to= "abaut" /> } />
        </Routes>
        
    </UserProvider>
  )
}

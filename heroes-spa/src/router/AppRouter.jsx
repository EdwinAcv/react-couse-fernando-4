import { Navigate, Route,Routes } from 'react-router-dom'
import { MarvelPage } from '../heroes/pages/MarvelPage'
import { LoginPages } from '../auth/pages/LoginPages'
import { DcPage } from '../heroes/pages/DcPage'
import { Navbar } from '../ui'

export const AppRouter = () => {
  return (
    <>
        <Navbar/>

        <Routes>
            <Route path='marvel' element={ <MarvelPage/> } />
            <Route path='dc' element={ <DcPage/> } />

            <Route path='login' element={ <LoginPages/> } />
            <Route path='/' element={ <Navigate to="/marvel" /> } />
        </Routes>
    </>
  )
}

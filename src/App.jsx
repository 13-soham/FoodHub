import { Routes, Route, useLocation } from 'react-router-dom'
import MainPage from './pages/MainPage'
import RestaurantPage from './pages/RestaurantPage'
import AboutUs from './pages/AboutUs'
import NotFound from './pages/NotFound'
import NavBar from './components/NavBar'

const App = () => {
  const location = useLocation()
  let DidNotshowNavBar = ["/"].includes(location.pathname);
  return (
    <div>
      <div className='text-amber-50'>
        {DidNotshowNavBar && <NavBar/>}
      </div>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/restaurant' element={<RestaurantPage/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App;
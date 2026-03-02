import HomePage from './HomePage'
import BottomPage from './BottomPage'
import { ToastContainer} from 'react-toastify';

const MainPage = () => {
  return (
    <div className='h-[200vh] w-full'>
        <HomePage />
        <BottomPage />
        <ToastContainer
          autoClose={2000}
        />
    </div>
  )
}

export default MainPage;
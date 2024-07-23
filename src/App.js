import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/main/Main';
import HotelListing from './pages/listing/HotelListing';
import NotFound from './pages/notfound/NotFound';
import ScrollTop from './components/ScrollTop';
import HotelView from './pages/hotelView/HotelView';
import Signup from './pages/signup/Signup';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import { ToastContainer } from 'react-toastify';

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <ToastContainer autoClose={2000} pauseOnHover={false} />
        <ScrollTop/>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/hotel-list/:goingTo/:checkin/:checkout/:guests' element={<HotelListing />} />
            <Route path='/hotel-view' element={<HotelView />} />
            <Route path='/sign-up' element={<Signup />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

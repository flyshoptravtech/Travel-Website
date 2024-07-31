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
import Profile from './pages/profile/Profile';
import AffiliateForm from './pages/affiliate/AffiliateSignup';
import AffiliateProfile from './pages/affiliate/AffiliateProfile';
import AffiliateLogin from './pages/affiliate/AffiliateLogin';
import BookingPage from './pages/booking/BookingPage';
import SuccessPage from './pages/booking/SuccessPage';

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <ToastContainer autoClose={2000} pauseOnHover={false} closeOnClick />
        <ScrollTop/>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/hotel-list/:goingTo/:checkin/:checkout/:guests' element={<HotelListing />} />
            <Route path='/hotel-view/:id' element={<HotelView />} />
            <Route path='/booking-page/:id' element={<BookingPage />} />
            <Route path='/success-page' element={<SuccessPage />} />
            <Route path='/sign-up' element={<Signup />} />
            <Route path='/affiliate-login' element={<AffiliateLogin />} />
            <Route path='/affiliate-signup' element={<AffiliateForm />} />
            <Route path='/affiliate-profile' element={<AffiliateProfile />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/my-profile' element={<Profile />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

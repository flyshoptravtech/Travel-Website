import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/main/Main';
import HotelListing from './pages/listing/HotelListing';
import NotFound from './pages/notfound/NotFound';
import ScrollTop from './components/ScrollTop';
import HotelView from './pages/hotelView/HotelView';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <ScrollTop/>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/hotel-list' element={<HotelListing />} />
            <Route path='/hotel-view' element={<HotelView />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'flatpickr/dist/themes/light.css'
import 'flatpickr/dist/flatpickr'
import 'react-toastify/ReactToastify.css'
import 'react-loading-skeleton/dist/skeleton.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-multi-carousel/lib/styles.css"
import { HotelProvider } from './context/hotelContext';
import { FilterProvider } from './context/filterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HotelProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </HotelProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

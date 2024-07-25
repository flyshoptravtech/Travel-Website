import flatpickr from 'flatpickr'
import React, { useEffect } from 'react'
import SearchInputBox from './SearchInputBox';
import SubmitForm from '../helpers/SubmitForm';
import GuestSelectBox from './GuestSelectBox';

const SearchingBox = ({checkout,checkin}) => {

    const {handleSubmitForm,closeBtnRef} = SubmitForm()

    useEffect(() => {
        flatpickr("#checkinout",{
            mode: "range",
            minDate: "today", 
            dateFormat: "Y-m-d",
            defaultDate: [checkin, checkout]
        })
        // eslint-disable-next-line
    }, [checkin,checkout])

  return (
    <div className="py-5 bg-primary position-relative">
        <div className="container">
            {/* Search Form */}
            <form onSubmit={handleSubmitForm} >
                <div className="row justify-content-center align-items-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="search-wrap position-relative">
                    <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
                        <div className="col-xl-8 col-lg-7 col-md-12">
                        <div className="row gy-3 gx-md-3 gx-sm-2">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                            <div className="form-group mb-0">
                                <label className="text-light text-uppercase opacity-75">Where</label>
                                <SearchInputBox />
                            </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="form-group mb-0">
                                <label className="text-light text-uppercase opacity-75">Checkin &amp; Checkout</label>
                                <input type="text" className="form-control fw-bold" placeholder="Check-In & Check-Out" id="checkinout" name='checkinout' readOnly="readonly" />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-12">
                        <div className="row align-items-end gy-3 gx-md-3 gx-sm-2">
                            <GuestSelectBox closeBtnRef={closeBtnRef} />
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <div className="form-group mb-0">
                                <button type="submit" className="btn btn-whites text-primary full-width fw-medium"><i className="fa-solid fa-magnifying-glass me-2" />Search</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </form>
            {/* </row> */}
        </div>
    </div>

  )
}

export default SearchingBox
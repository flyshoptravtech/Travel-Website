import React, { useEffect, useState } from 'react'
import twoFive from "../../../assets/img/banner-3.jpg"
import flatpickr from 'flatpickr'
import svg_stroke from "../../../assets/img/svg_stroke.png"
import useGuestCounter from '../../assets/addadult'
import SearchInputBox from '../../../components/SearchInputBox'
import SubmitForm from '../../../helpers/SubmitForm'

const Form = () => {

    const { adultsCount, childrenCount, roomCount, subtractValues, addValues, setAdultsCount, setChildrenCount, setRoomCount } = useGuestCounter();
    const [openGuestBox, setopenGuestBox] = useState(false)
    const {handleSubmitForm} = SubmitForm()

    useEffect(() => {
        flatpickr("#checkinout", {
            mode: "range",
            minDate: "today",
            dateFormat: "Y-m-d",
        });
    }, []);

  return (
    <div className="image-cover hero-header bg-white" style={{background: `url('${twoFive}')no-repeat`}} data-overlay={5}>
            <div className="container">
                {/* Search Form */}
                <div className="row justify-content-center align-items-center">
                <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
                    <div className="position-relative text-center mb-5">
                    <h1>Explore The World <span className="position-relative z-4">Around<span className="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
                            <img src={svg_stroke} alt="" style={{filter:"invert()"}} />
                        </span></span> You</h1>
                    <p className="fs-5 fw-light">Take a little break from the work strss of everyday. Discover plan trip and
                        explore beautiful destinations.</p>
                    </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="search-wrap bg-white rounded-3 p-3">
                        <div className="tab-pane show active" id="hotels">
                            <form onSubmit={handleSubmitForm}>
                                <div className="row gy-3 gx-md-3 gx-sm-2">
                                <div className="col-xl-8 col-lg-7 col-md-12">
                                <div className="row gy-3 gx-md-3 gx-sm-2">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                                    <div className="form-group hdd-arrow mb-0">
                                        <SearchInputBox/>
                                    </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                    <div className="form-group mb-0">
                                        <input type="text" className="form-control fw-bold" placeholder="Check-In & Check-Out" id="checkinout" name='checkinout' readOnly="readonly" />
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-4 col-lg-5 col-md-12">
                                <div className="row gy-3 gx-md-3 gx-sm-2">
                                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                    <div className="form-group mb-0">
                                        <div className="booking-form__input guests-input mixer-auto">
                                        <input name="guests" className={`form-control ${openGuestBox ? "open" : ""}`} id="guests-input-btn" readOnly value={`${adultsCount} Adult${adultsCount>1 ? 's':""}${childrenCount > 0 ? `, ${childrenCount} Children${childrenCount > 1 ? 's':""}` : ''}${roomCount > 0 ? `, ${roomCount} Rooms` : ''}`} onClick={()=>{setopenGuestBox(!openGuestBox)}} />
                                        <div className={`guests-input__options ${openGuestBox ? "open" : ""}`} id="guests-input-options">
                                            <div>
                                            <span className="guests-input__ctrl minus" id="adults-subs-btn" onClick={() => subtractValues(adultsCount, 1, setAdultsCount)}><i className="fa-solid fa-minus" /></span>
                                            <span className="guests-input__value"><span id="guests-count-adults">{adultsCount}</span>Adults</span>
                                            <span className="guests-input__ctrl plus" id="adults-add-btn" onClick={() => addValues(adultsCount, setAdultsCount)}><i className="fa-solid fa-plus"  /></span>
                                            </div>
                                            <div>
                                            <span className="guests-input__ctrl minus" id="children-subs-btn" onClick={() => subtractValues(childrenCount, 0, setChildrenCount)}><i className="fa-solid fa-minus" /></span>
                                            <span className="guests-input__value"><span id="guests-count-children">{childrenCount}</span>Childrens</span>
                                            <span className="guests-input__ctrl plus" id="children-add-btn" onClick={() => addValues(childrenCount, setChildrenCount)}><i className="fa-solid fa-plus" /></span>
                                            </div>
                                            <div>
                                            <span className="guests-input__ctrl minus" id="room-subs-btn" onClick={() => subtractValues(roomCount, 0, setRoomCount)}><i className="fa-solid fa-minus" /></span>
                                            <span className="guests-input__value"><span id="guests-count-room">{roomCount}</span>Rooms</span>
                                            <span className="guests-input__ctrl plus" id="room-add-btn" onClick={() => addValues(roomCount, setRoomCount)}><i className="fa-solid fa-plus" /></span>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                    <div className="form-group mb-0">
                                        <button type="submit" className="btn btn-primary full-width fw-medium"><i className="fa-solid fa-magnifying-glass me-2" />Search</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </form>	
                        </div>
                    </div>
                </div>
                </div>
                {/* </row> */}
            </div>
    </div>
  )
}

export default Form
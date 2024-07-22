import React, { useEffect, useState } from 'react'
import twoFive from "../../../assets/img/25602.jpg"
import flatpickr from 'flatpickr'
import Select from "react-select"
import svg_stroke from "../../../assets/img/svg_stroke.png"
import useGuestCounter from '../../assets/addadult'

const Form = () => {

    const { adultsCount, childrenCount, roomCount, subtractValues, addValues, setAdultsCount, setChildrenCount, setRoomCount } = useGuestCounter();
    const [openGuestBox, setopenGuestBox] = useState(false)

    const selectBoxStyle = {
        container:()=>({
            height:"fit-content",padding:".7rem 0.3rem",border:"1px solid #dee2e6",borderRadius:".375rem",display:"flex"
        }),
        control:(base,state)=>({
            ...base,border:"0",outline:"none",boxShadow:state.isFocused ? "":"",width:"100%"
        }),
        dropdownIndicator:()=>({
            display:"none",opacity:"0"
        }),
        placeholder:(base)=>({
            ...base,fontSize:"1rem",fontWeight:"600",padding:"0",color:"#595c5f"
        }),
        indicatorSeparator:()=>({
            backgroundColor:"transparent"
        }),
        clearIndicator:()=>({
            backgroundColor:"transparent"
        }),
    }

    const options = [
        {value:"19",label:"Trinidad & Tobago"},
        {value:"13",label:"Liechtenstein"},
        {value:"37",label:"British Indian Ocean Territory"},
        {value:"67",label:"Rwanda"},
        {value:"71",label:"South Africa"},
        {value:"86",label:"Belize"},
        {value:"66",label:"Tanzania"},
        {value:"53",label:"Wallis & Futuna"},
    ]

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
                    <div className="navTabbs d-flex align-items-center justify-content-center w-100 mb-2">
                    <ul className="nav nav-pills lights medium justify-content-center mb-3" id="tour-pills-tab" role="tablist">
                        <li className="nav-item">
                        <a className="nav-link active" data-bs-toggle="tab" href="#hotels"><i className="fa-solid fa-hotel me-2" />Hotels</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#flights"><i className="fa-solid fa-jet-fighter me-2" />Flights</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#tours"><i className="fa-solid fa-globe me-2" />Tour</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#cabs"><i className="fa-solid fa-car me-2" />Cab</a>
                        </li>
                    </ul>
                    </div>
                    <div className="search-wrap bg-white rounded-3 p-3">
                    <div className="tab-content">
                        <div className="tab-pane show active" id="hotels">
                            <form action="">
                                <div className="row gy-3 gx-md-3 gx-sm-2">
                                <div className="col-xl-8 col-lg-7 col-md-12">
                                <div className="row gy-3 gx-md-3 gx-sm-2">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                                    <div className="form-group hdd-arrow mb-0">
                                        <Select 
                                            options={options} 
                                            placeholder="Going to"
                                            noOptionsMessage={()=>"No Country Found..."}
                                            styles={selectBoxStyle}
                                            name='goingTo'
                                        />
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
                        <div className="tab-pane" id="flights">
                        <div className="row gx-lg-2 g-3">
                            <div className="col-xl-5 col-lg-5 col-md-12">
                            <div className="row gy-3 gx-lg-2 gx-3">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                                <div className="form-group hdd-arrow mb-0">
                                    <select className="leaving form-control fw-bold">
                                    <option value>Select</option>
                                    <option value="ny">New York</option>
                                    <option value="sd">San Diego</option>
                                    <option value="sj">San Jose</option>
                                    <option value="ph">Philadelphia</option>
                                    <option value="nl">Nashville</option>
                                    <option value="sf">San Francisco</option>
                                    <option value="hu">Houston</option>
                                    <option value="sa">San Antonio</option>
                                    </select>
                                </div>
                                <div className="btn-flip-icon mt-md-0">
                                    <button className="p-0 m-0 text-primary"><i className="fa-solid fa-right-left" /></button>
                                </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="form-groupp hdd-arrow mb-0">
                                    <select className="goingto form-control fw-bold">
                                    <option value>Select</option>
                                    <option value="lv">Las Vegas</option>
                                    <option value="la">Los Angeles</option>
                                    <option value="kc">Kansas City</option>
                                    <option value="no">New Orleans</option>
                                    <option value="kc">Jacksonville</option>
                                    <option value="lb">Long Beach</option>
                                    <option value="cl">Columbus</option>
                                    <option value="cn">Canada</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="row gy-3 gx-lg-2 gx-3">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="form-group mb-0">
                                    <input className="form-control fw-bold choosedate" type="text" placeholder="Departure.." readOnly="readonly" />
                                </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="form-group mb-0">
                                    <input className="form-control fw-bold choosedate" type="text" placeholder="Return.." readOnly="readonly" />
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-12">
                            <div className="form-groupp hdd-arrow mb-0">
                                <select className="occupant form-control fw-bold">
                                <option value>Select</option>
                                <option value="lv">01 Adult</option>
                                <option value="la">02 Adult</option>
                                <option value="kc">03 Adult</option>
                                <option value="no">04 Adult</option>
                                <option value="kc">05 Adult</option>
                                <option value="lb">06 Adult</option>
                                <option value="cl">07 Adult</option>
                                <option value="cn">08 Adult</option>
                                </select>
                            </div>
                            </div>
                            <div className="col-xl-1 col-lg-1 col-md-12">
                            <div className="form-group mb-0">
                                <button type="button" className="btn btn-primary full-width fw-medium"><i className="fa-solid fa-magnifying-glass fs-5" /></button>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="tab-pane" id="tours">
                        <div className="row gy-3 gx-md-3 gx-sm-2">
                            <div className="col-xl-8 col-lg-7 col-md-12">
                            <div className="row gy-3 gx-md-3 gx-sm-2">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                                <div className="form-group hdd-arrow mb-0">
                                    <select className="goingto form-control fw-bold">
                                    <option value>Select</option>
                                    <option value="ny">New York</option>
                                    <option value="sd">San Diego</option>
                                    <option value="sj">San Jose</option>
                                    <option value="ph">Philadelphia</option>
                                    <option value="nl">Nashville</option>
                                    <option value="sf">San Francisco</option>
                                    <option value="hu">Houston</option>
                                    <option value="sa">San Antonio</option>
                                    </select>
                                </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="form-group mb-0">
                                    <input type="text" className="form-control choosedate fw-bold" placeholder="Choose Date" readOnly="readonly" />
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-12">
                            <div className="row gy-3 gx-md-3 gx-sm-2">
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                <div className="form-group hdd-arrow mb-0">
                                    <select className="tour form-control fw-bold">
                                    <option value>Select</option>
                                    <option value="ny">Family Package</option>
                                    <option value="sd">Honymoon Package</option>
                                    <option value="sj">Group Package</option>
                                    <option value="ph">Desert</option>
                                    <option value="nl">History</option>
                                    </select>
                                </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <div className="form-group mb-0">
                                    <button type="button" className="btn btn-primary full-width fw-medium"><i className="fa-solid fa-magnifying-glass me-2" />Search</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="tab-pane" id="cabs">
                        <div className="row gy-3 gx-md-3 gx-sm-2">
                            <div className="col-xl-8 col-lg-7 col-md-12">
                            <div className="row gy-3 gx-md-3 gx-sm-2">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                                <div className="form-group hdd-arrow mb-0">
                                    <select className="pickup form-control fw-bold">
                                    <option value>Select</option>
                                    <option value="ny">New York</option>
                                    <option value="sd">San Diego</option>
                                    <option value="sj">San Jose</option>
                                    <option value="ph">Philadelphia</option>
                                    <option value="nl">Nashville</option>
                                    <option value="sf">San Francisco</option>
                                    <option value="hu">Houston</option>
                                    <option value="sa">San Antonio</option>
                                    </select>
                                </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="form-group hdd-arrow mb-0">
                                    <select className="drop form-control fw-bold">
                                    <option value>Select</option>
                                    <option value="ny">New York</option>
                                    <option value="sd">San Diego</option>
                                    <option value="sj">San Jose</option>
                                    <option value="ph">Philadelphia</option>
                                    <option value="nl">Nashville</option>
                                    <option value="sf">San Francisco</option>
                                    <option value="hu">Houston</option>
                                    <option value="sa">San Antonio</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-12">
                            <div className="row gy-3 gx-md-3 gx-sm-2">
                                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                <div className="form-group mb-0">
                                    <input type="text" className="form-control choosedate fw-bold" placeholder="Choose Pickup Date" readOnly="readonly" />
                                </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <div className="form-group mb-0">
                                    <button type="button" className="btn btn-primary full-width fw-medium"><i className="fa-solid fa-magnifying-glass me-2" />Search</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
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
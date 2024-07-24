import React from 'react'
import Layout from '../layout/Layout'
import hotelImg from "../../assets/img/hotel/hotel-1.jpg";
import roomImg from "../../assets/img/hotel/hotel-10.jpg";
import Faq from './components/Faq';
import Reviews from './components/Reviews';
import SimilarHotels from './components/SimilarHotels';
import { Link } from 'react-router-dom';

const HotelView = () => {
  return (
    <Layout>
        <section className="pt-3 gray-simple">
            <div className="container">
                <div className="row">
                {/* Breadcrumb */}
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="#" className="text-primary">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#" className="text-primary">Hotel in Denver, USA</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Royal Plaza on Scotts</li>
                    </ol>
                    </nav>
                </div>
                {/* Gallery & Info */}
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="card border-0 p-3 mb-4">
                    <div className="crd-heaader d-md-flex align-items-center justify-content-between">
                        <div className="crd-heaader-first">
                        <div className="d-inline-flex align-items-center mb-1">
                            <span className="label bg-light-success text-success">Health Protected</span>
                            <div className="d-inline-block ms-2">
                            <i className="fa fa-star text-warning text-xs" />
                            <i className="fa fa-star text-warning text-xs" />
                            <i className="fa fa-star text-warning text-xs" />
                            <i className="fa fa-star text-warning text-xs" />
                            <i className="fa fa-star text-warning text-xs" />
                            </div>
                        </div>
                        <div className="d-block">
                            <h4 className="mb-0">Royal Plaza on Scotts</h4>
                            <div className>
                            <p className="text-md m-0"><i className="fa-solid fa-location-dot me-2" />577 Jalan Sultan Road
                                Singapore, 245652 Singapore.</p>
                            </div>
                        </div>
                        </div>
                        <div className="crd-heaader-last my-md-0 my-2">
                        <div className="drix-wrap d-flex align-items-center">
                            <div className="drix-first pe-2">
                            <div className="text-dark fw-semibold fs-4">US$107</div>
                            <div className="d-flex align-items-center justify-content-start justify-content-md-end">
                                <span className="label bg-success text-light">15% Off</span>
                            </div>
                            </div>
                            <div className="drix-last">
                            <button type="button" className="btn btn-primary fw-semibold">Select Rooms</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="galleryGrid typeGrid_3 mt-2">
                        {
                            Array(6).fill(null).map((i,index)=>(
                                <div key={index} className="galleryGrid__item relative d-flex">
                                    <Link to="assets/img/hotel/hotel-1.jpg" data-lightbox="roadtrip"><img src={hotelImg} alt="true" className="rounded-2 img-fluid" /></Link>
                                </div>
                            ))
                        }
                        <div className="galleryGrid__item position-relative">
                        <Link to="assets/img/hotel/hotel-7.jpg" data-lightbox="roadtrip"><img src={hotelImg} alt="true" className="rounded-2 img-fluid" /></Link>
                        <div className="position-absolute end-0 bottom-0 mb-3 me-3">
                            <Link to="assets/img/hotel/hotel-7.jpg" data-lightbox="roadtrip" className="btn btn-md btn-whites fw-medium text-dark"><i className="fa-solid fa-caret-right me-1" />16
                            More Photos</Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Top Attractions */}
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="row align-items-center justify-content-between gx-4">
                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="card p-3 mb-4">
                        <div className="nearestServ-wrap">
                            <div className="nearestServ-head d-flex mb-1">
                            <h6 className="fs-6 fw-semibold text-primary mb-1"><i className="fa-brands fa-servicestack me-2" />Top
                                Attractions</h6>
                            </div>
                            <div className="nearestServ-caps">
                            <ul className="row align-items-start g-2 p-0 m-0">
                                <li className="col-12 text-muted-2">Hong Kong Disneyland (170m)</li>
                                <li className="col-12 text-muted-2">Hong Kong Museum (250m)</li>
                                <li className="col-12 text-muted-2">The Peak Tram (80m)</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="card p-3 mb-4">
                        <div className="nearestServ-wrap">
                            <div className="nearestServ-head d-flex mb-1">
                            <h6 className="fs-6 fw-semibold text-primary mb-1"><i className="fa-solid fa-jet-fighter me-2" />Nearest
                                Airport &amp; Metro</h6>
                            </div>
                            <div className="nearestServ-caps">
                            <ul className="row align-items-start g-2 p-0 m-0">
                                <li className="col-12 text-muted-2">Airport: Janghai Airport (370m)</li>
                                <li className="col-12 text-muted-2">Airport: Shivalay Airport (2.4km)</li>
                                <li className="col-12 text-muted-2">Metro: Mandpam (500m)</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4">
                        <div className="card p-3 mb-4">
                        <div className="nearestServ-wrap">
                            <div className="nearestServ-head d-flex mb-1">
                            <h6 className="fs-6 fw-semibold text-primary mb-1"><i className="fa-solid fa-martini-glass-empty me-2" />Cafe &amp; Bars</h6>
                            </div>
                            <div className="nearestServ-caps">
                            <ul className="row align-items-start g-2 p-0 m-0">
                                <li className="col-12 text-muted-2">Cafe: Bekker Cofee Cafe (60m)</li>
                                <li className="col-12 text-muted-2">Cafe: Levendaram restaurants (120m)</li>
                                <li className="col-12 text-muted-2">Bar: The Blue Bar (90m)</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Login Alert */}
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="d-flex align-items-center justify-content-start py-3 px-3 rounded-2 bg-success mb-4">
                    <p className="text-light fw-semibold m-0"><i className="fa-solid fa-gift text-warning me-2" /><Link to="#" className="text-white text-decoration-underline">Login</Link> or <Link to="#" className="text-white text-decoration-underline">Register</Link> to earn upto 100 coins (approx 1.72 US$)
                        after check-out.
                    </p><p>
                    </p></div>
                </div>
                {/* Rooms Details */}
                <div className="col-xl-12 col-lg-12 col-md-12">
                    {/* Single Room Option */}
                    <div className="card mb-4">
                    <div className="card-header">
                        <h6 className="fw-semibold mb-0">Superior Double Room</h6>
                    </div>
                    <div className="card-body">
                        <div className="row align-items-start">
                        <div className="col-xl-3 col-lg-4 col-md-4">
                            <div className="roomavls-groups">
                            <div className="roomavls-thumb mb-2">
                                <img src={roomImg} className="img-fluid rounded-2" alt="true" />
                            </div>
                            <div className="roomavls-caps">
                                <div className="roomavls-escols d-flex align-items-start mb-2">
                                <span className="label bg-light-purple text-purple me-2">King Bed</span><span className="label bg-light-purple text-purple">3 Sleeps</span>
                                </div>
                                <div className="roomavls-lists">
                                <ul className="row align-items-center gx-2 gy-1 mb-0 p-0">
                                    <li className="col-6"><span className="text-muted-2 text-md"><i className="fa-brands fa-bity me-2" />City View</span></li>
                                    <li className="col-6"><span className="text-muted-2 text-md"><i className="fa-solid fa-ban-smoking me-2" />Non-Smoking</span></li>
                                    <li className="col-6"><span className="text-muted-2 text-md"><i className="fa-solid fa-vector-square me-2" />1800sqft | 6 Floor</span></li>
                                    <li className="col-6"><span className="text-muted-2 text-md"><i className="fa-solid fa-wifi me-2" />Free Wi-Fi</span></li>
                                    <li className="col-6"><span className="text-muted-2 text-md"><i className="fa-solid fa-bath me-2" />Private Bathroom</span></li>
                                    <li className="col-6"><span className="text-muted-2 text-md"><i className="fa-solid fa-snowflake me-2" />Air Conditioning</span></li>
                                    <li className="col-6"><span className="text-muted-2 text-md"><i className="fa-solid fa-cash-register me-2" />Refrigerator</span></li>
                                    <li className="col-6"><span className="text-muted-2 text-md"><i className="fa-solid fa-tty me-2" />Telephone</span></li>
                                    <li className="col-12"><Link to="#" className="text-primary fw-medium text-md">Show More Room
                                        Amenties</Link></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-8">
                            {/* Single Item */}
                            <div className="d-block border br-dashed rounded-2 px-3 py-3 mb-3">
                            <div className="d-flex align-items-sm-end justify-content-between flex-sm-row flex-column">
                                <div className="typsofrooms-wrap">
                                <div className="d-flex align-items-center">
                                    <h6 className="fs-6 fw-semibold mb-1 me-2">Your Choice</h6><Link to="#" className="text-muted fs-6"><i className="fa-solid fa-circle-question" /></Link>
                                </div>
                                <div className="typsofrooms-groups d-flex align-items-start">
                                    <div className="typsofrooms-brk1 mb-4">
                                    <ul className="row align-items-center g-1 mb-0 p-0">
                                        <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-solid fa-mug-saucer me-2" />Breackfast for US$10 (Optional)</span>
                                        </li>
                                        <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-solid fa-ban-smoking me-2" />Non-Refundable</span></li>
                                        <li className="col-12"><span className="text-success text-md"><i className="fa-solid fa-meteor me-2" />Instant Confirmation</span></li>
                                        <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-brands fa-cc-visa me-2" />Prepay Online</span></li>
                                        <li className="col-12"><span className="text-success text-md"><i className="fa-solid fa-circle-check me-2" />Booking of Maximum 5 Rooms</span></li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="typsofrooms-action col-auto">
                                <div className="prcrounce-groups">
                                    <div className="d-flex align-items-center justify-content-start justify-content-sm-end">
                                    <div className="text-dark fw-semibold fs-4">US$ 99</div>
                                    </div>
                                    <div className="d-flex align-items-start align-items-sm-end justify-content-start justify-content-md-end flex-column mb-2">
                                    <div className="text-muted-2 text-sm">After tax US$ 102</div>
                                    </div>
                                </div>
                                <div className="prcrounce-groups-button d-flex flex-column align-items-start align-items-md-end mt-3">
                                    <div className="prcrounce-sngbuttons d-flex mb-2"><button className="btn btn-sm btn-light-primary rounded-1 fw-medium px-4">Book at This
                                        Price</button></div>
                                    <div className="prcrounce-sngbuttons d-flex"><button className="btn btn-sm btn-primary rounded-1 fw-medium px-4">Access Lower Price</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* / Single Item */}
                            {/* Single Item */}
                            <div className="d-block border br-dashed rounded-2 px-3 py-3">
                            <div className="d-flex align-items-sm-end justify-content-between flex-sm-row flex-column">
                                <div className="typsofrooms-wrap">
                                <div className="d-flex align-items-center">
                                    <h6 className="fs-6 fw-semibold mb-1 me-2">Your Choice</h6><Link to="#" className="text-muted fs-6"><i className="fa-solid fa-circle-question" /></Link>
                                </div>
                                <div className="typsofrooms-groups d-flex align-items-start">
                                    <div className="typsofrooms-brk1 mb-4">
                                    <ul className="row align-items-center g-1 mb-0 p-0">
                                        <li className="col-12"><span className="text-success text-md"><i className="fa-solid fa-mug-saucer me-2" />Breackfast Included</span></li>
                                        <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-solid fa-ban-smoking me-2" />Non-Refundable</span></li>
                                        <li className="col-12"><span className="text-success text-md"><i className="fa-solid fa-meteor me-2" />Instant Confirmation</span></li>
                                        <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-brands fa-cc-visa me-2" />Prepay Online</span></li>
                                        <li className="col-12"><span className="text-success text-md"><i className="fa-solid fa-circle-check me-2" />Booking of Maximum 5 Rooms</span></li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="typsofrooms-action col-auto">
                                <div className="prcrounce-groups">
                                    <div className="d-flex align-items-center justify-content-start justify-content-sm-end">
                                    <div className="text-dark fw-semibold fs-4">US$ 107</div>
                                    </div>
                                    <div className="d-flex align-items-start align-items-sm-end justify-content-start justify-content-md-end flex-column mb-2">
                                    <div className="text-muted-2 text-sm">After tax US$ 110</div>
                                    </div>
                                </div>
                                <div className="prcrounce-groups-button d-flex flex-column align-items-start align-items-md-end mt-3">
                                    <div className="prcrounce-sngbuttons d-flex mb-2"><button className="btn btn-sm btn-light-primary rounded-1 fw-medium px-4">Book at This
                                        Price</button></div>
                                    <div className="prcrounce-sngbuttons d-flex"><button className="btn btn-sm btn-primary rounded-1 fw-medium px-4">Access Lower Price</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* / Single Item */}
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* Single Room Option */}
                    <div className="card mb-4">
                    <div className="card-header">
                        <h6 className="fw-semibold mb-0">Superior Twin Room with City View</h6>
                    </div>
                    <div className="card-body">
                        <div className="row align-items-start">
                        <div className="col-xl-3 col-lg-4 col-md-4">
                            <div className="roomavls-groups">
                            <div className="roomavls-thumb mb-2">
                                <img src={roomImg} className="img-fluid rounded-2" alt="true" />
                            </div>
                            <div className="roomavls-caps">
                                <div className="roomavls-escols d-flex align-items-start mb-2">
                                <span className="label bg-light-purple text-purple me-2">Twin Double Bed</span><span className="label bg-light-purple text-purple">3 Sleeps</span>
                                </div>
                                <div className="roomavls-lists">
                                <ul className="row align-items-center gx-2 gy-1 mb-0 p-0">
                                    <li className="col-6"><span className="text-muted-2 text-md"><i className="fa-brands fa-bity me-2" />City View</span></li>
                                    <li className="col-6"><span className="text-muted-2 text-md"><i className="fa-solid fa-ban-smoking me-2" />Non-Smoking</span></li>
                                    <li className="col-6"><span className="text-muted-2 text-md"><i className="fa-solid fa-vector-square me-2" />1800sqft | 6 Floor</span></li>
                                    <li className="col-6"><span className="text-muted-2 text-md"><i className="fa-solid fa-wifi me-2" />Free Wi-Fi</span></li>
                                    <li className="col-6"><span className="text-muted-2 text-md"><i className="fa-solid fa-bath me-2" />Private Bathroom</span></li>
                                    <li className="col-6"><span className="text-muted-2 text-md"><i className="fa-solid fa-snowflake me-2" />Air Conditioning</span></li>
                                    <li className="col-6"><span className="text-muted-2 text-md"><i className="fa-solid fa-cash-register me-2" />Refrigerator</span></li>
                                    <li className="col-6"><span className="text-muted-2 text-md"><i className="fa-solid fa-tty me-2" />Telephone</span></li>
                                    <li className="col-12"><Link to="#" className="text-primary fw-medium text-md">Show More Room
                                        Amenties</Link></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-8">
                            {/* Single Item */}
                            <div className="d-block border br-dashed rounded-2 px-3 py-3 mb-3">
                            <div className="d-flex align-items-sm-end justify-content-between flex-sm-row flex-column">
                                <div className="typsofrooms-wrap">
                                <div className="d-flex align-items-center">
                                    <h6 className="fs-6 fw-semibold mb-1 me-2">Your Choice</h6><Link to="#" className="text-muted fs-6"><i className="fa-solid fa-circle-question" /></Link>
                                </div>
                                <div className="typsofrooms-groups d-flex align-items-start">
                                    <div className="typsofrooms-brk1 mb-4">
                                    <ul className="row align-items-center g-1 mb-0 p-0">
                                        <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-solid fa-mug-saucer me-2" />Breackfast for US$10 (Optional)</span>
                                        </li>
                                        <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-solid fa-ban-smoking me-2" />Non-Refundable</span></li>
                                        <li className="col-12"><span className="text-success text-md"><i className="fa-solid fa-meteor me-2" />Instant Confirmation</span></li>
                                        <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-brands fa-cc-visa me-2" />Prepay Online</span></li>
                                        <li className="col-12"><span className="text-success text-md"><i className="fa-solid fa-circle-check me-2" />Booking of Maximum 5 Rooms</span></li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="typsofrooms-action col-auto">
                                <div className="prcrounce-groups">
                                    <div className="d-flex align-items-center justify-content-start justify-content-sm-end">
                                    <div className="text-dark fw-semibold fs-4">US$ 130</div>
                                    </div>
                                    <div className="d-flex align-items-start align-items-sm-end justify-content-start justify-content-md-end flex-column mb-2">
                                    <div className="text-muted-2 text-sm">After tax US$ 142</div>
                                    </div>
                                </div>
                                <div className="prcrounce-groups-button d-flex flex-column align-items-start align-items-md-end mt-3">
                                    <div className="prcrounce-sngbuttons d-flex mb-2"><button className="btn btn-sm btn-light-primary rounded-1 fw-medium px-4">Book at This
                                        Price</button></div>
                                    <div className="prcrounce-sngbuttons d-flex"><button className="btn btn-sm btn-primary rounded-1 fw-medium px-4">Access Lower Price</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* / Single Item */}
                            {/* Single Item */}
                            <div className="d-block border br-dashed rounded-2 px-3 py-3">
                            <div className="d-flex align-items-sm-end justify-content-between flex-sm-row flex-column">
                                <div className="typsofrooms-wrap">
                                <div className="d-flex align-items-center">
                                    <h6 className="fs-6 fw-semibold mb-1 me-2">Your Choice</h6><Link to="#" className="text-muted fs-6"><i className="fa-solid fa-circle-question" /></Link>
                                </div>
                                <div className="typsofrooms-groups d-flex align-items-start">
                                    <div className="typsofrooms-brk1 mb-4">
                                    <ul className="row align-items-center g-1 mb-0 p-0">
                                        <li className="col-12"><span className="text-success text-md"><i className="fa-solid fa-mug-saucer me-2" />Breackfast Included</span></li>
                                        <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-solid fa-ban-smoking me-2" />Non-Refundable</span></li>
                                        <li className="col-12"><span className="text-success text-md"><i className="fa-solid fa-meteor me-2" />Instant Confirmation</span></li>
                                        <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-brands fa-cc-visa me-2" />Prepay Online</span></li>
                                        <li className="col-12"><span className="text-success text-md"><i className="fa-solid fa-circle-check me-2" />Booking of Maximum 5 Rooms</span></li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="typsofrooms-action col-auto">
                                <div className="prcrounce-groups">
                                    <div className="d-flex align-items-center justify-content-start justify-content-sm-end">
                                    <div className="text-dark fw-semibold fs-4">US$ 107</div>
                                    </div>
                                    <div className="d-flex align-items-start align-items-sm-end justify-content-start justify-content-md-end flex-column mb-2">
                                    <div className="text-muted-2 text-sm">After tax US$ 110</div>
                                    </div>
                                </div>
                                <div className="prcrounce-groups-button d-flex flex-column align-items-start align-items-md-end mt-3">
                                    <div className="prcrounce-sngbuttons d-flex mb-2"><button className="btn btn-sm btn-light-primary rounded-1 fw-medium px-4">Book at This
                                        Price</button></div>
                                    <div className="prcrounce-sngbuttons d-flex"><button className="btn btn-sm btn-primary rounded-1 fw-medium px-4">Access Lower Price</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* / Single Item */}
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* Single Room Option */}
                    <div className="card mb-4">
                    <div className="card-header">
                        <h6 className="fw-semibold mb-0">Superior Double King Room</h6>
                    </div>
                    <div className="card-body">
                        <div className="row align-items-start">
                        <div className="col-xl-3 col-lg-4 col-md-4">
                            <div className="roomavls-groups">
                            <div className="roomavls-thumb mb-2">
                                <img src={roomImg} className="img-fluid rounded-2" alt="true" />
                            </div>
                            <div className="roomavls-caps">
                                <div className="roomavls-escols d-flex align-items-start mb-2">
                                <span className="label bg-light-purple text-purple me-2">Double King Bed</span><span className="label bg-light-purple text-purple">3 Sleeps</span>
                                </div>
                                <div className="roomavls-lists">
                                <ul className="row align-items-center gx-2 gy-1 mb-0 p-0">
                                    <li className="col-6"><span className="text-muted-2 text-md"><i className="fa-brands fa-bity me-2" />City View</span></li>
                                    <li className="col-6"><span className="text-muted-2 text-md"><i className="fa-solid fa-ban-smoking me-2" />Non-Smoking</span></li>
                                    <li className="col-6"><span className="text-muted-2 text-md"><i className="fa-solid fa-vector-square me-2" />1800sqft | 6 Floor</span></li>
                                    <li className="col-6"><span className="text-muted-2 text-md"><i className="fa-solid fa-wifi me-2" />Free Wi-Fi</span></li>
                                    <li className="col-6"><span className="text-muted-2 text-md"><i className="fa-solid fa-bath me-2" />Private Bathroom</span></li>
                                    <li className="col-6"><span className="text-muted-2 text-md"><i className="fa-solid fa-snowflake me-2" />Air Conditioning</span></li>
                                    <li className="col-6"><span className="text-muted-2 text-md"><i className="fa-solid fa-cash-register me-2" />Refrigerator</span></li>
                                    <li className="col-6"><span className="text-muted-2 text-md"><i className="fa-solid fa-tty me-2" />Telephone</span></li>
                                    <li className="col-12"><Link to="#" className="text-primary fw-medium text-md">Show More Room
                                        Amenties</Link></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-8">
                            {/* Single Item */}
                            <div className="d-block border br-dashed rounded-2 px-3 py-3 mb-3">
                            <div className="d-flex align-items-sm-end justify-content-between flex-sm-row flex-column">
                                <div className="typsofrooms-wrap">
                                <div className="d-flex align-items-center">
                                    <h6 className="fs-6 fw-semibold mb-1 me-2">Your Choice</h6><Link to="#" className="text-muted fs-6"><i className="fa-solid fa-circle-question" /></Link>
                                </div>
                                <div className="typsofrooms-groups d-flex align-items-start">
                                    <div className="typsofrooms-brk1 mb-4">
                                    <ul className="row align-items-center g-1 mb-0 p-0">
                                        <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-solid fa-mug-saucer me-2" />Breackfast for US$10 (Optional)</span>
                                        </li>
                                        <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-solid fa-ban-smoking me-2" />Non-Refundable</span></li>
                                        <li className="col-12"><span className="text-success text-md"><i className="fa-solid fa-meteor me-2" />Instant Confirmation</span></li>
                                        <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-brands fa-cc-visa me-2" />Prepay Online</span></li>
                                        <li className="col-12"><span className="text-success text-md"><i className="fa-solid fa-circle-check me-2" />Booking of Maximum 5 Rooms</span></li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="typsofrooms-action col-auto">
                                <div className="prcrounce-groups">
                                    <div className="d-flex align-items-center justify-content-start justify-content-sm-end">
                                    <div className="text-dark fw-semibold fs-4">US$ 150</div>
                                    </div>
                                    <div className="d-flex align-items-start align-items-sm-end justify-content-start justify-content-md-end flex-column mb-2">
                                    <div className="text-muted-2 text-sm">After tax US$ 163</div>
                                    </div>
                                </div>
                                <div className="prcrounce-groups-button d-flex flex-column align-items-start align-items-md-end mt-3">
                                    <div className="prcrounce-sngbuttons d-flex mb-2"><button className="btn btn-sm btn-light-primary rounded-1 fw-medium px-4">Book at This
                                        Price</button></div>
                                    <div className="prcrounce-sngbuttons d-flex"><button className="btn btn-sm btn-primary rounded-1 fw-medium px-4">Access Lower Price</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* / Single Item */}
                            {/* Single Item */}
                            <div className="d-block border br-dashed rounded-2 px-3 py-3">
                            <div className="d-flex align-items-sm-end justify-content-between flex-sm-row flex-column">
                                <div className="typsofrooms-wrap">
                                <div className="d-flex align-items-center">
                                    <h6 className="fs-6 fw-semibold mb-1 me-2">Your Choice</h6><Link to="#" className="text-muted fs-6"><i className="fa-solid fa-circle-question" /></Link>
                                </div>
                                <div className="typsofrooms-groups d-flex align-items-start">
                                    <div className="typsofrooms-brk1 mb-4">
                                    <ul className="row align-items-center g-1 mb-0 p-0">
                                        <li className="col-12"><span className="text-success text-md"><i className="fa-solid fa-mug-saucer me-2" />Breackfast Included</span></li>
                                        <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-solid fa-ban-smoking me-2" />Non-Refundable</span></li>
                                        <li className="col-12"><span className="text-success text-md"><i className="fa-solid fa-meteor me-2" />Instant Confirmation</span></li>
                                        <li className="col-12"><span className="text-muted-2 text-md"><i className="fa-brands fa-cc-visa me-2" />Prepay Online</span></li>
                                        <li className="col-12"><span className="text-success text-md"><i className="fa-solid fa-circle-check me-2" />Booking of Maximum 5 Rooms</span></li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="typsofrooms-action col-auto">
                                <div className="prcrounce-groups">
                                    <div className="d-flex align-items-center justify-content-start justify-content-sm-end">
                                    <div className="text-dark fw-semibold fs-4">US$ 107</div>
                                    </div>
                                    <div className="d-flex align-items-start align-items-sm-end justify-content-start justify-content-md-end flex-column mb-2">
                                    <div className="text-muted-2 text-sm">After tax US$ 110</div>
                                    </div>
                                </div>
                                <div className="prcrounce-groups-button d-flex flex-column align-items-start align-items-md-end mt-3">
                                    <div className="prcrounce-sngbuttons d-flex mb-2"><button className="btn btn-sm btn-light-primary rounded-1 fw-medium px-4">Book at This
                                        Price</button></div>
                                    <div className="prcrounce-sngbuttons d-flex"><button className="btn btn-sm btn-primary rounded-1 fw-medium px-4">Access Lower Price</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* / Single Item */}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Service & Amenties */}
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="card mb-4">
                    <div className="card-header">
                        <h4 className="fs-5 mb-0">Service &amp; Amenties</h4>
                    </div>
                    <div className="card-body">
                        <div className="row align-items-start">
                        <div className="col-xl-2 col-lg-3 col-md-4">
                            <h5 className="fs-6 fw-semibold mb-0">Most Popular Amenities</h5>
                        </div>
                        <div className="col-xl-10 col-lg-9 col-md-8">
                            <div className="row align-items-start">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <ul className="row align-items-center p-0 mb-0">
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center mb-3">Parking<span className="text-success fw-medium ms-3">Free</span></div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center mb-3">Outdoor Swimming Pool</div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center mb-3">Meeting Room</div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center mb-3">Children's Playground</div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center mb-3">Multi-Function Room</div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center mb-3">Smoking Area</div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center mb-3">Fitness Room</div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center mb-3">Wi-Fi in Public Areas<span className="text-success fw-medium ms-3">Free</span></div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center mb-3">Languages Spoken at Front Desk</div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center mb-3">Luggage Storage</div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center mb-3">24-Hour Front Desk</div>
                                </li>
                                </ul>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <ul className="row align-items-center g-3 p-0 mb-0">
                                <li className="col-xl-3 col-lg-3 col-md-6 col-6">
                                    <div className="d-flex flex-column align-items-center rounded border br-dashed p-2">
                                    <div className="room-alsyruk mb-2"><img src={roomImg} className="img-fluid rounded" alt="true" /></div>
                                    <div className="tedfr-caps text-center "><span className="text-muted-2">Meeting Room</span></div>
                                    </div>
                                </li>
                                <li className="col-xl-3 col-lg-3 col-md-6 col-6">
                                    <div className="d-flex flex-column align-items-center rounded border br-dashed p-2">
                                    <div className="room-alsyruk mb-2"><img src={roomImg} className="img-fluid rounded" alt="true" /></div>
                                    <div className="tedfr-caps text-center "><span className="text-muted-2">Restaurant</span></div>
                                    </div>
                                </li>
                                <li className="col-xl-3 col-lg-3 col-md-6 col-6">
                                    <div className="d-flex flex-column align-items-center rounded border br-dashed p-2">
                                    <div className="room-alsyruk mb-2"><img src={roomImg} className="img-fluid rounded" alt="true" /></div>
                                    <div className="tedfr-caps text-center "><span className="text-muted-2">Playground</span></div>
                                    </div>
                                </li>
                                <li className="col-xl-3 col-lg-3 col-md-6 col-6">
                                    <div className="d-flex flex-column align-items-center rounded border br-dashed p-2">
                                    <div className="room-alsyruk mb-2"><img src={roomImg} className="img-fluid rounded" alt="true" /></div>
                                    <div className="tedfr-caps text-center "><span className="text-muted-2">Night Bars</span></div>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Nearest Services */}
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="card mb-4">
                    <div className="card-header">
                        <h4 className="fs-5 mb-0">Nearest Services</h4>
                    </div>
                    <div className="card-body">
                        <div className="row align-items-start mb-4">
                        <div className="col-xl-2 col-lg-3 col-md-4">
                            <h5 className="fs-6 fw-semibold mb-0">Transport</h5>
                        </div>
                        <div className="col-xl-10 col-lg-9 col-md-8">
                            <div className="row align-items-start">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <ul className="row align-items-center p-0 mb-0">
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="explot-first">Metro:<span className="text-dark ms-2">Lavender</span></div>
                                    <div className="explot-distance"><span className="text-muted">360m</span></div>
                                    </div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="explot-first">Metro:<span className="text-dark ms-2">Jalan Besar MRT</span>
                                    </div>
                                    <div className="explot-distance"><span className="text-muted">80m</span></div>
                                    </div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="explot-first">Airport:<span className="text-dark ms-2">Singapore Changi
                                        Airport</span></div>
                                    <div className="explot-distance"><span className="text-muted">160m</span></div>
                                    </div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="explot-first">Train:<span className="text-dark ms-2">Woodlands Train
                                        Checkpoint</span></div>
                                    <div className="explot-distance"><span className="text-muted">200m</span></div>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row align-items-start mb-4">
                        <div className="col-xl-2 col-lg-3 col-md-4">
                            <h5 className="fs-6 fw-semibold mb-0">Landmarks</h5>
                        </div>
                        <div className="col-xl-10 col-lg-9 col-md-8">
                            <div className="row align-items-start">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <ul className="row align-items-center p-0 mb-0">
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="explot-first"><span className="text-dark ms-2">Sentosa</span></div>
                                    <div className="explot-distance"><span className="text-muted">360m</span></div>
                                    </div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="explot-first"><span className="text-dark ms-2">Gardens by the Bay</span></div>
                                    <div className="explot-distance"><span className="text-muted">80m</span></div>
                                    </div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="explot-first"><span className="text-dark ms-2">S.E.A. Aquarium</span></div>
                                    <div className="explot-distance"><span className="text-muted">160m</span></div>
                                    </div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="explot-first"><span className="text-dark ms-2">Singapore Flyer</span></div>
                                    <div className="explot-distance"><span className="text-muted">200m</span></div>
                                    </div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="explot-first"><span className="text-dark ms-2">Wings Of Time</span></div>
                                    <div className="explot-distance"><span className="text-muted">200m</span></div>
                                    </div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="explot-first"><span className="text-dark ms-2">Sands SkyPark</span></div>
                                    <div className="explot-distance"><span className="text-muted">200m</span></div>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row align-items-start mb-4">
                        <div className="col-xl-2 col-lg-3 col-md-4">
                            <h5 className="fs-6 fw-semibold mb-0">Dining</h5>
                        </div>
                        <div className="col-xl-10 col-lg-9 col-md-8">
                            <div className="row align-items-start">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <ul className="row align-items-center p-0 mb-0">
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="explot-first"><span className="text-dark ms-2">SYMMETRY</span></div>
                                    <div className="explot-distance"><span className="text-muted">360m</span></div>
                                    </div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="explot-first"><span className="text-dark ms-2">Tai Hwa Pork Noodle</span>
                                    </div>
                                    <div className="explot-distance"><span className="text-muted">80m</span></div>
                                    </div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="explot-first"><span className="text-dark ms-2">Sungei Road Laksa</span></div>
                                    <div className="explot-distance"><span className="text-muted">160m</span></div>
                                    </div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="explot-first"><span className="text-dark ms-2">The Dim Sum Place</span></div>
                                    <div className="explot-distance"><span className="text-muted">200m</span></div>
                                    </div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="explot-first"><span className="text-dark ms-2">The Ramen Stall</span></div>
                                    <div className="explot-distance"><span className="text-muted">200m</span></div>
                                    </div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="explot-first"><span className="text-dark ms-2">Taliwang Restaurant</span>
                                    </div>
                                    <div className="explot-distance"><span className="text-muted">200m</span></div>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row align-items-start mb-4">
                        <div className="col-xl-2 col-lg-3 col-md-4">
                            <h5 className="fs-6 fw-semibold mb-0">Shopping</h5>
                        </div>
                        <div className="col-xl-10 col-lg-9 col-md-8">
                            <div className="row align-items-start">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <ul className="row align-items-center p-0 mb-0">
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="explot-first"><span className="text-dark ms-2">Bugis Street</span></div>
                                    <div className="explot-distance"><span className="text-muted">360m</span></div>
                                    </div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="explot-first"><span className="text-dark ms-2">Mustafa Centre</span></div>
                                    <div className="explot-distance"><span className="text-muted">80m</span></div>
                                    </div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="explot-first"><span className="text-dark ms-2">Bugis Junction</span></div>
                                    <div className="explot-distance"><span className="text-muted">160m</span></div>
                                    </div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="explot-first"><span className="text-dark ms-2">Tekka Centre</span></div>
                                    <div className="explot-distance"><span className="text-muted">200m</span></div>
                                    </div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="explot-first"><span className="text-dark ms-2">Orchard Central</span></div>
                                    <div className="explot-distance"><span className="text-muted">200m</span></div>
                                    </div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="explot-first"><span className="text-dark ms-2">Ngee Ann City</span></div>
                                    <div className="explot-distance"><span className="text-muted">200m</span></div>
                                    </div>
                                </li>
                                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="explot-first"><span className="text-dark ms-2">ION Orchard</span></div>
                                    <div className="explot-distance"><span className="text-muted">200m</span></div>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Guests Reviews */}
                <div className="col-xl-12 col-lg-12 col-md-12">
                    <div className="card mb-4">
                    <div className="card-header">
                        <h4 className="fs-5 mb-0">Guests Reviews</h4>
                    </div>
                    <div className="card-body">
                        <div className="row align-items-center mb-4">
                        <div className="col-xl-2 col-lg-3 col-md-4">
                            <div className="rounded-3 bg-primary full-width">
                            <div className="py-4 px-3 text-center">
                                <h3 className="text-light display-2 fw-semibold mb-0">92</h3>
                                <p className="text-light lh-base m-0">Extraordinary 786 Reviews</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-9 col-md-8">
                            <div className="row align-items-start">
                            <div className="col-xl-12 col-lg-12 col-md-12">
                                <ul className="row align-items-center p-0 mb-0 gy-3 gx-4">
                                <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="revs-wraps">
                                    <div className="revs-wraps-flex d-flex align-items-center justify-content-between mb-1">
                                        <span className="text-dark fw-semibold text-md">Dishes</span>
                                        <span className="text-dark fw-semibold text-md">8.7</span>
                                    </div>
                                    <div className="progress " role="progressbar" aria-label="Example" aria-valuenow={87} aria-valuemin={0} aria-valuemax={100} style={{height: 7}}>
                                        <div className="progress-bar bg-primary" style={{width: '87%'}} />
                                    </div>
                                    </div>
                                </li>
                                <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="revs-wraps">
                                    <div className="revs-wraps-flex d-flex align-items-center justify-content-between mb-1">
                                        <span className="text-dark fw-semibold text-md">Swimming</span>
                                        <span className="text-dark fw-semibold text-md">9.2</span>
                                    </div>
                                    <div className="progress " role="progressbar" aria-label="Example" aria-valuenow={92} aria-valuemin={0} aria-valuemax={100} style={{height: 7}}>
                                        <div className="progress-bar bg-primary" style={{width: '92%'}} />
                                    </div>
                                    </div>
                                </li>
                                <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="revs-wraps">
                                    <div className="revs-wraps-flex d-flex align-items-center justify-content-between mb-1">
                                        <span className="text-dark fw-semibold text-md">Rooms</span>
                                        <span className="text-dark fw-semibold text-md">8.8</span>
                                    </div>
                                    <div className="progress " role="progressbar" aria-label="Example" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100} style={{height: 7}}>
                                        <div className="progress-bar bg-primary" style={{width: '88%'}} />
                                    </div>
                                    </div>
                                </li>
                                <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="revs-wraps">
                                    <div className="revs-wraps-flex d-flex align-items-center justify-content-between mb-1">
                                        <span className="text-dark fw-semibold text-md">Location</span>
                                        <span className="text-dark fw-semibold text-md">8.9</span>
                                    </div>
                                    <div className="progress " role="progressbar" aria-label="Example" aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} style={{height: 7}}>
                                        <div className="progress-bar bg-primary" style={{width: '89%'}} />
                                    </div>
                                    </div>
                                </li>
                                <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="revs-wraps">
                                    <div className="revs-wraps-flex d-flex align-items-center justify-content-between mb-1">
                                        <span className="text-dark fw-semibold text-md">Services</span>
                                        <span className="text-dark fw-semibold text-md">9.2</span>
                                    </div>
                                    <div className="progress " role="progressbar" aria-label="Example" aria-valuenow={92} aria-valuemin={0} aria-valuemax={100} style={{height: 7}}>
                                        <div className="progress-bar bg-primary" style={{width: '92%'}} />
                                    </div>
                                    </div>
                                </li>
                                <li className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="revs-wraps">
                                    <div className="revs-wraps-flex d-flex align-items-center justify-content-between mb-1">
                                        <span className="text-dark fw-semibold text-md">Cleanliness</span>
                                        <span className="text-dark fw-semibold text-md">8.6</span>
                                    </div>
                                    <div className="progress " role="progressbar" aria-label="Example" aria-valuenow={86} aria-valuemin={0} aria-valuemax={100} style={{height: 7}}>
                                        <div className="progress-bar bg-primary" style={{width: '86%'}} />
                                    </div>
                                    </div>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                        <Reviews />  
                    </div>
                    </div>
                </div>
                <Faq />
                </div>
            </div>
        </section>
        <SimilarHotels/>
    </Layout>
  )
}

export default HotelView
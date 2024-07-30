import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import hotelImg from "../../assets/img/hotel/hotel-1.jpg";
import roomImg from "../../assets/img/hotel/hotel-10.jpg";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import axiosHeaders from '../../helpers/AxiosHeader';
import ViewSkeleton from '../../skeleton/ViewSkeleton';
import NotFound from '../notfound/NotFound';

const HotelView = () => {

    const { id } = useParams();
    const [hotelData, setHotelData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const apiUrl = `${process.env.REACT_APP_API_URL}hotel-details/${id}`;

    useEffect(() => {
        axios.get(apiUrl, axiosHeaders)
            .then(res => {
                setHotelData(res.data.data);
                setLoading(false);
            })
            .catch(()=> {
                setError(true);
                setLoading(false);
            });
    }, [apiUrl]);

  return (
    <Layout>
        <section className="pt-3 gray-simple">
            <div className="container">
                {
                    error ?
                    <NotFound  /> :
                    (
                        loading ?
                        <ViewSkeleton /> :
                        <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="card border-0 p-3 mb-4">
                            <div className="crd-heaader d-md-flex align-items-center justify-content-between">
                                <div className="crd-heaader-first">
                                <div className="d-inline-flex align-items-center mb-1">
                                    <span className="label bg-light-success text-success">Health Protected</span>
                                    <div className="d-inline-block ms-2">
                                        {
                                            Array(hotelData.rating).fill(null).map((_,index)=>(
                                                <i key={index} className="fa fa-star text-warning text-xs" />
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="d-block">
                                    <h4 className="mb-0">{hotelData.property_name} ( {hotelData.property_business_name} )</h4>
                                    <div className>
                                    <p className="text-md m-0"><i className="fa-solid fa-location-dot me-2" />{hotelData.property_address}, {hotelData.property_city}, {hotelData.property_state}, {hotelData.property_country}</p>
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
                                            <Link to="#" data-lightbox="roadtrip"><img src={hotelImg} alt="true" className="rounded-2 img-fluid" /></Link>
                                        </div>
                                    ))
                                }
                                <div className="galleryGrid__item position-relative">
                                <Link to="#" data-lightbox="roadtrip"><img src={hotelImg} alt="true" className="rounded-2 img-fluid" /></Link>
                                <div className="position-absolute end-0 bottom-0 mb-3 me-3">
                                    <Link to="#" data-lightbox="roadtrip" className="btn btn-md btn-whites fw-medium text-dark"><i className="fa-solid fa-caret-right me-1" />16
                                    More Photos</Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            {
                                hotelData.properties.map((item,index)=>(
                                    <div key={index} className="card mb-4">
                                    <div className="card-header">
                                        <h6 className="fw-semibold mb-0">{item.room_type}</h6>
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
                                                    {item.bed_type != null ? <span className="label bg-light-purple text-purple me-2">{item.bed_type}</span> : ""}
                                                    {item.size != null ? <span className="label bg-light-purple text-purple">{item.size} Sq.feet</span> : ""}
                                                </div>
                                                <div className="roomavls-lists">
                                                <ul className="row align-items-center gx-2 gy-1 mb-0 p-0">
                                                    {
                                                        item.room_amenties.map((item,index)=>(
                                                            <li className="col-6" key={index} >
                                                                <span className="text-muted-2 text-md"><i class="fa-solid fa-circle-arrow-right"></i> {item}</span>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-9 col-lg-8 col-md-8">
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
                                                    <div className="prcrounce-sngbuttons d-flex"><button className="btn btn-sm btn-primary rounded-1 fw-medium px-4">Book Now</button>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                ))
                            }
                        </div>
                        </div> 
                    )
                      
                }
            </div>
        </section>
    </Layout>
  )
}

export default HotelView
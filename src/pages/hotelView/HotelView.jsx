import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import noImgFound from "../../assets/img/noImgFound.png"
import axios from 'axios';
import { useParams } from 'react-router-dom';
import axiosHeaders from '../../helpers/AxiosHeader';
import ViewSkeleton from '../../skeleton/ViewSkeleton';
import NotFound from '../notfound/NotFound';
import { Carousel } from 'react-responsive-carousel';
import RoomBox from './components/RoomBox';

const HotelView = () => {

    const { id } = useParams();
    const [hotelData, setHotelData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [progressBar, setProgressBar] = useState(0);

    const apiUrl = `${process.env.REACT_APP_API_URL}hotel-details/${id}`;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {
        setProgressBar(20)
        axios.get(apiUrl, axiosHeaders)
            .then(res => {
                setProgressBar(40)
                setHotelData(res.data.data);
                setProgressBar(60)
                setLoading(false);
                setProgressBar(100)
            })
            .catch(()=> {
                setError(true);
                setLoading(false);
                setProgressBar(100)
            });
    }, [apiUrl]);

    const sortProperties = () => {
        if(hotelData){
            const properties = hotelData.properties;
            function getSortKey(property) {
                const priceInfo = property.price;
                if (priceInfo.longweek_end_price > 0) {
                    return priceInfo.longweek_end_price;
                } else if (priceInfo.black_out_date_price > 0) {
                    return priceInfo.black_out_date_price;
                } else {
                    return priceInfo.room_price;
                }
            }
            properties.sort((a, b) => getSortKey(a) - getSortKey(b));
            return properties.filter(property => Object.keys(property.price).length !== 0);;
        }
    }

  return (
    <Layout progressBar={progressBar} >
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
                            <div className="card border-0 p-3 pb-5 mb-4">
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
                            </div>
                            <div className="mt-2">
                                <Carousel {...settings} >
                                    {
                                        hotelData.gallery.length === 0 ?
                                        <div>
                                            <img src={noImgFound} alt="noImageFound" loading='lazy' />
                                        </div>:
                                        hotelData.gallery.map((item,index)=>(
                                            <div key={index}>
                                                <img src={item.image_path} alt="loading...." loading='lazy' />
                                            </div>
                                        ))
                                    }
                                </Carousel>
                            </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            {
                                sortProperties().map((item,index)=>(
                                    <RoomBox item={item} key={index} />
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
import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import SearchingBox from '../../components/SearchingBox';
import ListBox from './ListBox';
import Sidebar from './Sidebar';
import { useParams } from 'react-router-dom';
import ListSkeleton from '../../skeleton/ListSkeleton';
import { useHotelContext } from '../../context/hotelContext';
import { useFilterContext } from '../../context/filterContext';

const HotelListing = () => {
    
    const { goingTo, checkout, checkin, guests } = useParams();
    const [totalGuest, setTotalGuest] = useState({ adult: 0, child: 0, room: 0 });
    const [searchParams, setSearchParams] = useState({});
    const { handleHotelSearch,loading,progressBar} = useHotelContext()
    const {filter_products} = useFilterContext()

    useEffect(() => {
        if (guests) {
            let Guest = guests.split(" ");
            if (Guest[3] === "Room" || Guest[3] === "Rooms") {
                setTotalGuest({ adult: Guest[0], child: 0, room: Guest[2] });
            } else {
                setTotalGuest({ adult: Guest[0], child: Guest[2], room: Guest[4] });
            }
        }
    }, [guests]);

    useEffect(() => {
        setSearchParams({
            city: goingTo,
            checkin_checkout_date: `${checkin} to ${checkout}`,
            adultCount: totalGuest.adult,
            childCount: totalGuest.child,
            roomCount: totalGuest.room,
        });
    }, [goingTo, checkout, checkin, totalGuest]);

    useEffect(() => {
        if (Object.keys(searchParams).length > 0) {
            handleHotelSearch(searchParams)
        }
    }, [searchParams,handleHotelSearch]);

    return (
        <Layout progressBar={progressBar}>
            <SearchingBox checkin={checkin} checkout={checkout} />
            <section className="gray-simple">
                <div className="container">
                    <div className="row justify-content-between gy-4 gx-xl-4 gx-lg-3 gx-md-3 gx-4">
                        <Sidebar searchNo={filter_products.length} />
                        <div className="col-xl-9 col-lg-8 col-md-12">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <h5 className="fw-bold fs-6 mb-lg-0 mb-3">Showing {filter_products.length} Search Results</h5>
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-12">
                                    <div className="d-flex align-items-center justify-content-start justify-content-lg-end flex-wrap">
                                        <div className="flsx-first mt-sm-0 mt-2">
                                            <ul className="nav nav-pills nav-fill p-1 small lights blukker bg-primary rounded-3 shadow-sm" id="filtersblocks" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active rounded-3" id="trending" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Our Trending</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link rounded-3" id="mostpopular" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Most Popular</button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link rounded-3" id="lowprice" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Lowest Price</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center g-4 mt-2">
                                {
                                    !loading ?
                                        <ListBox searchResults={filter_products} checkin={checkin} checkout={checkout} /> :
                                        <ListSkeleton />
                                }

                                {/* <div className="col-xl-12 col-lg-12 col-12">
                                    <div className="pags card py-2 px-5">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination m-0 p-0">
                                                <li className="page-item">
                                                    <Link className="page-link" to="/" aria-label="Previous">
                                                        <span aria-hidden="true"><i className="fa-solid fa-arrow-left-long" /></span>
                                                    </Link>
                                                </li>
                                                <li className="page-item active"><Link className="page-link" to="/">1</Link></li>
                                                <li className="page-item"><Link className="page-link" to="/">2</Link></li>
                                                <li className="page-item"><Link className="page-link" to="/">3</Link></li>
                                                <li className="page-item">
                                                    <Link className="page-link" to="/" aria-label="Next">
                                                        <span aria-hidden="true"><i className="fa-solid fa-arrow-right-long" /></span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default HotelListing;

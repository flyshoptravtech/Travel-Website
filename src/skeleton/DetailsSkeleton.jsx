import React from 'react'
import Skeleton from 'react-loading-skeleton'

const DetailsSkeleton = () => {
  return (
    <div className='d-flex flex-column gap-3'>
        <div className='row '>
            <div className='col-xl-8 col-lg-8 col-md-12'>
                <div className='card bg-light rounded-2 border p-3'>
                    <Skeleton height={400} /> 
                </div>
            </div>
            <div className='col-xl-4 col-lg-4 col-md-12'>
                <div className='card bg-light rounded-2 border p-3 d-flex flex-column gap-2'>
                    {
                        Array(8).fill(null).map((_,index)=>(
                            <Skeleton height={40} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetailsSkeleton
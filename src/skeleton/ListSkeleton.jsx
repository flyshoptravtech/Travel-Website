import React from 'react'
import Skeleton from 'react-loading-skeleton'

const ListSkeleton = () => {
  return (
    <div className='d-flex flex-column gap-3'>
        {Array(2).fill(null).map((_,index)=>(
            <div key={index} className='row m-0 p-2 bg-light gap-3 rounded-2 border'>
                <div className='col-xl-4 col-lg-3 col-md p-0'>
                    <Skeleton height={300}  /> 
                </div>
                <div className='col-xl col-lg col-md p-0'>
                    <div className='d-flex flex-column gap-2'>
                        {
                            Array(8).fill(null).map((_,index)=>(
                                <Skeleton height={27} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ListSkeleton
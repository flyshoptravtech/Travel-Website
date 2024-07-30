import React from 'react'
import Skeleton from 'react-loading-skeleton'

const ViewSkeleton = () => {
  return (
    <div className="bg-white rounded-2 p-3">
        <div className="d-flex flex-column gap-2">
            <Skeleton height={30} />
            <Skeleton height={30} />
        </div>
        <div className="mt-3">
            <Skeleton height={400} />
        </div>
        <div className="d-flex flex-column gap-2 mt-3">
            <Skeleton height={50} />
            <Skeleton height={50} />
            <Skeleton height={50} />
        </div>
    </div>
  )
}

export default ViewSkeleton
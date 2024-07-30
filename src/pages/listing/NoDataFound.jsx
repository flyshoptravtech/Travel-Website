import React from 'react'
import noData from "../../assets/img/notFound.webp"

const NoDataFound = () => {
  return (
    <div className='col-12'>
        <div className="bg-white rounded-2 shadow-sm border p-3">
          <img src={noData} alt="" style={{height:"100%",width:"100%",objectFit:"cover"}} />
        </div>
    </div>
  )
}

export default NoDataFound
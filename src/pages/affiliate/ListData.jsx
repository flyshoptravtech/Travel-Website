import React from 'react'

const ListData = ({homeList}) => {
  return (
    <table className='table table-striped'>
        <thead>
            <tr>
                <td>Sr.No</td>
                <td>Name</td>
                <td>Email</td>
                <td>Number</td>
                <td>Address</td>
                <td>Country</td>
                <td>State</td>
            </tr>
        </thead>
        <tbody>
            {
                homeList.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.first_name} {item.last_name}</td>
                        <td>{item.email}</td>
                        <td>{item.contact_number}</td>
                        <td>{item.address}</td>
                        <td>{item.country}</td>
                        <td>{item.state}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}

export default ListData
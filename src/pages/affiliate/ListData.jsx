import React from 'react'

const ListData = ({homeList}) => {
  return (
    <table className='table table-striped'>
        <thead>
            <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Address</th>
                <th>Country</th>
                <th>State</th>
            </tr>
        </thead>
        <tbody>
            {
                homeList.map((item, index) => (
                    <tr key={index}>
                        <td align='center' >{index + 1}</td>
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
import React from 'react';

const AllBookingDetails = ({allBooking,slNo}) => {

    const {name,email,address,number,orderedService,serviceCharged} = allBooking;

    return (
        <>
        <tr>
          <td>{slNo+1}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{address}</td>
          <td>{number}</td>
          <td>{orderedService}</td>
          <td>{serviceCharged}</td>
          <td>Pending</td>
        </tr>
    </>
    );
};

export default AllBookingDetails;
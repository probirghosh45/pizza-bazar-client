import React from "react";

const BookingDetails = ({ booking,slNo}) => {
  const {name,email,address,number,orderedService,serviceCharged} = booking;

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

export default BookingDetails;

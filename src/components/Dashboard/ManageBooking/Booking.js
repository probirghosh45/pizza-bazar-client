import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../../../App";
import BookingDetails from "./BookingDetails";


const Booking = () => {
    const {loggedInUser}=useContext(UserContext)
    const [booking,setBooking]=useState([]);
    console.log(booking);

    useEffect(() => {
        axios.get(`https://calm-shore-02848.herokuapp.com/orders?email=${loggedInUser.email}`)
          .then((res) => setBooking(res.data))
          .catch((err) => console.log(err));   
      }, [loggedInUser.email]);




  return (
    <div className="pt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SL No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Mobile Number</th>
            <th>Service Name</th>
            <th>Service Charge</th>
            <th>Status</th>
          </tr>
        </thead>
    <tbody>
       {
          booking.map((booking,slNo)=><BookingDetails booking={booking} slNo={slNo}  />) 
        }
    </tbody>
      </Table>
    </div>
  );
};

export default Booking;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import AllBookingDetails from "./AllBookingDetails";

const AllBooking = () => {
  const [allBooking, setAllBooking] = useState([]);
  console.log(allBooking);

  useEffect(() => {
    axios.get("http://localhost:7500/allOrders")
      .then((res) => setAllBooking(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="pt-3">
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
           allBooking.map((allBooking, slNo) => (<AllBookingDetails allBooking={allBooking} slNo={slNo} />))
          }
        </tbody>
      </Table>
    </div>
  );
};

export default AllBooking;

import React,{useContext,useState,useEffect} from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from '../../App';


const Sidebar = () => {

  const {loggedInUser} =  useContext(UserContext);
  const [isAdmin,setIsAdmin]=useState(false);


  useEffect(()=>{
    fetch('http://localhost:7500/isAdmin',{
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({email: loggedInUser.email})
    })
    .then(res => res.json())
    .then(data => setIsAdmin(data))
},[])

  return (
    <div>
      <Row className="pt-4 mt-4 ">
        <Col >
        <ListGroup className="text-center sidebar__style">
        <ListGroup.Item  as={Link} to="/"  style={{ backgroundColor:"pink", fontSize:"30px",fontWeight:"bold" }} >Pizza Bazar</ListGroup.Item>
           {isAdmin && <div>
            <ListGroup.Item as={Link} to="/dashboard/manageProducts"  className="sidebar__item mt-3" style={{ backgroundColor:"#54B12B" }} >Manage Products</ListGroup.Item>
           <ListGroup.Item as={Link} to="/dashboard/addProduct" className="sidebar__item" style={{ backgroundColor:"#54B12B" }} >Add Products</ListGroup.Item>
           <ListGroup.Item as={Link} to="/dashboard/editProduct" className="sidebar__item" style={{ backgroundColor:"#54B12B" }} >Edit Products</ListGroup.Item>
           <ListGroup.Item as={Link} to="/dashboard/addAdmin" className="sidebar__item" style={{ backgroundColor:"#54B12B" }} >Add Admin</ListGroup.Item>
           <ListGroup.Item as={Link} to="" className="sidebar__item" style={{ backgroundColor:"#54B12B" }} >All Booking List</ListGroup.Item>
           </div>
           }
            <ListGroup.Item as={Link} to="" className="sidebar__item" style={{ backgroundColor:"#54B12B" }} >Booking List</ListGroup.Item>
            <ListGroup.Item as={Link} to="" className="sidebar__item" style={{ backgroundColor:"#54B12B" }} >Reviews</ListGroup.Item>
          </ListGroup>  
        </Col>
      </Row>
    </div>
  );
};

export default Sidebar;

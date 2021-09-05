import React,{useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Sidebar from '../Sidebar'
import AdminNavbar from './AdminNavbar';
import AddProduct from '../ManageProducts/AddProduct';
import EditProduct from '../ManageProducts/EditProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddAdmin from './AddAdmin/AddAdmin';
import DashboardHome from '../DashboardHome/DashboardHome';
import Review from '../Review/Review';
import Order from '../Order/Order';
import Booking from '../ManageBooking/Booking';
import AllBooking from '../ManageBooking/AllBooking';

const Admin = () => {
    const {adminPanel} = useParams();
    const [editProduct,setEditProduct]=useState({})
    return (
        <div>
            <Row >
                <Col lg={4} md={4} sm={12} xs={12} >
                <Sidebar/>
                </Col>
                <Col lg={8} md={4} sm={12} xs={12} >
                <AdminNavbar/>
                 {
                     adminPanel==="addProduct"? <AddProduct/>
                     :adminPanel==="editProduct" ? <EditProduct editProduct={editProduct} setEditProduct={setEditProduct} />
                     :adminPanel==="manageProducts" ? <ManageProducts setEditProduct={setEditProduct} />
                     :adminPanel==="addAdmin" ? <AddAdmin/>
                     :adminPanel==="order" ? <Order/>                     
                     :adminPanel==="booking" ? <Booking/>                     
                     :adminPanel==="allBooking" ? <AllBooking/>                     
                     :adminPanel==="review" ? <Review/>
                     :<DashboardHome/>
                 }
                </Col>
            </Row>
        </div>
    );
};

export default Admin;
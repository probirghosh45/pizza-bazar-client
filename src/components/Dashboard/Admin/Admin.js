import React,{useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Sidebar from '../Sidebar'
import AdminNavbar from './AdminNavbar';
import AddProduct from '../ManageProducts/AddProduct';
import EditProduct from '../ManageProducts/EditProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddAdmin from './AddAdmin/AddAdmin';

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
                     :adminPanel==="addAdmin" ? <AddAdmin/>
                     :<ManageProducts setEditProduct={setEditProduct} />
                 }
                </Col>
            </Row>
        </div>
    );
};

export default Admin;
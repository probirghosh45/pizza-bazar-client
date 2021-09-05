import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import swal from 'sweetalert';
import ActionItems from './ActionItems';
import AddProduct from './AddProduct';


const EditProduct = ({ editProduct, setEditProduct }) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://calm-shore-02848.herokuapp.com/products')
            .then(response => {
                setItems(response.data);
                // setLoading(false);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])


    const updateProduct = Product => {
        axios.patch(`https://calm-shore-02848.herokuapp.com/update/${editProduct?._id}`, Product)
            .then(response => response.data && swal("Successfully updated", "Your product is successfully updated!", "success"))
            .catch(error => console.log(error));
    }


    return (
        <>
            {editProduct?._id ? <AddProduct editProduct={editProduct} updateProduct={updateProduct} /> :
                <div className="px-5 pt-4 mx-md-4 mt-5 bg-white" style={{ borderRadius: "15px" }}>
                    <Table hover borderless responsive>
                        <thead className="bg-light">
                            <tr>
                                <th>Product's Photo</th>
                                <th>Product's Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            items.map(item => <ActionItems item={item} key={item._id} setEditProduct={setEditProduct} />)
                        }
                    </Table>
                </div>}
        </>
    );
};

export default EditProduct;
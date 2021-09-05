import React, { useContext } from "react";
import { Col,Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const ServicesDetails = ({ service }) => {
  const { productName, productDescription, productPrice, productImage } =service;
  const {setCart}=useContext(UserContext);
  return (
    <div>
        <Link to="/dashboard/order" onClick={()=>setCart(service)} >
                <div class="card bg-dark text-white service-box">
                    <img src={productImage} class="card-img" alt="..." />
                    <div class="card-img-overlay d-flex justify-content-center align-items-center service-text-box w-75 h-75 my-auto m-auto">
                        <div>
                            <h3 class="card-title">{productName}</h3>
                            <h2 className="color-primary service-price">${productPrice}</h2>
                            <p>
                                {productDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
    </div>
  );
};

export default ServicesDetails;

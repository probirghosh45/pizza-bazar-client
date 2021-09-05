import axios from 'axios';
import React, { useContext } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

const Order = () => {
    const {register,handleSubmit} = useForm();
    const {cart,loggedInUser}=useContext(UserContext);


    const onSubmit = (data) => {
    
        console.log(data);

        // const bookingInfo={
        //     name:data.name,
        //     userEmail:data.email,
        //     userAddress:data.address,
        //     userMobileNumber: data.mobileNumber,
        //     orderService: data.productName,
        //     servicedCharged:data.productPrice
        // }

        // console.log(bookingInfo);


       axios.post('https://calm-shore-02848.herokuapp.com/addOrder',data)
        .then(res=> {
            console.log(res);
            console.log(res.data);
        })
        .catch(err => console.log(err));

    }

    return (
        <div>
        <h1 className="pt-3">Dear {loggedInUser.name} ,Confirm Your Order</h1>           
        <hr/>
        <Form className="pt-4" onSubmit={handleSubmit(onSubmit)} >
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
          <Form.Group>
            <Form.Label style={{ fontWeight: "Bold" }}> Your Name </Form.Label>
              <Form.Control 
              name="name" 
              defaultValue={loggedInUser?.name}
              {...register("name", { required: true })} 
              type="email" 
              readOnly
              />
            </Form.Group>
          </Col>
          <Col>
          <Form.Group>
            <Form.Label style={{ fontWeight: "Bold" }}> Your Email Address </Form.Label>
              <Form.Control 
              name="name" 
              defaultValue={loggedInUser?.email}
              {...register("email", { required: true })} 
              type="email" 
              readOnly
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
          <Form.Group>
            <Form.Label style={{ fontWeight: "Bold" }}> Ordered Service </Form.Label>
              <Form.Control 
              name="orderedService" 
              defaultValue={cart.productName}
              {...register("orderedService", { required: true })} 
              type="email" 
              readOnly
              />
            </Form.Group>
          </Col>

          <Col>
          <Form.Group>
            <Form.Label style={{ fontWeight: "Bold" }}> Service Charged </Form.Label>
              <Form.Control 
              name="serviceCharged" 
              defaultValue={cart.productPrice}
              {...register("serviceCharged", { required: true })} 
              type="email" 
              readOnly
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
          <Form.Group>
            <Form.Label style={{ fontWeight: "Bold" }}> Your Current Address </Form.Label>
              <Form.Control 
              name="address" 
              placeholder="Enter your address"
              {...register("address", { required: true })} 
              type="text" 
              />
            </Form.Group>
          </Col>
          
          <Col>
          <Form.Group>
            <Form.Label style={{ fontWeight: "Bold" }}> Your Mobile Number </Form.Label>
              <Form.Control 
              name="number" 
              placeholder="Enter your mobile number"
              {...register("number", { required: true })} 
              type="email" 
              />
            </Form.Group>
          </Col>
        </Row>








        <div className="pt-3">
          <Button className="d-block shadow-none" type="submit">
           Confirm Booking
          </Button>
        </div>
      </Form>



















            {/* <h1 className="pt-3">Dear {loggedInUser.name} ,Confirm Your Order</h1>           
            <hr/> */}
           {/* <Form onSubmit={handleSubmit(onSubmit)}>
           <Row>
               <Col lg={6} md={6} sm={12} xs={12}>
                  <Form.Group>
                       <Form.Label style={{ fontWeight: "Bold" }}>
                           Your Name
                       </Form.Label>
                       {/* <Form.Control
                       name="name"
                       type="text" 
                        // defaultValue={loggedInUser?.name}
                        // {...register("name", { required: true })}  
                        {...register("name")} 
                        // readOnly   
                       >
                       </Form.Control> */}
                       {/* <input defaultValue="test" {...register("name")} />
                   </Form.Group>
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                  <Form.Group>
                       <Form.Label style={{ fontWeight: "Bold" }}>
                           Your Email Address
                       </Form.Label>
                       <Form.Control
                       name="email"
                       type="email" 
                        // defaultValue={loggedInUser?.email}
                        {...register("email", { required: true })}  
                        // readOnly   
                       >
                       </Form.Control>
                   </Form.Group>
                  </Col>
               </Row>
               <Row>
               <Col lg={6} md={6} sm={12} xs={12}>
                  <Form.Group>
                       <Form.Label style={{ fontWeight: "Bold" }}>
                           Ordered Service
                       </Form.Label>
                       <Form.Control
                       name="productName"
                        // defaultValue={cart?.productName}
                        {...register("productName", { required: true })}  
                        // readOnly   
                       >
                       </Form.Control>
                   </Form.Group>
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                  <Form.Group>
                       <Form.Label style={{ fontWeight: "Bold" }}>
                       Service charged
                       </Form.Label>
                       <Form.Control
                       name="servicedCharged"
                        // defaultValue={cart?.productPrice}
                        {...register("servicedCharged", { required: true })}  
                        // readOnly   
                       >
                       </Form.Control>
                   </Form.Group>
                  </Col>
               </Row>
               <Row>
               <Col lg={6} md={6} sm={12} xs={12}>
                  <Form.Group>
                       <Form.Label style={{ fontWeight: "Bold" }}>
                           Your Mobile Number
                       </Form.Label>
                       <Form.Control
                       name="mobileNumber"
                        placeholder="Enter Mobile Number"
                        {...register("mobileNumber", { required: true })}  
                       >
                       </Form.Control>
                   </Form.Group>
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12}>
                  <Form.Group>
                       <Form.Label style={{ fontWeight: "Bold" }}>
                           Your Current Address
                       </Form.Label>
                       <Form.Control
                       name="address"
                       type="text" 
                        placeholder="Your Address"
                        {...register("address", { required: true })}  
                       >
                       </Form.Control>
                   </Form.Group>
                  </Col>
               </Row>
               <div className="pt-3">
               <Button
                  className="d-block shadow-none" type="submit"
                  as={"label"}
                >
                  Confirm Booking
                </Button>
               </div>
           </Form> 
   */}


        </div>
    );
};

export default Order;
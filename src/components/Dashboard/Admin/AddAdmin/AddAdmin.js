import axios from "axios";
import React, { useState} from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddAdmin = () => {
    const {register,handleSubmit,watch,formState: { errors }} = useForm();

    const onSubmit = (data) => {
    
        console.log(data);
  
        axios.post('http://localhost:7500/addAdmin',data)
        .then(res=>{
          console.log(res);
          console.log(res.data);
        })
        .catch(err => console.log(err));
 

  
      // fetch('http://localhost:7500/addAdmin', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // })
      // .then(res => res.json())
      // .then(data => console.log(data))

    }
     

  return (
    <div>
      <Form className="pt-4" onSubmit={handleSubmit(onSubmit)} >
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Form.Group>
              <Form.Label style={{ fontWeight: "Bold" }}>Email</Form.Label>
              <Form.Control name="email" {...register("email", { required: true })} type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <div className="pt-3">
          <Button className="d-block shadow-none" type="submit">
            Add Admin
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddAdmin;

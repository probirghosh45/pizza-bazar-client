import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Review = () => {
    const {register,handleSubmit,watch,formState: { errors }} = useForm();

    const onSubmit = (data) => {
    
        console.log(data);
  
        // axios.post('https://calm-shore-02848.herokuapp.com/addAdmin',data)
        // .then(res=> {res.data })
        // .then(err => console.log(err));
 

  
      fetch('https://calm-shore-02848.herokuapp.com/addReview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => console.log(data))

    }
     

  return (
    <div>
      <Form className="pt-4" onSubmit={handleSubmit(onSubmit)} >
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
          <Form.Group>
              <Form.Label style={{ fontWeight: "Bold" }}>Name</Form.Label>
              <Form.Control name="name" {...register("name", { required: true })} type="text" placeholder="Enter Name" />
            </Form.Group>            
            <Form.Group>
              <Form.Label style={{ fontWeight: "Bold" }}>Review</Form.Label>
              <Form.Control name="review" {...register("review", { required: true })} type="text" placeholder="Write Review" />
            </Form.Group>
          </Col>
        </Row>
        <div className="pt-3">
          <Button className="d-block shadow-none" type="submit">
            Submit Review
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Review;

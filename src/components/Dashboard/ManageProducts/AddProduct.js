import axios from "axios";
import React,{useState} from "react";
import { Form,Row,Col,Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddProduct = ({editProduct, updateProduct }) => {
    const {register,handleSubmit,watch,formState: { errors }} = useForm();
    const [imageURL, setImageURL] = useState ("" || editProduct?.productImage);


    const onSubmit = (data) => {
    
        console.log(data);
  
        const productInfo ={
             productName: data.productNameData,
            productDescription: data.productDescriptionData,
            productPrice: data.productPriceData,
            productImage: imageURL
        }
  
        console.log(productInfo);
  
        if(!imageURL){
          return swal ("image is uploading...", "Please Wait for a while...","info" )
        }
  
        if (editProduct?._id) {
          return updateProduct(productInfo)
      }
  
      axios.post('http://localhost:7500/addProduct', productInfo )
      .then(res=> {
        res.data && 
        // alert("New Product Added")
        swal("Successfully updated", "Your product is successfully updated!", "success")
      })
      .then(err => console.log(err));
  
  
    }
  
    const handleImageUpload =event =>{
      console.log(event.target.files[0]);
      const imageData=new FormData();
      imageData.set('key','4441c3916186266ff77bdd932599ecfe');
      imageData.append('image', event.target.files[0]);
  
     axios.post('https://api.imgbb.com/1/upload',imageData)
     .then(res=>{
       console.log(res); //check console
       console.log(res.data.data.display_url); //collected directory from console
       setImageURL(res.data.data.display_url);
     })
  
     .catch(err=> console.log(err));
  
  
    }
  

  return (
    <div>
      <Form className="pt-4" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Form.Group>
              <Form.Label style={{ fontWeight: "Bold" }}>
                Product's Name
              </Form.Label>
              <Form.Control
                placeholder="Enter Product's Name"
                className="shadow-none"
                name="productNameData" //addProductData
                defaultValue={editProduct?.productName} //update/edit ProductData
                {...register("productNameData", { required: true })} //react hook form ver. 7
                // ref={register} //react hook form ver. 6
              />
            </Form.Group>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Form.Group>
              <Form.Label style={{ fontWeight: "Bold" }}>
                Product's Description
              </Form.Label>
              <Form.Control
                placeholder="Enter Product's Description"
                className="shadow-none"
                name="productDescriptionData"
                defaultValue={editProduct?.productDescription}
                {...register("productDescriptionData", { required: true })}
                // ref={register}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col lg={6} md={6} sm={12} xs={12}>
            <Form.Group>
              <Form.Label style={{ fontWeight: "Bold" }}>
                Product's Price
              </Form.Label>
              <Form.Control
                placeholder="Enter Product's Price"
                className="shadow-none"
                name="productPriceData"
                defaultValue={editProduct?.productPrice} //update data
                {...register("productPriceData", { required: true })}
                // ref={register}
              />
            </Form.Group>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Form.Group>
              <Form.Label style={{ fontWeight: "Bold" }}>
                Add Product's Photo
              </Form.Label>
              {editProduct?._id ? (
                <Button
                  className="d-block shadow-none"
                  as={"label"}
                  htmlFor="photoUpload"
                >
                  Update Photo
                </Button>
              ) : (
                <Button
                  className="d-block shadow-none"
                  as={"label"}
                  htmlFor="photoUpload"
                >
                  Add Photo
                </Button>
              )}

              <Form.Control
                type="file"
                id="photoUpload"
                hidden="hidden"
                {...register("productPhotoUpload", { required: true })}
                // ref={register}
                onChange={handleImageUpload}
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="mt-3">
          <Button
            type="submit"
            className="shadow-none"
            variant={editProduct?._id ? "success" : "info"}
          >
            {editProduct?._id ? "Update" : "Save"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddProduct;

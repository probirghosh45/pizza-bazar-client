import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {Row} from 'react-bootstrap';
import ServicesDetails from '../ServicesDetails/ServicesDetails';



const Services = () => {
  
    const [services,setServices]=useState([])
    // console.log(services);
     useEffect(()=>{

        axios.get('http://localhost:7500/products')
        .then(res=>setServices(res.data))
        .catch(err=>console.log(err))
     },[])

    return (
        <div>
                <h1 className="text-center py-3" >Services We are Providing </h1>
                <div className="container">

                <Row md={3} lg={3} sm={12} xs={12}>
                   {
                       services.map((service)=><ServicesDetails service={service}/>)
                   }
                </Row>
                </div>
        </div>
    );
};

export default Services;
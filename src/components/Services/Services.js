import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Preloader from '../Preloader/Preloader';
import ServicesDetails from '../ServicesDetails/ServicesDetails';



const Services = () => {
  
    const [services,setServices]=useState([])
    const [preloader, setPreloader] = useState(true)
    // console.log(services);
     useEffect(()=>{

        axios.get('https://calm-shore-02848.herokuapp.com/products')
        .then(res=>{
            setServices(res.data)
            setPreloader(false)
        })
        .catch(err=>console.log(err))
     },[])

    return (
        <div>
                <h3 className='text-center mb-5' style={{ fontWeight: '600' }}>Typical Wedding <span style={{ color: '#5DD233' }}>Packages</span></h3>
                <div className="container">

                <div className="text-center">{preloader && <Preloader />}</div>

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
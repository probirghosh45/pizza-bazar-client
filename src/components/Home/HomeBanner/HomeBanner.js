import React from 'react';
import './HomeBanner.css'
import contact_form_7 from '../../../images/logos/contact_form_7.png'
import yoast from '../../../images/logos/yoast.png'
import woo_commerce from '../../../images/logos/woo_commerce.png'
import total_cache from '../../../images/logos/total_cache.png'
import wpml from '../../../images/logos/wpml.png'
import ltr from '../../../images/logos/ltr-rtl.png'
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';

const HomeBanner = () => {
    return (
        <div className='homebanner-section'>
            <div className="homebanner-container pb-5 mb-5">
                <div className='container px-md-0 px-3 '>
                    <Header/>
                    <div className='row align-items-center justify-content-between mt-3'>
                        <div className="col-md-6 ml-md-0 ml-5 pl-sm-5 pl-md-3">
                            <h1 className='font-weight-bold mb-4'>
                            Capturing<br />
                            Your<br />
                            Love Story
                        </h1>
                            <p>
                            I am a Bangladeshi Photographer and speak fluent Bangla and English. As such you can trust me to be at ease with you in BD dealing with photography with multi-cultural wedding guests.
                        </p>
                            <Link to='/login' className='btn btn-dark text-white px-5 py-2 mb-3'>Hire Me</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mb-5 pb-5'>
                <h3 className='text-center mb-5' style={{ fontWeight: '600' }}>Featured <span style={{ color: '#5DD233' }}>On</span></h3>
                <div className='row px-0 d-flex justify-content-between'>
                    
                    <div className='col-md-2 col-6 mb-md-0 mb-3 text-center'>
                        <img style={{ height: '50px' }} src={contact_form_7} alt="" />
                    </div>
                    <div className='col-md-2 col-6 mb-md-0 mb-3 text-center'>
                        <img style={{ height: '50px' }} src={yoast} alt="" />
                    </div>

                    <div className='col-md-2 col-6 mb-md-0 mb-3 text-center'>
                        <img style={{ height: '50px' }} src={woo_commerce} alt="" />
                    </div>
                    <div className='col-md-2 col-6 mb-md-0 mb-3 text-center'>
                        <img style={{ height: '50px' }} src={total_cache} alt="" />
                    </div>
                    <div className='col-md-2 col-6 mb-md-0 mb-3 text-center'>
                        <img style={{ height: '50px' }} src={wpml} alt="" />
                    </div>
                    <div className='col-md-2 col-6 mb-md-0 mb-3 text-center'>
                        <img style={{ height: '50px' }} src={ltr} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
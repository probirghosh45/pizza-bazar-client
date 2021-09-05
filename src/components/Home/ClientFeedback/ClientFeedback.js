import React, { useEffect, useState } from 'react';
import Preloader from '../../Preloader/Preloader';
import FeedbackList from '../FeedbackList/FeedbackList';
const ClientFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([])
    console.log(feedbacks);
    const [preloader, setPreloader] = useState(true)

    useEffect(() => {
        fetch('https://calm-shore-02848.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setFeedbacks(data)
                setPreloader(false)
            })
    }, [])

    return (
        <div className='container'>
            <h3 className='font-weight-bold text-center mb-5 pt-5 pb-3' style={{ color: '#7AB259' }}>What Our Customers Say About Us</h3>
            
            <div className="text-center">
              {preloader && <Preloader />}
            </div>
            <div className='row d-flex justify-content-center mb-5 pb-5'>
                {
                    feedbacks.map(feedback => <FeedbackList feedback={feedback} key={feedback._id} />)
                }
            </div>
        </div>
    );
};

export default ClientFeedback;
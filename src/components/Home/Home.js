import React from 'react';
import Services from '../Services/Services';
import ClientFeedback from './ClientFeedback/ClientFeedback';
import HomeBanner from './HomeBanner/HomeBanner';
import NewsLatter from './NewsLatter/NewsLatter';
import OurWorks from './OurWorks/OurWorks';
import Footer from './Footer/Footer'

const Home = () => {
    return (
        <div>
          <HomeBanner/>               
          <Services/>
          {/* <OurWorks/> */}
          <ClientFeedback/>
          <NewsLatter/>
          <Footer/>
        </div>
    );
};

export default Home;
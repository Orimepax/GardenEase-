import React from 'react';
import MainCarousel from '../../components/HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../../components/HomeSectionCard/HomeSectionCarousel';
import BannerSection from '../../components/HomeBanner/HomeBannerSection';
import IconBoxSection from '../../components/HomeBanner/IconBoxSection'; // Corrected import path

const HomePage = () => {
  return (
    <div>
      <div>
        <MainCarousel />
      </div>
      <div>
        <BannerSection />
        <IconBoxSection/>
        
      </div>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
      </div>
    </div>
  );
}

export default HomePage;

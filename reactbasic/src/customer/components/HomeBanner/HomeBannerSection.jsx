import React from 'react';
import './HomeBannerSection.css'; // Ensure the CSS file is correctly imported

const BannerSection = () => {
  return (
    <section className="bg-lime-100 flex flex-wrap items-center elementor-section elementor-top-section elementor-element elementor-section-boxed elementor-section-height-default">
      <div className="w-full md:w-1/2 elementor-column elementor-top-column elementor-element">
        <div className="elementor-widget-wrap elementor-element-populated">
          <div className="elementor-widget elementor-widget-image animated fadeIn">
            <div className="elementor-widget-container">
              <img
                loading="lazy"
                decoding="async"
                width="800"
                height="566"
                src="https://kitpro.site/planto/wp-content/uploads/sites/36/2021/08/marble-tray-with-succulent-plants-on-white-backgro-TKXAJWM.png"
                className="object-contain"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 elementor-column elementor-top-column elementor-element flex flex-col justify-center">
        <div className="elementor-widget-wrap elementor-element-populated p-8">
          <div className="elementor-widget-container">
            <h2 className="elementor-heading-title elementor-size-default whisper-regular">About Us</h2>
          </div>
          <div className="elementor-widget-container">
            <p className="elementor-heading-title elementor-size-default exo-2-custom">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;

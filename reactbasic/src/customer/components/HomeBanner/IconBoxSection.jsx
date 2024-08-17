import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RecommendIcon from '@mui/icons-material/Recommend';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './IconBoxSection.css';

const IconBoxSection = () => {
  return (
    <div className="parent-div bg-lime-100">
      <div className="div2">
        <div className="icon-div">
          <LocalShippingIcon style={{ fontSize: 40 }} />
        </div>
        <div className="empty-div">
          <h3>Free Delivery</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>
      
      <div className="div2">
        <div className="icon-div">
          <RecommendIcon style={{ fontSize: 40 }} />
        </div>
        <div className="empty-div">
          <h3>Quality Product</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      
      <div className="div2">
        <div className="icon-div">
          <CheckCircleIcon style={{ fontSize: 40 }} />
        </div>
        <div className="empty-div">
          <h3>Trusted</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </div>
  );
};

export default IconBoxSection;

import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RecommendIcon from '@mui/icons-material/Recommend';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './IconBoxSection.css'; // Ensure the CSS file is correctly imported

const IconBoxSection = () => {
  return (
    <div className="parent-div bg-lime-100">
      {/* Div 1 */}
      <div className="div2">
        <div className="icon-div">
          <LocalShippingIcon style={{ fontSize: 40 }} /> {/* Increased icon size */}
        </div>
        <div className="empty-div">
          <h3>Free Delivery</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>
      
      {/* Div 2 */}
      <div className="div2">
        <div className="icon-div">
          <RecommendIcon style={{ fontSize: 40 }} /> {/* Increased icon size */}
        </div>
        <div className="empty-div">
          <h3>Quality Product</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      
      {/* Div 3 */}
      <div className="div2">
        <div className="icon-div">
          <CheckCircleIcon style={{ fontSize: 40 }} /> {/* Increased icon size */}
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

import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        container
        className="bg-yellow-50 text-green-900 mt-10"
        sx={{ bgcolor: 'yellow.50', color: 'green', py: 1, textAlign: 'center' }}
      >
        <Grid item xs={12} className="flex justify-center items-center mb-5">
          <a href="/">
            <img
              alt="GardenEase"
              src="./images/footerlogo/transparentlogo.png"
              className="h-20 w-auto mx-auto block"
            />
          </a>
        </Grid>
          {/* Line under the image */}
        <Grid item xs={12} className="mb-5">
          <hr className="border-t-1 border-green-900 mx-auto w-11/12 mt-5"/>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3} sx={{ marginTop: 2 }}>
          <Typography variant="h6" component="div" className="pb-3" sx={{fontWeight: 'bold', textDecoration: 'underline'}}>
            Shop
          </Typography>
          <div>
            <Button className="pb-2 text-green-900 hover:text-emerald-500" component="a" href="#"
            sx={{ color: 'green' }}>
              Plants
            </Button>
          </div>
          <div>
            <Button className="pb-2 text-green-900 hover:text-emerald-500" component="a" href="#" sx={{ color: 'green' }}>
              Seeds & Bulbs
            </Button>
          </div>
          <div>
            <Button className="pb-2 hover:text-emerald-500" component="a" href="#"
            sx={{ color: 'green' }}>
              Tools & Equipments
            </Button>
          </div>
          <div>
            <Button className="pb-2 hover:text-emerald-500" component="a" href="#"
            sx={{ color: 'green' }}>
              Pots & Planters 
            </Button>
          </div>
          <div>
            <Button className="pb-2 hover:text-emerald-500" component="a" href="#"
            sx={{ color: 'green' }}>
              Garden Decor 
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3} sx={{ marginTop: 2 }}>
          <Typography variant='h6' component="div" className="pb-3" sx={{fontWeight: 'bold',textDecoration: 'underline'}}>
            About Us 
          </Typography>
          <div>
            <Button className="pb-5 hover:text-emerald-500" component="a" href="#"
            sx={{ color: 'green' }}>
              Our Story 
            </Button>
          </div>
          <div>
            <Button className="pb-5 hover:text-emerald-500" component="a" href="#"
            sx={{ color: 'green' }}>
              Sustainability
            </Button>
          </div>
          <div>
            <Button className="pb-5 hover:text-emerald-500" component="a" href="#"
            sx={{ color: 'green' }}>
              Community Initiative 
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ marginTop: 2 }}>
          <Typography variant="h6" component="div" className="pb-3" sx={{fontWeight: 'bold', textDecoration: 'underline'}}>
            Support
          </Typography>
          <div>
            <Button className="pb-5 hover:text-emerald-500" component="a" href="#"
            sx={{ color: 'green' }}>
              Help Center
            </Button>
          </div>
          <div>
            <Button className="pb-5 hover:text-emerald-500" component="a" href="#"
            sx={{ color: 'green' }}>
              Shipping & Delivery
            </Button>
          </div>
          <div>
            <Button className="pb-5 hover:text-emerald-500" component="a" href="#"
            sx={{ color: 'green' }}>
             Return & Refund
            </Button>
          </div>
          <div>
          <Button className="pb-5 hover:text-emerald-500" component="a" href="#"
            sx={{ color: 'green' }}>
             Track Order
            </Button>
          </div>
          <div>
          <Button className="pb-5 hover:text-emerald-500" component="a" href="#"
            sx={{ color: 'green' }}>
             Contact Us 
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={{ marginTop: 2 }}>
          <Typography variant="h6" component="div" className="pb-3" sx={{fontWeight: 'bold', textDecoration: 'underline'}}>
            Social Media 
          </Typography>
          <div>
            <Button className="pb-5 hover:text-emerald-500" component="a" href="#"
            sx={{ color: 'green' }}>
              Facebook
            </Button>
          </div>
          <div>
            <Button className="pb-5 hover:text-emerald-500" component="a" href="#"
            sx={{ color: 'green' }}>
             Instagram
            </Button>
          </div>
          <div>
            <Button className="pb-5 hover:text-emerald-500" component="a" href="#"
            sx={{ color: 'green' }}>
              Pinterest 
            </Button>
          </div>
        </Grid>
        {/* line under the content */}
        <Grid item xs={12} className="mb-5">
          <hr className="border-t-1 border-green-900 mx-auto w-11/12 mt-5"/>
          <div className="mb-4 mt-8">© 2024 GardenEase  All Right Reserved.</div>
        </Grid>
      </Grid>
    </div>
    
  );
};

export default Footer;

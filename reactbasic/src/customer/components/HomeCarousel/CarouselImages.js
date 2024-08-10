const images = require.context('../../../../public/images/CarouselImages/CarouselImadesText', false, /\.(png)$/);

const carouselImages = images.keys().map(images);

export default carouselImages;


const images = require.context('../../../../public/images/CarouselImages', false, /\.(png)$/);

const carouselImages = images.keys().map(images);

export default carouselImages;

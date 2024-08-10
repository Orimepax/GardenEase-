const images = require.context('../../../../public/images/HomeSectionCardImages', false, /\.(png|jpg)$/);

const cardImages = images.keys().map(images);

export default cardImages;

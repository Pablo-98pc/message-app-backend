const data = require('../dataImages.json');
class Image {
getImage() {
    let image = data[Math.floor(Math.random() * data.length)];
    return image;
}
}
module.exports = Image;
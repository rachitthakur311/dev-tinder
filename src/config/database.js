const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(
        'mongodb+srv://Pandit_ji:tinder8888@panditji.mjqqnvo.mongodb.net/'
    );
};
// mongoose.connect('mongodb+srv://Pandit_ji:tinder8888@panditji.mjqqnvo.mongodb.net/');



module.exports = {
    connectDB
}





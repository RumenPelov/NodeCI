const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = async () => {
const testUser = await User.findOne({displayName: 'forTest'})
    if (!testUser){
        const newTestUser = await new User({ displayName: 'forTest'}).save();
        return newTestUser;
    }

    return testUser;

    //return new User({ displayName: 'forTest'}).save();
}
const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema(
    {
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    }
)
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
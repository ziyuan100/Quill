const mongoose = require("mongoose");
const { Schema } = mongoose;

const MessageSchema = new Schema(
    {
        content: {
            type: String,
            required: true
        },
        sender: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        recipient: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model('Message', MessageSchema);
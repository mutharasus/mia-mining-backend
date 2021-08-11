const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blobSchema = new Schema({
    blob_name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    blob_value: {
        type: String,
        required: false,
        unique: false,
        trim: true
    },
    blob_date: {
        type: Date,
        required: true
    }
}, {
    timestamps: true,
});

const Blob = mongoose.model('Blob', blobSchema);

module.exports = Blob;
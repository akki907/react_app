const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tenantSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim:true
    },
    pan: {
        type: String,
        required: true,
        unique:[true,'Pan Id Should be Unique']
    },
    aadhar: {
        type: String,
        trim: true,
        unique:[true,'Adhar Id Should be Unique']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date
    }
})

module.exports = mongoose.model('Tenant', tenantSchema);
import mongoose from 'mongoose';

const weatherHistorySchema = new mongoose.Schema({
    city: {
        type: mongoose.Schema.Types.String,
        required: true
    },

    requestType: {
        type: mongoose.Schema.Types.String,
        required: true
    },

    Data: {
        type: mongoose.Schema.Types.Mixed
    }

},

     {
        timestamps: true,
    }

);


export const Weather = mongoose.model('Weather', weatherHistorySchema);
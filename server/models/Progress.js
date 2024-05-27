const { Schema } = require('mongoose');

const progressSchema = new Schema(
    {
        date: {
            type: Date,
            required: true,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        weight: {
            type: Number,
        },
        duration: {
            type: Number,
        },
        distance: {
            type: Number,
        }
    }
);

module.exports = progressSchema;
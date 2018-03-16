const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CounterSchema = Schema({
    _id: { type: String, require: true },
    seq: { type: Number, default: 0 }
});

const counter = mongoose.model('counter', CounterSchema);

const urlSchema = new Schema({
    _id: {  type: Number, index: true },
    long_url: String,
    created_at: Date
});

urlSchema.pre('save', (next) => {
    const doc = this;
    counter.findByIdAndUpdate({_id: 'url_count'}, {$inc: {seq: 1} }, (error, counter) => {
        if (error)
            return next(error);
        doc.created_at = new Date();
        doc._id = counter.seq;
        next();
    });
});

const Url = mongoose.model('Url', urlSchema);

export default {
    Url
}
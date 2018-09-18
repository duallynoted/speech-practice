//requires
const express = require('express');
app = express();
const bodyParser = require('body-parser');

//globals
const PORT = process.env.PORT || 5000;

//uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded);
app.use(bodyParser.json());

const Schema = mongoose.Schema;
const speechSchema = new Schema({
    name: { type: String },
    ummmm: { type: Number },
    uhhhh: {type: Number },
    and: {type: Number },
    like: {type: Number },
    so: {type: Number },
    youKnow: {type: Number },
    doubleClutch: {type: Number },
    falseStart: {type: Number }
});
const Speech = mongoose.model('speech', speechSchema);

//mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/speeches');
mongoose.connection.on('connected', () => {
    console.log('Connected to MONGO DB');
});
mongoose.connection.on('error', (error) => {
    console.log('Failed connecting to MONGO: ', error);
});

//spins
app.listen(PORT, () => {
    console.log('SERVER UP AND RUNNING ON PORT;', PORT);    
})
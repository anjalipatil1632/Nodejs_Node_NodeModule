const express = require('express');
const cors = require('cors');
const app = express();



var whitelist = ['http://localhost:3000', 'https://localhost:3443', 'http://EC2AMAZ-6A95KNP:3001','http://localhost:4000'];
var corsOptionsDelegate = (req, callback) => {
    var corsOptions;
    console.log(req.header('Origin'));
    if(whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    }
    else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);
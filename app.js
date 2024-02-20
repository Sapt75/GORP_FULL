// express is required
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const path = require("path")
const body_parser = require("body-parser")
const compression = require('compression');



dotenv.config({ path: './config.env' });
require('./db/conn');


app.use(express.json({ limit: "50mb" }));
app.use(compression({
  level: 6,
  threshold: 0
}))
app.use(express.static('out'));
app.use(express.static('admin'))
app.use(require('./router/auth'));

// Set up CORS options
const whitelist = ['https://www.getonroadprice.com', 'https://inquisitive-knickers-fish.cyclic.app'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

app.use(body_parser.urlencoded({ extended: true, limit: "50mb" }))


const PORT = process.env.PORT


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build'))
});
// app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'admin/index.html')));




app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
})

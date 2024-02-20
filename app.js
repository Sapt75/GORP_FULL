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
// const user = require('./model/userSchema');
// "mongodb+srv://admin:admin%40webshark@cluster0.mdurdqc.mongodb.net/onroadprice?retryWrites=true&w=majority"

app.use(express.json({ limit: "50mb" }));
app.use(compression({
  level: 6,
  threshold: 0
}))
app.use(express.static('out'));
app.use(express.static('admin'))
app.use(require('./router/auth'));

// app.use(express.static(path.join(__dirname, 'build')));
app.use(body_parser.urlencoded({ extended: true, limit: "50mb" }))

// const DB =`mongodb+srv://admin:admin%40webshark@cluster0.mdurdqc.mongodb.net/onroadprice?retryWrites=true&w=majority`;
const PORT = process.env.PORT

const whitelist = ['https://www.getonroadprice.com', 'http://localhost:3000'];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      // Allow requests from whitelisted origins or requests with no origin (e.g., same-origin requests)
      callback(null, true);
    } else {
      // Deny requests from origins not in the whitelist
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

// Middleware
const middleware = (req, res, next) => {
  console.log(`Middleware`);
  next();
}
// middleware();

__dirname = path.resolve();

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'out/new-cars/[...variant]/index.html'))
});
// app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'admin/index.html')));



// app.get('/', (req, res) =>{
//     res.send(`Hello World from the server a`)
// });

// app.get('/form', (req, res) =>{
//     res.send(`Lead Form`)
// });
// app.get('/test-page', middleware, (req, res) =>{
//     console.log(`Test Rule`)
//     res.send(`Test Page`)
// });
// app.get('/test', middleware, (req, res) =>{
//     res.send(`test page`)
// });


app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
})

// console.log(`Sucess`);


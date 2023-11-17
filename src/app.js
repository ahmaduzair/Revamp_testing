const express = require("express");
const cors = require('cors');
const config = require("./config/envConfig");
const xss = require('xss-clean');


const app = express();


// parse json request body
app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
// sanitize request data
app.use(xss());
// enable cors
app.use(cors());
app.options('*', cors());

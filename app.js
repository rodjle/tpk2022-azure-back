const express = require("express");
const bodyParser = require("body-parser");
const ProductRouter = require('./src/product/ProductRouter');
const RoleRouter = require('./src/role/RoleRouter');
const HandleError = require('./src/error/ErrorHandler');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(ProductRouter);
app.use(RoleRouter);
app.use(HandleError);


module.exports = app;

const express = require("express");
const bodyParser = require("body-parser");
const RoleRouter = require('./src/role/RoleRouter');
const UserRouter = require('./src/user/UserRouter');
const PostRouter = require('./src/post/PostRouter');
const HandleError = require('./src/error/ErrorHandler');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(RoleRouter);
app.use(UserRouter);
app.use(PostRouter);


app.use(HandleError);

module.exports = app;

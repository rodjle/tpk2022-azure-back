const { database, check } = require("./dbconfig");
const Product = require("../../src/product/Product");
const Role = require('../../src/role/Role');

const User = require('../models/user');
const Post = require('../models/post'); 
const Comment = require('../models/comment');
const Reaction = require('../models/reaction');
const Project = require('../models/project');

async function init() {
    console.log("Sincronizando modelo...");
    await check();
    await database.sync();
}

module.exports = { init };
const { database, check } = require("./dbconfig");

const Role = require('../../src/role/Role');
const User = require('../../src/user/User');
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
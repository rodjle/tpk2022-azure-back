const { database, check } = require("./dbconfig");

const Role = require('../../src/role/Role');
const User = require('../../src/user/User');
const Post = require('../../src/post/Post'); 
const Comment = require('../../src/comment/Comment');
const Reaction = require('../../src/reaction/Reaction');
const Project = require('../../src/project/Project');

async function init() {
    console.log("Sincronizando modelo...");
    await check();
    await database.sync();
}

module.exports = { init };
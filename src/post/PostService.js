const database = require("../../database/db/dbconfig");
const Post = require("./Post");

const getPosts = async () => {
    const posts = await Post.findAll();
    return posts;
}

const getPost = async (id) => {
    const post = await Post.findOne({ where: { id: id } });

    return post;
}

const createPost = async (body) => {
   // const { name } = body;
    const newPost = await Post.create(body)

    return newPost;
}

const updatePost = async (id, body) => {
    const { name } = body;

    const post = await Post.findOne({ where: { id: id } });
    post.name = name;
    await post.save();
    return post;
}

const deletePost = async (id) => {
    const destroyedPost = await Post.destroy({ where: { id: id } });

    return destroyedPost;
}


module.exports = { getPosts, getPost, createPost, updatePost, deletePost }
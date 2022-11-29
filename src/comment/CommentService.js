const database = require("../../database/db/dbconfig");
const Comment = require("./Comment");

const getComments = async () => {
    const comments = await Comment.findAll();
    return comments;
}

const getComment = async (id) => {
    const comment = await Comment.findOne({ where: { id: id } });

    return comment;
}

const createComment = async (body) => {
    const newComment = await Comment.create(body)

    return newComment;
}

const updateComment = async (id, body) => {
    const { name } = body;

    const comment = await Comment.findOne({ where: { id: id } });
    comment.name = name;
    await comment.save();
    return comment;
}

const deleteComment = async (id) => {
    const destroyedComment = await Comment.destroy({ where: { id: id } });

    return destroyedComment;
}


module.exports = { getComments, getComment, createComment, updateComment, deleteComment }
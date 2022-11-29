const database = require("../../database/db/dbconfig");
const Reaction = require("./Reaction");

const getReactions = async () => {
    const reactions = await Reaction.findAll();
    return reactions;
}

const getReaction = async (id) => {
    const reaction = await Reaction.findOne({ where: { id: id } });

    return reaction;
}

const createReaction = async (body) => {
    const newReaction = await Reaction.create(body)

    return newReaction;
}

const updateReaction = async (id, body) => {
    const { name } = body;

    const reaction = await Reaction.findOne({ where: { id: id } });
    reaction.name = name;
    await reaction.save();
    return reaction;
}

const deleteReaction = async (id) => {
    const destroyedReaction = await Reaction.destroy({ where: { id: id } });

    return destroyedReaction;
}


module.exports = { getReactions, getReaction, createReaction, updateReaction, deleteReaction }
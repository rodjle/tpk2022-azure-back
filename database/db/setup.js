const {database,check}=require("./dbconfig");
const Cliente=require("../models/cliente");

async function init() {
    console.log("Sincronizando modelo...");
    await check();
    await database.sync();
   
}

module.exports={init};
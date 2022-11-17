const {database,check}=require("./dbconfig");
const Cliente=require("../models/cliente");
const Produto=require("../models/produto");

async function init() {
    console.log("Sincronizando modelo...");
    await check();
    await database.sync();
   
}

module.exports={init};
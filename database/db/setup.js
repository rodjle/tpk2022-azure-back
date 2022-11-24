const {database,check}=require("./dbconfig");
const Produto=require("../models/produto");

async function init() {
    console.log("Sincronizando modelo...");
    await check();
    await database.sync();
   
}

module.exports={init};
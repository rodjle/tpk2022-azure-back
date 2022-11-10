const app =require("./app"); //foi separado e colocado em app.js
const dbSetup=require("./database/db/setup");
const PORT= process.env.PORT || 3000;

//Cada vez que inicia o programa roda-se esse script para sincromizar o Model
(async () => {
    await dbSetup.init();
  }) ();
  



app.listen(PORT,function(){
    console.log("Servidor-Backend está rodando na porta: "+PORT);
})
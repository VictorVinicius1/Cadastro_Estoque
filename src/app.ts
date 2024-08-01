import Express from "express";
import router from "./db/router";


const app = Express();
app.use(Express.json())
const port = 7777;

app.listen(port,()=>{console.log("Servidor funcionando")})
    app.use('/', router);

const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
    
const { sendBasicEmail } = require('./services/email-service');
const setupAndStartServer = ()=>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    sendBasicEmail('support@admin.com',
        'rohitdhankhar7347@gmail.com',
        "surprise",
        "Surprise  "
    );
    app.listen(PORT,()=>{

        console.log("Server Started on port:",PORT);
    });
}
setupAndStartServer();
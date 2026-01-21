const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const jobs = require('./utils/job');
const { sendBasicEmail } = require('./services/email-service');
const TicketController = require('./controllers/ticket-controller');
const {createChannel}= require('./utils/messageQueue');
const setupAndStartServer =async ()=>{
    const app = express();
    app.use(bodyParser.json());
    app.post('/api/v1/tickets',TicketController.create)
    app.use(bodyParser.urlencoded({extended:true}));
    //const channel = await createChannel();
    // sendBasicEmail('support@admin.com',
    //     'tl0209@gmail.com',
    //     "surprise",
    //     "Surprise ke bare me soch na motuuuuu"
    // );
    
    app.listen(PORT,()=>{

        console.log("Server Started on port:",PORT);
     // jobs();
  
    });
}
setupAndStartServer();
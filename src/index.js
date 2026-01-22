const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
const jobs = require('./utils/job');
const {REMINDER_BINDING_KEY} = require('./config/serverConfig');
const TicketController = require('./controllers/ticket-controller');
const {createChannel,subscribeMessage}= require('./utils/messageQueue');
const EmailService = require('./services/email-service');

const setupAndStartServer =async ()=>{
    const app = express();
    app.use(bodyParser.json());
    app.post('/api/v1/tickets',TicketController.create)
    app.use(bodyParser.urlencoded({extended:true}));
   
    const channel = await createChannel();
   subscribeMessage(channel,EmailService.subscrbieEvents,REMINDER_BINDING_KEY);
    app.listen(PORT,()=>{

        console.log("Server Started on port:",PORT);
      jobs(channel);
  
    });
}
setupAndStartServer();
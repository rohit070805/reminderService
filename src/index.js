const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/serverConfig');
    const cron = require('node-cron');
const { sendBasicEmail } = require('./services/email-service');
const setupAndStartServer = ()=>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    // sendBasicEmail('support@admin.com',
    //     'tl0209@gmail.com',
    //     "surprise",
    //     "Surprise ke bare me soch na motuuuuu"
    // );
    
    app.listen(PORT,()=>{

        console.log("Server Started on port:",PORT);
      cron.schedule('*/30 * * * * *', () => {
  console.log('Running a task every 30 seconds:', new Date().toLocaleTimeString());
});

console.log('Cron job scheduled successfully, waiting for the first run.');
    });
}
setupAndStartServer();
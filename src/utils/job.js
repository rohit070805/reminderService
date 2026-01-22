const cron = require('node-cron');
const {REMINDER_BINDING_KEY} = require('../config/serverConfig');
const emailService = require('../services/email-service');
const {publishMessage} = require('./messageQueue');
const setupJobs = (channel)=>{
    cron.schedule('*/2 * * * *',async()=>{
        
        const response = await emailService.fetchPendingEmails();
        response.forEach((email) => {
            const ticketPayload={
            data:{
                mailFrom:"airlineHelpline@gamil.com",
                mailTo:email.recepientEmail,
                mailSubject:email.subject,
                mailBody:email.content
            },
            service:'SEND_BASIC_MAIL',
           };
            publishMessage(channel,REMINDER_BINDING_KEY,JSON.stringify(ticketPayload));
           
        
           
          
        });
        console.log(response);
    });
}
module.exports = setupJobs;
const sender = require('../config/emailConfig');
const TicketRepository = require('../repository/ticket-repository');
 const repo = new TicketRepository();
const sendBasicEmail =async (data)=>{
    
    try {
         const response = await sender.sendMail({
        from:data.mailFrom,
        to:data.mailTo,
        subject:data.mailSubject,
        text:data.mailBody
    });
    console.log(response);
    } catch (error) {
        console.log(error);
    }
   
}
const updateTicket = async(ticketId,data)=>{
    try {
        const response = await repo.update(ticketId,data);
        return response;
    } catch (error) {
          console.log(error);
    }
}
const fetchPendingEmails=async()=>{
    try {
       
        const response = await repo.get({status:"PENDING"});
        return response
        
    } catch (error) {
        throw error;
    }
}
const createNotification=async(data)=>{
    try {
        const response = await repo.create(data);
        return response;

    } catch (error) {
        throw error;
    }
}
const subscrbieEvents = async(payload)=>{
    let service = payload.service;
    let data = payload.data;
    switch(service){
        case 'CREATE_TICKET':
            await createNotification(data);
            break;
        case 'SEND_BASIC_MAIL':
            await sendBasicEmail(data);
            break;
        default:
            console('No valid service');
    }
}
module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket,
    subscrbieEvents
}
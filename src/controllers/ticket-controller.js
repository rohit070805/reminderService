const TicketService = require('../services/email-service');
const create = async(req,res)=>{
    try {
         const response = await TicketService.createNotification(req.body);
    return res.status(200).json({
        data:response,
        success:true,
        err:{},
        message:"successfully created a email remainder",
    })
    } catch (error) {
        return  res.status(500).json({
        data:{},
        success:false,
        err:error,
        message:"not able to create a email remainder",
    })
    }
   
}
module.exports = {
    create
}
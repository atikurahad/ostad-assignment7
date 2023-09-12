exports.readMessage=(req,res)=>{
    res.status(200).json({
       status:"success", 
       data:"Read Message Api"
    });
 };
 
 exports.createMessage=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Created Message Api"
    });
 };

 exports.updateMessage=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Updated Message Api"
    });
 };

 exports.deleteMessage=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Deleted Message Api"
    });
 };
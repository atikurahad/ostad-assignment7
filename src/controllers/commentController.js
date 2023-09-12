exports.readComment=(req,res)=>{
    res.status(200).json({
       status:"success", 
       data:"Read Comment Api"
    });
 };
 
 exports.createComment=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Created Comment Api"
    });
 };

 exports.updateComment=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Updated Comment Api"
    });
 };

 exports.deleteComment=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Deleted Comment Api"
    });
 };
exports.readProduct=(req,res)=>{
    res.status(200).json({
       status:"success", 
       data:"Read Product Api"
    });
 };
 
 exports.createProduct=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Created Product Api"
    });
 };

 exports.updateProduct=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Updated Product Api"
    });
 };

 exports.deleteProduct=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Deleted Product Api"
    });
 };
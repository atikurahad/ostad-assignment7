exports.readPortfolio=(req,res)=>{
    res.status(200).json({
       status:"success", 
       data:"Read Portfolio Api"
    });
 };
 
 exports.createPortfolio=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Created Portfolio Api"
    });
 };

 exports.updatePortfolio=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Updated Portfolio Api"
    });
 };

 exports.deletePortfolio=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Deleted Portfolio Api"
    });
 };
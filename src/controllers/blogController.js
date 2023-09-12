exports.readBlog=(req,res)=>{
    res.status(200).json({
       status:"success", 
       data:"Read Blog Api"
    });
 };
 
 exports.createBlog=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Created Blog Api"
    });
 };

 exports.updateBlog=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Updated Blog Api"
    });
 };

 exports.deleteBlog=(req,res)=>{
    res.status(200).json({
       status:"success",
       data:"Deleted Blog Api"
    });
 };
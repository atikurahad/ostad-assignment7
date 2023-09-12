
 const express = require('express');
 const app = require('./app');

  
 


   app.listen(`${process.env.RUNNING_PORT}`, ()=>{
    console.log(`Server is listning on port ${process.env.RUNNING_PORT}`);
   })

  
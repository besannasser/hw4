const express=require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
 const app=express();
 app.use(cors());
 app.use(bodyParser.json());
 app.get('/user',(req,res)=>{
    res.json({name:req.query.name,message: "hello we are  in my node page"});
})
app.post('/user/besan',(req,res)=>{
    res.json({name:req.body.name , message:req.body.massage});
    
})
app.get('/user/besan',(req,res)=>{
    res.json({message: "hello in my node page"});
})

// app.get('/besan',(req,res)=>{
//     res.json({user:"besan"});
// })
//  app.post('/besan',(req,res)=>{
//      const data=req.body;
//      console.log(data);
//      res.json({success:true});
//  })
 app.listen(3000,()=>{
    console.log('server run');
});
// const express=require('express')
import express from 'express'

const app=express();

// app.get('/',(req,res)=>{
//     res.send('Server is ready')
// });


app.use(express.static('dist'));

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
          id:1,
         title:'First joke',
         content:'This is first joke'
        },
        {
          id:2,
         title:'Second joke',
         content:'This is Second joke'
        },
        {
          id:3,
         title:'third joke',
         content:'This is third joke'
        },
        {
          id:4,
         title:'Fourth joke',
         content:'This is fourth joke'
        },
        {
          id:5,
         title:'Fifth joke',
         content:'This is fifth joke'
        },
    ];
    res.send(jokes);
})

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Serve at http://localhost:${port}`);
});


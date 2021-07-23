// required moduled 
const express =require("express");

const httpStatus   = require("http-status-codes");
const body   = require("body");
const fileManager = require("./readWriteModule");
var upload = require("express-fileupload");
var app = express();
app.use(upload());
//app.use();
//app.use();
//app.use();

//this script add routes for quizeme project ...
//routing views 

    app.get("/student.html",function(req,res){
        res.sendFile(__dirname+"/views/index.html");
    });
    app.get("/makerPage.html",function(req,res){
        res.sendFile(__dirname+"/views/makerPage.html");
    });
    app.get("/requestTesting.html",function(req,res){
        res.sendFile(__dirname+"/views/requestTesting.html");
    });
    app.get("/examCreator.html",function(req,res){
        res.sendFile(__dirname+"/views/examCreator.html");
    });
    app.get("/test.html",function(req,res){
        res.sendFile(__dirname+"/views/test.html");
    });
    app.get("/home.html",function(req,res){
        res.sendFile(__dirname+"/views/home.html");
    });
    app.get("/complete.html",function(req,res){
        res.sendFile(__dirname+"/views/complete.html");
    });
    
//routing js scripts 
    app.get("/public/js/:script",function(req,res){
        res.sendFile(__dirname+"/public/js/"+req.params.script);
    });
    
    app.get("/public/js/appenddingWay.js",function(req,res){
        res.sendFile(__dirname+"/public/js/appenddingWay.js");
    });
    app.get("/public/js/script.js",function(req,res){
        res.sendFile(__dirname+"/public/js/script.js");
    });
    app.get("/public/js/recorderObject.js",function(req,res){
        res.sendFile(__dirname+"/public/js/recorderObject.js");
    });
    app.get("/public/js/makerScript.js",function(req,res){
        res.sendFile(__dirname+"/public/js/makerScript.js");
    });
    app.get("/public/js/testRequest.js",function(req,res){
        res.sendFile(__dirname+"/public/js/testRequest.js");
    });
    app.get("/public/js/typeListener.js",function(req,res){
        res.sendFile(__dirname+"/public/js/typeListener.js");
    });
    app.get("/public/js/script1.js",function(req,res){
        res.sendFile(__dirname+"/public/js/script1.js");
    });
    app.get("/public/js/exam_info.js",function(req,res){
        res.sendFile(__dirname+"/public/js/exam_info.js");
    });
    app.get("/public/js/handler.js",function(req,res){
        res.sendFile(__dirname+"/public/js/handler.js");
    });
    app.get("/public/js/requestA.js",function(req,res){
        res.sendFile(__dirname+"/public/js/requestA.js");
    });
    app.get("/public/js/classes.js",function(req,res){
        res.sendFile(__dirname+"/public/js/classes.js");
    });
    app.get("/public/js/studentClasses.js",function(req,res){
        res.sendFile(__dirname+"/public/js/studentClasses.js");
    });
//routing jsn files 
  
        app.get("/:file",function(req,res){
            res.sendFile(__dirname+"/files/"+req.params.file);
        });  
    /*
    app.get("/questions.json",function(req,res){
        res.sendFile(__dirname+"/files/questions.json");
    });
  
    app.get("/test.json",function(req,res){
        res.sendFile(__dirname+"/files/test.json");
    });*/
    app.post("/saveStudent",function(req,res){  
        //using body module 
        console.log("abo shaimaa Athoor");
        body(req,
            (err,body)=>
            {   
                console.log(body);
                let bodyObj = JSON.parse(body);
                let file = bodyObj.fileName;
                let studentobj = bodyObj.student;
                console.log(file);
                console.log(studentobj);
                let studentString = JSON.stringify(studentobj);
                fileManager.saveStudent(file,studentString);

            });
           
        res.end("done");
    });
    app.post("/saveExam",function(req,res){  
                body(req,
            (err,body)=>
            {   
                console.log(body);
                let bodyObj = JSON.parse(body);
                let file = bodyObj.fileName;
                let examobject  = bodyObj.examObj;
                console.log(file);
                console.log(examobject);
                let examStr = JSON.stringify(examobject);
                fileManager.saveExam(file,examStr);

            });
           
        res.end("done");
    });
//routing css files 
    app.get("/public/css/:style",function(req,res){
        res.sendFile(__dirname+"/public/css/"+req.params.style);
    });
    /*
    app.get("/public/css/style.css",function(req,res){
        res.sendFile(__dirname+"/public/css/style.css");
    });
    app.get("/public/css/style1.css",function(req,res){
        res.sendFile(__dirname+"/public/css/style1.css");
    });
    app.get("/public/css/style3.css",function(req,res){
        res.sendFile(__dirname+"/public/css/style3.css");
    });*/
//routing images
    app.get("/public/images/:img",function(req,res){
        res.sendFile(__dirname+"/public/images/"+req.params.img);
    });
         
    app.get("/uploads/:img",function(req,res){
        res.sendFile(__dirname+"/uploads/"+req.params.img);
    });
    /*
    app.get("/public/images/1.jpg",function(req,res){
        res.sendFile(__dirname+"/public/images/1.jpg");
    });
    app.get("/public/images/2.jpg",function(req,res){
        res.sendFile(__dirname+"/public/images/2.jpg");
    });
    app.get("/public/images/3.jpg",function(req,res){
        res.sendFile(__dirname+"/public/images/3.jpg");
    });
    app.get("/public/images/4.jpg",function(req,res){
        res.sendFile(__dirname+"/public/images/4.jpg");
    });*/
// for upload files 
    app.post("/",function(req,res){
        if(req.files)
        {
            var file = req.files.filename;
            var fileName = file.name;
            file.mv("./uploads/"+fileName,function(err){
                if(err)
                console.log(err);
                console.log("successfully uploaded");
            })
        }
    });

//start the server
const http = require("http").Server(app).listen(3000);
console.log("server is running on port 3000");
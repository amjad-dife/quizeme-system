const fs = require('fs');
var RWobj=
{
    saveJsonObjToFile:(str,file)=>
    {
        fs.writeFile(file,str,"utf-8",
            (err,data)=>
                {
                    if(err)
                    {
                        console.log("an error ocurred while saving jsObject in json file");
                    }
                    else
                    {
                        console.log(`data is saved at the file : ${file}`);
                    }
                });
    },
    readJsonObjFromFile:(file)=>
    {
         fs.readFile(file,
            (err,data)=>
            {
                if(err)
                {
                    console.log("error ocurred while reading from file");
                    return;
                }
                let jsObj = JSON.parse(data);
                console.log(jsObj);  
            });
    },
    saveStudent:(file,studentStr)=>
    {
        
        fs.readFile(file,"utf-8",
            (err,data)=>
            {
                RWobj.saveJsonObjToFile(studentStr,file);
            }); 
    },
    saveExam:(file,examStr)=>
    {
        
        fs.readFile(file,"utf-8",
            (err,data)=>
            {
                RWobj.saveJsonObjToFile(examStr,file);
            }); 
    }
};
module.exports= RWobj;
let backEndService = 
{
    makeRequest:(dataObject,url)=>
        {
            let promise = new Promise((resolve,reject)=>
            {
                let myRequest = new XMLHttpRequest();
                var dataString = JSON.stringify(dataObject);
                myRequest.open("POST",url, true);
                myRequest.onload=
                ()=>
                {
                    
                    resolve(myRequest.response);
                };
                myRequest.send(dataString);
            });

            return promise;
        
        },
    saveStudent:(dataObj)=>
    {
            /*
                dataObj structure :
                    {
                        
                        fileName:"",
                        student:{}
                    }
            */  
        let promise3= new Promise((resolve,reject)=>
        {
        backEndService.makeRequest(dataObj,"/saveStudent").then((responsedata)=>{ resolve(responsedata); });
        });
        return promise3;

    },
    saveExam:(dataObj)=>
    {
         /*
                dataObj structure :
                    {
                        
                        fileName:"",
                        examObj:{}
                    }
            */  
        let promise2= new Promise((resolve,reject)=>{
            backEndService.makeRequest(dataObj,"/saveExam").then((responsedata)=>{resolve(responsedata);}); 
        });
        return promise2;
    }
}

const addQuestionBtn = document.getElementById('addQuestionBtn');
var askLayout;
exam_info.getFile("questions.json");
const counterP = document.getElementById('counterDiv');
var answerLayout;
let questionCounter = 0;
function increaseCounter() {
    questionCounter = questionCounter + 1;
    counterP.innerHTML = "<h1><span> " + questionCounter + " </span>Questions</h1>";
}
function decreaseCounter() {
    questionCounter = questionCounter - 1;
    counterP.innerHTML = "<h1><span> " + questionCounter + " </span>Questions</h1>";
}
function deleteSelectedQuestion(event) {
    console.log("iam inside delteQuestion");

    const el = event.target;
    let qId = el.dataset.qid;
    deleteQuestionObj(qId);

    const elParent = el.parentNode;
    const parentElParent = elParent.parentNode;
    parentElParent.removeChild(elParent);
    decreaseCounter();

}
function arrangeTheTable(table , qId) 
{
    console.log("iam arranging the table");
    const toolLayout = document.createElement('div');
    toolLayout.setAttribute("class", "toolLayoutDiv");
    prpareTheTools(toolLayout,qId);


    askLayout = document.createElement('div');
    askLayout.setAttribute("class", "askLayoutDiv");
    setIdToelement(askLayout,qId);


    answerLayout = document.createElement('div');
    answerLayout.setAttribute("class", "answerLayoutDiv");
    setIdToelement(answerLayout,qId);

    const deleteQuestion = document.createElement('button');
    deleteQuestion.setAttribute("class", "deleteQuestionBtn");
    deleteQuestion.textContent = "delete";
    setIdToelement(deleteQuestion,qId);

    table.appendChild(toolLayout);
    table.appendChild(askLayout);
    table.appendChild(answerLayout);
    table.appendChild(deleteQuestion);
    deleteQuestion.addEventListener('click', deleteSelectedQuestion, false);
}
function prpareTheTools(table,qId) {
    console.log("iam prepareing the tools");
    /*====================================================================================== */
    // creating the elements 

    const addImgBtn = document.createElement('button');
    addImgBtn.innerHTML = "<i class=\"fas fa-image\"> Image</i>";
    addImgBtn.setAttribute("class", "toolBtn");
    setIdToelement(addImgBtn,qId);
    setTypeToEle(addImgBtn,"type","img");
    
    const addTextBtn = document.createElement('button');
    addTextBtn.innerHTML = "<i class=\"fas fa-font\"> Text</i>";
    addTextBtn.setAttribute("class", "toolBtn");
    setIdToelement(addTextBtn,qId);
    setTypeToEle(addTextBtn,"type","txt");

    var a1 = document.createElement('a');
    a1.href = "https://www.codecogs.com/latex/eqneditor.php";
    a1.target = "_blank";
    setIdToelement(a1,qId);
    a1.target = "_blank";
    setTypeToEle(a1,"type","equation");


    const addEquationBtn = document.createElement('button');
    addEquationBtn.innerHTML = "<i class=\"fas fa-calculator\"> Equation</i>";
    addEquationBtn.setAttribute("class", "toolBtn");
    a1.appendChild(addEquationBtn);
    setIdToelement(addEquationBtn,qId);
    setTypeToEle(addEquationBtn,"type","equation");
/* for next virsion 
    const addVoiceBtn = document.createElement('button');
    addVoiceBtn.innerHTML = "<i class=\"fas fa-microphone\"> Voice</i>";
    addVoiceBtn.setAttribute("class", "toolBtn voiceRecorder");
    //addVoiceBtn.setAttribute("data-recording",'');
    setIdToelement(addVoiceBtn,qId);
    setTypeToEle(addVoiceBtn,"type","audio");
*/
    const chooseType = document.createElement('select');
    chooseType.setAttribute('class', "answerMenu");
    setIdToelement(chooseType,qId);

    //****************************************************************************** */

    const option0 = document.createElement('option');
    option0.setAttribute('value', "");
    option0.textContent = "Choose Type : ";

    const option1 = document.createElement('option');
    option1.setAttribute('value', '1');
    option1.textContent = "true or false";

    const option2 = document.createElement('option');
    option2.setAttribute('value', '2');
    option2.textContent = " choose one ";

    const option3 = document.createElement('option');
    option3.setAttribute('value', '3');
    option3.textContent = "choose more ";

    const option4 = document.createElement('option');
    option4.setAttribute('value', '4');
    option4.textContent = "text";

    const option5 = document.createElement('option');
    option5.setAttribute('value', '5');
    option5.textContent = "file";

    const option6 = document.createElement('option');
    option6.setAttribute('value', '6');
    option6.textContent = "matchig";

    chooseType.appendChild(option0);
    chooseType.appendChild(option1);
    chooseType.appendChild(option2);
    chooseType.appendChild(option3);
    chooseType.appendChild(option4);
    chooseType.appendChild(option5);
    chooseType.appendChild(option6);

    table.appendChild(addImgBtn);
    table.appendChild(addTextBtn);
    table.appendChild(a1);
    // table.appendChild(addEquationBtn);
    //table.appendChild(addVoiceBtn);
    table.appendChild(chooseType);
    /*========================================================================================*/
    // event listners  
    chooseType.addEventListener('change',
        (event) => {
            var s = chooseType.options[chooseType.selectedIndex].text;
            const ele = event.currentTarget;
            console.log("ele : ");
            console.log(ele);
            setTypeToQuestionObj(ele.dataset.qid,s);
            let questionId = ele.dataset.qid;
            if (s + "" === "choose one") {
                emptyQuestionArray(questionId);
                setLength(4,questionId);
                console.log('Done');
                const elElement = event.currentTarget;
                const elParent = elElement.parentNode;
                const elUncle = elParent.nextSibling;
                const elUncle2 = elUncle.nextSibling;
                elUncle2.innerHTML = "";
                typeListener.chooseone(elUncle2,questionId);

            }
            else if (s + "" === "true or false") {
                emptyQuestionArray(questionId);
                setLength(2,questionId);
                const elElement = event.currentTarget;
                const elParent = elElement.parentNode;
                const elUncle = elParent.nextSibling;
                const elUncle2 = elUncle.nextSibling;
                elUncle2.innerHTML = "";
                typeListener.true_or_false(elUncle2,questionId);   
            }
            else if (s + "" === "choose more") {
                emptyQuestionArray(questionId);
                setLength(4,questionId);
                const elElement = event.currentTarget;
                const elParent = elElement.parentNode;
                const elUncle = elParent.nextSibling;
                const elUncle2 = elUncle.nextSibling;
                elUncle2.innerHTML = "";
                typeListener.choosemore(elUncle2,questionId);
            }
            else if (s + "" === "text") {
                emptyQuestionArray(questionId);
                const elElement = event.currentTarget;
                const elParent = elElement.parentNode;
                const elUncle = elParent.nextSibling;
                const elUncle2 = elUncle.nextSibling;
                elUncle2.innerHTML = "";
                typeListener.text(elUncle2,questionId);
            }
            else if (s + "" === "file") {
                emptyQuestionArray(questionId);
                const elElement = event.currentTarget;
                const elParent = elElement.parentNode;
                const elUncle = elParent.nextSibling;
                const elUncle2 = elUncle.nextSibling;
                elUncle2.innerHTML = "";
                typeListener.upload_file(elUncle2,questionId);
            }
            else if (s + "" === "matchig") {
                emptyQuestionArray(questionId);
                setLength(2,questionId);
                const elElement = event.currentTarget;
                const elParent = elElement.parentNode;
                const elUncle = elParent.nextSibling;
                const elUncle2 = elUncle.nextSibling;
                elUncle2.innerHTML = "";
                typeListener.matching(elUncle2,questionId);
            }

            console.log(chooseType.value);
        }
        , false);
    addImgBtn.addEventListener('click', (event) => {
        let  fID =  handleFragments(event);
        let id = event.currentTarget.dataset.qid;
        const form = document.createElement("form");
        form.method="post";
        form.enctype="multipart/form-data";
        form.action="/";
        setIdToelement(form,id);

        const input1 = document.createElement("input");
        input1.type="file";
        input1.name="filename";
        setIdToelement(input1,id);
        

        const input2 = document.createElement("input");
        input2.type="submit";
        input2.value="upload";
        input2.setAttribute("class","upload");
        setIdToelement(input2,id);
        
        
        form.appendChild(input1);
        form.appendChild(input2);
       
        form.onsubmit=function(event)
        {
            let filename =event.currentTarget.firstChild.value.split('\\')[2];
            let id = event.currentTarget.dataset.qid;
            let path = "/uploads/"+filename;
            console.log(path);

            setFilePathInQuestion(id,path,fID);
          
            
        };
        addElementToEventUncle(event, form);


    
         /*
        addElementToEventUncle(event, realFileBtn);
        // 
        addElementToEventUncle(event, customTxt);
        */
    }, false);
    addTextBtn.addEventListener('click', (event) => {
       let fId =  handleFragments(event);
       let qId = event.currentTarget.dataset.qid;

        const txt = document.createElement('input');
        txt.type = "text";
        setTypeToEle(txt,"fId",fId);
        setTypeToEle(txt,"qId",qId);

        addElementToEventUncle(event, txt);
        txt.oninput =onInputChange;
        
    }, false);
    a1.addEventListener('click', () => {
        let fId =  handleFragments(event);
        let qId = event.currentTarget.dataset.qid;

        var txtArea=document.createElement('textarea');
        setTypeToEle(txtArea,"fId",fId);
        setTypeToEle(txtArea,"qId",qId);
        txtArea.oninput =onInputChange;

        addElementToEventUncle(event, txtArea);
        var btnOk=document.createElement('button');
        btnOk.textContent="OK";
        addElementToEventUncle(event, btnOk);
        btnOk.addEventListener('click', () => {
            txtArea.classList.add('hidden');
            btnOk.classList.add('hidden');
            const p1=document.createElement('p');
            p1.innerHTML = txtArea.value;
            const elElement = event.currentTarget;
            const elParent = elElement.parentNode;
            elParent.appendChild(p1);
            //addElementToEventUncle(event, p1);
           // askLayout.innerHTML=askLayout.innerHTML+txtArea.value;
        }, false);

    }, false);
/* for next virsion 
    addVoiceBtn.addEventListener('click', () => {

        // console.log("event is fired");
        let urlStr= record(event, addVoiceBtn);
        if(urlStr!="")
        {
            let fId =  handleFragments(event);
            let qId = event.currentTarget.dataset.qid;

            setAudioURL(qId,fId,urlStr);
        }
        
      
    }, false);*/
}
/*
function record(event, addVoiceBtn) {
    let urlStr="";
    //  console.log("iam inside recording function");
    // appending the record 
    // create the recorder object with one properity and three functions 
    // Prepare the record button
    // Initialize the recorder
    myRecorder.init();
    // Get the button state 
    var buttonState = addVoiceBtn.getAttribute('data-recording');
    //console.log("button state : "+buttonState);
    // Toggle
    if (!buttonState) {
        addVoiceBtn.setAttribute('data-recording', true);
        myRecorder.start();
        addVoiceBtn.textContent = "Recording ...";
       
     
    }
    else {
        addVoiceBtn.setAttribute('data-recording', '');
        urlStr  = myRecorder.stop(event);
        addVoiceBtn.innerHTML = "<i class=\"fas fa-microphone\"> Voice</i>";
       
    }

    return urlStr;
}*/
function addElementToEventUncle(event, elAttachment) {
    const elElement = event.currentTarget;
    const elParent = elElement.parentNode;
    const elUncle = elParent.nextSibling;
    elUncle.appendChild(elAttachment);
}
//step 1 : create a function that generate uniqe id 
function createUniqeId()
{
        let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
        }
        //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
//console.log(createUniqeId());
//************************************************************* */
//step 2 : 1. matchingStructure function
function matchcingStruture()
{
    // create new question 
    let q = new Question();
    let qId=createUniqeId();
    q.setQuestionId(qId);
    exam.addQuestion(q);
    console.log(exam);
    return qId;
}
//************************************************************* */
function handleIt(event)
{
    let elElement = event.currentTarget;
    //element.data-id
    //element.data-qId 
    let  Id= elElement.dataset.Id;
    let qId= elElement.dataset.qId;
}
function addQuestion()
{
    console.log("iam inside addQuestion function");
    let qId = matchcingStruture();
    // get the body element node from the dom 
    const body = document.getElementById('examBody');
    // create new div element 
    const questionDiv = document.createElement("div");

    setIdToelement(questionDiv,qId);


    //set a class attribute
    questionDiv.setAttribute("class", "questionDiv");
    // appending the div to the parent 
    body.appendChild(questionDiv);
    // arrange the table for bulid the question 
    arrangeTheTable(questionDiv , qId);
    // increase the counter 1 
    increaseCounter();
}
function setIdToelement(ele,id)
{
    var att = document.createAttribute("data-qId"); 
    att.value = id;  
    ele.setAttributeNode(att); 
}
function setTypeToQuestionObj(qId,type)
{   
    
    for(let i = 0 ; i<exam.examQuestions.length ;i++)
    {
        if(exam.examQuestions[i].question_number==qId)
        {
            exam.examQuestions[i].setQuestionType(type);  
        }
    }
    console.log(exam);
}
function handleFragments(event)
{
    let qId = event.currentTarget.dataset.qid;
    let type = event.currentTarget.dataset.type;
    let qF = new QuestionFragment();
    let fId=createUniqeId();
    qF.setFragmentId(fId);
    qF.setFragmentQuestionId(qId);
    qF.setFragmetType(type);

    //add fragment to specific question 
    for(let i = 0 ; i<exam.examQuestions.length ;i++)
    {
        if(exam.examQuestions[i].question_number==qId)
        {
            exam.examQuestions[i].addQuestionFragment(qF); 
        }
    }
    console.log(exam);

    return fId;
}
function setTypeToEle(ele,type,value)
{
    var att = document.createAttribute("data-"+type); 
    att.value = value;  
    ele.setAttributeNode(att);   
}
function onInputChange(event)
{
    //  هنا هيشوف مين اللي اتكتب فيها و يضيفه فال فراجمنت بتاعها 

    let fid = event.currentTarget.dataset.fid;
    let qId =  event.currentTarget.dataset.qid;
    let value = event.currentTarget.value;

    for(let i = 0 ; i<exam.examQuestions.length ;i++)
    {
        if(exam.examQuestions[i].question_number==qId)
        {
            for(let j =0;j<exam.examQuestions[i].question_body.length;j++)
            {
                if(exam.examQuestions[i].question_body[j].id==fid)
                {
                    exam.examQuestions[i].question_body[j].setFragmentValue(value);
                }
            }
        }
    }
    console.log(exam);

}
function setLength(length,qId)
{
    for(let i = 0 ; i<exam.examQuestions.length ;i++)
    {
        if(exam.examQuestions[i].question_number==qId)
        {
            exam.examQuestions[i].setArrayLength(length);  
        }
    }
    console.log(exam);
}
function emptyQuestionArray(qId)
{
    for(let i = 0 ; i<exam.examQuestions.length ;i++)
    {
        if(exam.examQuestions[i].question_number==qId)
        {
            exam.examQuestions[i].emptyArrray();  
        }
    }
    console.log(exam);
}
function addOptionToAnswerBody(qId,index,option)
{
    for(let i = 0 ; i<exam.examQuestions.length ;i++)
    {
        if(exam.examQuestions[i].question_number==qId)
        {
            exam.examQuestions[i].answer_body[index]=option;
        }
    }
    console.log(exam); 
}
function getOption(event)
{   console.log("iam inside get option function ");
    let ele = event.currentTarget;
    let QId = ele.dataset.qid;
    let index = ele.dataset.index;
    let option = ele.value;
    addOptionToAnswerBody(QId,index,option);
}
function createMatchingArrays(qId,len1,len2)
{
    for(let i = 0 ; i<exam.examQuestions.length ;i++)
    {
        if(exam.examQuestions[i].question_number==qId)
        {
            exam.examQuestions[i].createAndPush(len1,len2);
        }
    }
    console.log(exam); 
}
function addMactchOption(event)
{
    let ele = event.currentTarget;
    let qId= ele.dataset.qid;
    let arrNum = ele.dataset.arr;
    let index = ele.dataset.index;
    let value = ele.value;
    for(let i = 0 ; i<exam.examQuestions.length ;i++)
    {
        if(exam.examQuestions[i].question_number==qId)
        {
            exam.examQuestions[i].answer_body[arrNum][index]=value;
        }
    }
    console.log(exam); 

}
function setFilePathInQuestion(id,path,fId)
{
    for(let i = 0 ; i<exam.examQuestions.length ;i++)
    {
        if(exam.examQuestions[i].question_number==id)
        {
            for(let j=0;j<exam.examQuestions[i].question_body.length;j++)
            {
                if(exam.examQuestions[i].question_body[j].id==fId)
                {
                    exam.examQuestions[i].question_body[j].setFragmentValue(path);
                }
            }
        }
    }
    console.log(exam);   
}
function deleteQuestionObj(qId)
{
    //let tempArr;
    for(let i = 0 ; i<exam.examQuestions.length ;i++)
    {
        if(exam.examQuestions[i].question_number==qId)
        {
            exam.examQuestions.splice(i, 1);
        }
    }
    console.log(exam);     
}
/*  for next virsion 
function setAudioURL(id,fId,urlStr)
{
    for(let i = 0 ; i<exam.examQuestions.length ;i++)
    {
        if(exam.examQuestions[i].question_number==id)
        {
            for(let j=0;j<exam.examQuestions[i].question_body.length;j++)
            {
                if(exam.examQuestions[i].question_body[j].id==fId)
                {
                    exam.examQuestions[i].question_body[j].setFragmentValue(urlStr);
                }
            }
        }
    }
    console.log(exam);   
}
*/
let finishBtn =document.getElementById("finishQuestionBtn");
finishBtn.addEventListener("click",function()
{   
    console.log(exam);
    let dataObject =
        {
            fileName:exam_info.File,
            examObj:exam
        };
    backEndService.saveExam(dataObject).then((response)=>{
        console.log("response of save exam :  "+response);
        console.log("Thanks Doctor");
        if(response=="done")
        {
            window.location.href = "complete.html";
        } 

    });
   

});



addQuestionBtn.addEventListener('click', addQuestion, false);
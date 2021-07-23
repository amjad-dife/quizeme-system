exam_info=
{
    infoDiv:document.getElementById('infoDiv'),
    File:"",
    jsobject: "asd",
    getFile:(fileName)=>
    {
        console.log("hi ");
        let myRequest = new XMLHttpRequest();
        myRequest.onreadystatechange = ()=>
        {
            if ( myRequest.readyState === 4 &&  myRequest.status === 200) 
            {         
                console.log("hi 2");
                exam_info.jsobject= JSON.parse(myRequest.responseText);
                console.log(exam_info.jsobject);
                exam_info.get_info_Exam(exam_info.infoDiv);
                
            }
        };
        myRequest.open("GET", fileName, true);
        myRequest.send();
    },
    get_info_Exam: (div_Choices) => {
        console.log("Get Info");
        examSubject1 = document.createElement('p');
        // examSubject1.textContent = "Subject :- "+exam_info.jsobject.examInfo.examSubject;
        examSubject1.textContent = "Subject";
        examSubject1INPUT =document.createElement('input');
        examSubject1INPUT.type='text';
        examSubject1INPUT.classList.add('exam_info_text1');
        examSubject1.classList.add('exam_info_par');
        div_Choices.appendChild(examSubject1);
        div_Choices.appendChild(examSubject1INPUT);
        div_Choices.appendChild(document.createElement('br'));
        examTime = document.createElement('p');
        // examTime.textContent = "Time :- "+exam_info.jsobject.examInfo.examTime;
        examTime.textContent = "Time ";
        examTime.classList.add('exam_info_par');
        examTimeINPUT =document.createElement('input');
        examTimeINPUT.type='text';
        examTimeINPUT.classList.add('exam_info_text2');
        div_Choices.appendChild(examTime);
        div_Choices.appendChild(examTimeINPUT);
        div_Choices.appendChild(document.createElement('br'));
        examCreator = document.createElement('p');
        // examCreator.textContent = "Creator :- "+exam_info.jsobject.examInfo.examCreator;
        examCreator.textContent = "Creator";
        examCreator.classList.add('exam_info_par');
        examCreatorINPUT =document.createElement('input');
        examCreatorINPUT.type='text';
        examCreatorINPUT.classList.add('exam_info_text3');
        div_Choices.appendChild(examCreator);
        div_Choices.appendChild(examCreatorINPUT);
        div_Choices.appendChild(document.createElement('br'));
        facultyName = document.createElement('p');
        // facultyName.textContent = "Faculty :- "+exam_info.jsobject.examInfo.facultyName;
        facultyName.textContent = "Faculty ";
        facultyName.classList.add('exam_info_par');
        facultyNameINPUT =document.createElement('input');
        facultyNameINPUT.type='text';
        facultyNameINPUT.classList.add('exam_info_text4');
        div_Choices.appendChild(facultyName);
        div_Choices.appendChild(facultyNameINPUT);
        div_Choices.appendChild(document.createElement('br'));
        universityName = document.createElement('p');
        // universityName.textContent = "University :- "+exam_info.jsobject.examInfo.universityName;
        universityName.textContent = "University ";
        universityName.classList.add('exam_info_par');
        universityNameINPUT =document.createElement('input');
        universityNameINPUT.type='text';
        universityNameINPUT.classList.add('exam_info_text5');
        div_Choices.appendChild(universityName);
        div_Choices.appendChild(universityNameINPUT);
        div_Choices.appendChild(document.createElement('br'));
        fileName = document.createElement('p');
        fileName.textContent = "fileName  ";
        fileName.classList.add('exam_info_par');
        fileNameINPUT =document.createElement('input');
        fileNameINPUT.type='text';
        fileNameINPUT.classList.add('exam_info_text6');
        div_Choices.appendChild(fileName);
        div_Choices.appendChild(fileNameINPUT);
        div_Choices.appendChild(document.createElement('br'));

        btnCheck = document.createElement('button');
        btnCheck.textContent = "create";
        btnCheck.classList.add('btn_Check');
     

        div_Choices.appendChild(btnCheck);
        btnCheck.addEventListener('click',btnCheckMethod);
        function btnCheckMethod(){
            ES=examSubject1INPUT.value;
            // examSubject1INPUT.value="";
            // examSubject1INPUT.disabled=true;
            console.log(ES);
            // console.log(examSubject1INPUT.value);

            ET=examTimeINPUT.value;
            // examTimeINPUT.value="";
            // examTimeINPUT.disabled=true;
            console.log(ET);

            EC=examCreatorINPUT.value;
            // examCreatorINPUT.value="";
            // examCreatorINPUT.disabled=true;
            console.log(EC);

            FN=facultyNameINPUT.value;
            
            // facultyNameINPUT.value="";
            // facultyNameINPUT.disabled=true;
            console.log(FN);

            UN=universityNameINPUT.value;
            // universityNameINPUT.value="";
            // universityNameINPUT.disabled=true;
            console.log(UN);
            
            console.log(exam.examInfo);
            FIN=fileNameINPUT.value;
            exam_info.File=FIN+".json";
            console.log(FIN);
            // fileNameINPUT.value="";
            // fileNameINPUT.disabled=true;

            exam.setExamInfo(ES,ET,EC,FN,UN);
            console.log(exam.examQuestions);
            // btnCheck.removeEventListener('click',btnCheckMethod);
        }



    }

}


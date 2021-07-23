appendder =
{
    jsobject: "asd",
    currentIndex: 0,
    getFile: (fileName) => {
        console.log("hi ");
        let myRequest = new XMLHttpRequest();
        myRequest.onreadystatechange = () => {
            if (myRequest.readyState === 4 && myRequest.status === 200) {
                console.log("hi 2");
                appendder.jsobject = JSON.parse(myRequest.responseText);
                console.log(appendder.jsobject);

            }
        };
        myRequest.open("GET", fileName, true);
        myRequest.send();
    },
    show_Exam_info: (div_Choices) => {
        console.log("Get Info");
        let div = document.createElement("div");

        examSubject1 = document.createElement('p');
        examSubject1.innerHTML = '<span class="larger">Subject : </span>' + appendder.jsobject.examInfo.examSubject;
        examSubject1.classList.add('exam_info_par1');
        div.appendChild(examSubject1);
        //div_Choices.appendChild(examSubject1);
        examTime = document.createElement('p');
        examTime.innerHTML = '<span class="larger">Time   : </span>' + appendder.jsobject.examInfo.examTime;
        examTime.classList.add('exam_info_par1');
        div.appendChild(examTime);
        // div_Choices.appendChild(examTime);
        examCreator = document.createElement('p');
        examCreator.innerHTML = '<span class="larger">Creator   : </span>' + appendder.jsobject.examInfo.examCreator;
        examCreator.classList.add('exam_info_par1');
        div.appendChild(examCreator);
        //div_Choices.appendChild(examCreator);
        facultyName = document.createElement('p');
        facultyName.innerHTML = '<span class="larger">Faculty    : </span>' + appendder.jsobject.examInfo.facultyName;
        facultyName.classList.add('exam_info_par1');
        div.appendChild(facultyName);
        //div_Choices.appendChild(facultyName);
        universityName = document.createElement('p');
        universityName.innerHTML = '<span class="larger">University : </span>' + appendder.jsobject.examInfo.universityName;
        universityName.classList.add('exam_info_par1');
        div.appendChild(universityName);
        //div_Choices.appendChild(universityName);

        s1 = document.createElement('span');
        s1.setAttribute("class", "timeSpan");
        var arr = appendder.jsobject.examInfo.examTime.split(' ');
        var h = Number(arr[0]) - 1;
        s2 = document.createElement('span');
        s2.setAttribute("class", "timeSpan");
        s2.textContent = ":";
        s3 = document.createElement('span');
        s3.setAttribute("class", "timeSpan");
        s4 = document.createElement('span');
        s4.textContent = ":";
        s4.setAttribute("class", "timeSpan");
        s5 = document.createElement('span');
        s5.setAttribute("class", "timeSpan");
        // timer
        var m = 59;
        var s = 59;
        var time = setInterval(function () { timer() }, 1000);
        function timer() {
            s--;
            if (s == -1) {
                m--;
                s = 59
                if (m == -1) {
                    h--;
                    m = 59;
                    if (h == -1) {
                        h = 0;
                        m = 0;
                        s = 0;
                        clearInterval(time);
                        console.log("answers is submited");
                        appendder.save(fn, student1).then((response) => {
                            console.log("student answers :" + response);
                            if (response == "done") {
                                window.location.href = "complete.html";
                            }
                        });


                    }
                }
            }
            s1.textContent = h;
            s3.textContent = m;
            s5.textContent = s;
        }
        // end timer
        /*
        div_Choices.appendChild(s1);
        div_Choices.appendChild(s2);
        div_Choices.appendChild(s3);
        div_Choices.appendChild(s4);
        div_Choices.appendChild(s5);
        */
        div.appendChild(s1);
        div.appendChild(s2);
        div.appendChild(s3);
        div.appendChild(s4);
        div.appendChild(s5);
        div_Choices.appendChild(div);
    },
    localQuestion: (questionLiayout) => {

        for (let k = 0; k < appendder.jsobject.examQuestions.length; k++) {
            //console.log(appendder.jsobject.examQuestions[appendder.currentIndex]);
            appendder.addQuestionData(questionLiayout, appendder.jsobject.examQuestions[appendder.currentIndex]);
            appendder.currentIndex = appendder.currentIndex + 1;
        }


    },
    appendQuestion: (questionLiayout) => {

        if (appendder.currentIndex < appendder.jsobject.examQuestions.length) {
            console.log(appendder.jsobject.examQuestions[appendder.currentIndex]);

            appendder.addQuestionData(questionLiayout, appendder.jsobject.examQuestions[appendder.currentIndex]);
            appendder.currentIndex = appendder.currentIndex + 1;
        }


    },
    hiddenSelector:(questionLiayout)=>
    {
        let arr = questionLiayout.childNodes;
        for(let ele =0;ele<arr.length;ele++)
        {   
            if(ele!=0)
            {
                arr[ele].classList.add("hidden");
            }
           
        }
    },
    showIndex:(index,questionLiayout)=>{
        console.log(index);

        let arr = questionLiayout.childNodes;
        for(let ele =0;ele<arr.length;ele++)
        {   
            if(ele==index)
            {
                arr[ele].classList.remove("hidden");
            }
            else
            {
                arr[ele].classList.add("hidden");
            }
        }   
 
    },
    nextpreQuestion: (questionLiayout) =>
    {
         for (let k = 0; k < appendder.jsobject.examQuestions.length; k++) 
         {
             //console.log(appendder.jsobject.examQuestions[appendder.currentIndex]);
             appendder.addQuestionData(questionLiayout, appendder.jsobject.examQuestions[appendder.currentIndex]);
             appendder.currentIndex = appendder.currentIndex + 1;
         }
        appendder.hiddenSelector(questionLiayout);
        appendder.currentIndex=0;
      //  appendder.addQuestionData(questionLiayout, appendder.jsobject.examQuestions[0]);

    },
    next: (questionLiayout) => {
        appendder.currentIndex = appendder.currentIndex + 1;
        
        if (appendder.currentIndex < appendder.jsobject.examQuestions.length) 
        {
            appendder.showIndex(appendder.currentIndex ,questionLiayout);
           
            cnt.value = `${appendder.currentIndex+1}`;
             /*
            // console.log(questionLiayout.innerHTML);
            questionLiayout.innerHTML = " ";
            // questionLiayout.classList.add('hidden');
            appendder.addQuestionData(questionLiayout, appendder.jsobject.examQuestions[appendder.currentIndex]);
            */
        } else { appendder.currentIndex = appendder.currentIndex - 1; }
    },
    prev: (questionLiayout) => {

        appendder.currentIndex = appendder.currentIndex - 1;
        if (appendder.currentIndex > -1) 
        {
            appendder.showIndex(appendder.currentIndex ,questionLiayout);
           
         
            cnt.value = `${appendder.currentIndex+1}`;
            /*
            questionLiayout.innerHTML = " ";
            // questionLiayout.classList.add('hidden');
            appendder.addQuestionData(questionLiayout, appendder.jsobject.examQuestions[appendder.currentIndex]);
            */
        }
        else { appendder.currentIndex = appendder.currentIndex + 1; }

    },
    handleFragment: (obj) => {
        let aF = new answerFragment();
        aF.setQuestionId(obj.question_number);
        aF.setQuestionType(obj.type);
        student1.addStudentAnswer(aF);
        return aF;
        //af.setAnswerValue()
    },
    addValueToFragmentWithId: (qID, value) => {
        console.log("yes i am here");
        for (let a = 0; a < student1.studentAnswers.length; a++) {
            // console.log(a);
            console.log("yes i am in for");
            if (student1.studentAnswers[a].QuestionId == qID) {
                console.log("yes iam in condition");
                student1.studentAnswers[a].setAnswerValue(value);
            }
        }
    },
    addQuestionData: (questionLayout, obj) => {



        let af = appendder.handleFragment(obj);
        console.log(af);
        let type = obj.type;
        //console.log(type);
        // answerFrag.setQuestionType(type);
        // console.log(answerFrag);
        // student1.addStudentAnswer(answerFrag);
        // console.log(student1);
        let questionLayoutDiv = document.createElement("div");

        questionLayoutDiv.setAttribute("class", "questionDivStudent");
        questionLayout.setAttribute("class", "questionDiv");

        let qcontent = document.createElement("div");
        qcontent.setAttribute("class", "askLayoutDiv");

        let answerContent = document.createElement("div");

        // questionLayout.appendChild(qcontent); 
        for (let i = 0; i < obj.question_body.length; i++) {
            switch (obj.question_body[i].type) {
                case "img":
                    var img = document.createElement('img');
                    img.src = obj.question_body[i].value;
                    img.width = 300;
                    img.height = 300;
                    qcontent.appendChild(img);
                    break;
                case "audio":
                    var audio = document.createElement('audio');
                    audio.src = obj.question_body[i].src;
                    qcontent.appendChild(audio);
                    break;
                case "txt":
                    var txt = document.createElement('p');
                    txt.textContent = obj.question_body[i].value;
                    qcontent.appendChild(txt);
                    break;
                case "equation":
                    var txt = document.createElement('p');
                    txt.innerHTML = obj.question_body[i].value;
                    qcontent.appendChild(txt);
                    break;
                default:
                    console.log("no type is suite ");
            }

        }
        //------------------------------------------------------


        // questionLayout.appendChild(answerContent);
        switch (obj.type) {
            case "choose one":
                var choise = document.createElement("form");
                choise.innerText = "";

                for (let j = 0; j < obj.answer_body.length; j++) {
                    r = document.createElement("input");
                    r.type = "radio";
                    r.name = obj.question_number;
                    console.log(obj.question_number + ": " + obj.answer_body[j]);
                    r.value = obj.answer_body[j];
                    var att = document.createAttribute("data-qId");
                    att.value = obj.question_number;
                    r.setAttributeNode(att);

                    l = document.createElement("label");
                    l.textContent = obj.answer_body[j];

                    r.onclick = function (event) {
                        console.log(event.currentTarget);
                        console.log(event.currentTarget.value);
                        console.log(event.currentTarget.dataset.qid);
                        appendder.addValueToFragmentWithId(event.currentTarget.dataset.qid, event.currentTarget.value);
                        console.log(student1);

                    }
                    choise.appendChild(r);
                    choise.appendChild(l);


                    answerContent.appendChild(choise);
                    let line = document.createElement("br");
                    choise.appendChild(line);
                }
                break;
            case "choose more":
                var choise = document.createElement("form");
                choise.innerText = "";
                let arr = [];
                let arr2 = [];
                for (let j = 0; j < obj.answer_body.length; j++) {

                    r = document.createElement("input");
                    r.type = "checkBox";
                    r.name = obj.question_number;
                    console.log(obj.question_number + ": " + obj.answer_body[j]);
                    r.value = obj.answer_body[j];
                    var att = document.createAttribute("data-qId");
                    att.value = obj.question_number;
                    r.setAttributeNode(att);
                    r.onclick = function (event) {
                        // console.log(event.currentTarget);
                        if (event.currentTarget.checked) {
                            console.log("now iam checked");
                            console.log(event.currentTarget);
                            console.log(event.currentTarget.value);
                            console.log(event.currentTarget.dataset.qid);
                            arr.push(event.currentTarget.value);
                            // console.log(arr);
                        }
                        else {
                            console.log("i was checked but now iam not");
                            for (ele of arr) {
                                if (ele !== event.currentTarget.value) {
                                    arr2.push(ele);
                                }
                            }
                            arr = arr2;

                            arr2 = [];
                        }
                        // arr=arr2;
                        console.log(arr);
                        appendder.addValueToFragmentWithId(event.currentTarget.dataset.qid, arr);
                        console.log(student1);
                    }
                    l = document.createElement("label");
                    l.textContent = obj.answer_body[j];
                    choise.appendChild(r);
                    choise.appendChild(l);

                    let line = document.createElement("br");
                    choise.appendChild(line);
                    answerContent.appendChild(choise);
                }
                break;
            case "true or false":
                var choise = document.createElement("form");
                choise.innerText = "";

                for (let j = 0; j < obj.answer_body.length; j++) {
                    r = document.createElement("input");
                    r.type = "radio";
                    r.name = obj.question_number;
                    console.log(obj.question_number + ": " + obj.answer_body[j]);
                    r.value = obj.answer_body[j];
                    var att = document.createAttribute("data-qId");
                    att.value = obj.question_number;
                    r.setAttributeNode(att);

                    l = document.createElement("label");
                    l.textContent = obj.answer_body[j];

                    r.onclick = function (event) {
                        console.log(event.currentTarget);
                        console.log(event.currentTarget.value);
                        console.log(event.currentTarget.dataset.qid);
                        appendder.addValueToFragmentWithId(event.currentTarget.dataset.qid, event.currentTarget.value);
                        console.log(student1);
                    }
                    choise.appendChild(r);
                    choise.appendChild(l);

                    let line = document.createElement("br");
                    choise.appendChild(line);

                    answerContent.appendChild(choise);


                }
                break;
            case "file":
                const form = document.createElement("form");
                form.method = "post";
                form.enctype = "multipart/form-data";
                form.action = "/";
                const input1 = document.createElement("input");
                input1.type = "file";
                input1.name = "filename";

                const input2 = document.createElement("input");
                input2.type = "submit";
                input2.value = "upload";


                var att = document.createAttribute("data-qId");
                att.value = obj.question_number;
                form.appendChild(input1);
                form.appendChild(input2);
                form.setAttributeNode(att);
                form.onsubmit = function (event) {
                    let filename = event.currentTarget.firstChild.value.split('\\')[2];
                    console.log(filename);
                    appendder.addValueToFragmentWithId(event.currentTarget.dataset.qid, "/uploads/" + filename);
                    console.log(student1);
                };
                answerContent.appendChild(form);
                break;
            case "text":
                f = document.createElement("textarea");
                var att = document.createAttribute("data-qId");
                att.value = obj.question_number;
                f.setAttributeNode(att);
                f.oninput = function (event) {
                    //console.log("iam here in text  area")  
                    console.log(event.currentTarget.value);
                    console.log(event.currentTarget.dataset.qid);
                    appendder.addValueToFragmentWithId(event.currentTarget.dataset.qid, event.currentTarget.value);
                    console.log(student1);
                }
                answerContent.appendChild(f);
                break;
            case "matchig":
                let arr3 = [obj.answer_body[1].length];
                var p1 =document.createElement('p');
                p1.textContent="The First column";
                answerContent.appendChild(p1);
                for (let i=0; i<obj.answer_body[0].length;i++)
                {
                    n = document.createElement("lable");
                        n.innerHTML = i + 1 + " - ";
                        answerContent.appendChild(n);
                        v = document.createElement("lable");
                        v.innerHTML = obj.answer_body[0][i];
                        answerContent.appendChild(v);
                        answerContent.appendChild(document.createElement('br'));
                }
                answerContent.appendChild(document.createElement('br'));
                var p2 =document.createElement('p');
                p2.textContent="The Second column";
                answerContent.appendChild(p2);
                for (let j=0; j<obj.answer_body[1].length;j++)
                {
                    n = document.createElement("lable");
                        n.innerHTML = j + 1 + " - ";
                        answerContent.appendChild(n);
                        v = document.createElement("lable");
                        v.innerHTML = obj.answer_body[1][j];
                        answerContent.appendChild(v);
                        answerContent.appendChild(document.createElement('br'));
                }
                answerContent.appendChild(document.createElement('br'));
                for (let o=0; o<obj.answer_body[0].length;o++)
                {
                    n = document.createElement("lable");
                        n.innerHTML = o + 1 + " - ";
                        answerContent.appendChild(n);
                        f = document.createElement("input");
                        f.type = "text";
                        f.width = 20;
                        f.margin = 4;
                        var att = document.createAttribute("data-qId");
                        att.value = obj.question_number;
                        f.setAttributeNode(att);
                        answerContent.appendChild(f);
                        answerContent.appendChild(document.createElement('br'));
                        f.oninput = function (event) {
                            //console.log("iam here in text  area")  
                            //console.log(event.currentTarget.value);
                            arr3[o] = event.currentTarget.value;
                            console.log(event.currentTarget.dataset.qid);
                            console.log(arr3);
                            appendder.addValueToFragmentWithId(event.currentTarget.dataset.qid, arr3);
                            console.log(student1);
                        }
                        
                    }
                break;
        }

        questionLayoutDiv.appendChild(qcontent);
        questionLayoutDiv.appendChild(answerContent);
        questionLayout.appendChild(questionLayoutDiv);
    },
    save: (fname, stud) => {
        let promise4 = new Promise((resolve, reject) => {
            let sObj =
            {
                fileName: fname,
                student: stud
            }
            backEndService.saveStudent(sObj).then((response) => { resolve(response); });
        });
        return promise4;
    }
}
let fn = "student1.json";
let submitLayoutPage = document.getElementById('submitLayoutInPage');
let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener("click", function () {
    console.log("answers is submited");
    appendder.save(fn, student1).then((response) => {
        console.log("student answers :" + response);
        if (response == "done") {
            window.location.href = "complete.html";
        }
    });
});

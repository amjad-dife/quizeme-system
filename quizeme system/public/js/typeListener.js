typeListener =
{
   // arr:[],
    chooseone: (div_Choices,questionId) => 
    {
       // typeListener.arr=[];
        var addBtn = document.createElement('button');
        setTypeToEle(addBtn,"qId",questionId);
    
        addBtn.textContent = "+";
        addBtn.name = "+";
        addBtn.value = "+";
        addBtn.classList.add('fixedBtn1');
        var cnt = 0;
        div_Choices.appendChild(addBtn);
        let radiobtn;
        let textAns;
        addBtn.addEventListener('click', () => {
            if (cnt < 4) {
                radiobtn = document.createElement('input');
                radiobtn.type = "radio";
                radiobtn.name = "choOne";
                radiobtn.classList.add('inline');
                textAns = document.createElement('input');
                textAns.type = "text";
                setTypeToEle(textAns,"qid",questionId);
                setTypeToEle(textAns,"index",cnt);
                textAns.addEventListener("change",getOption);
                textAns.classList.add(('inline1'));
                /*
                btnCheck=document.createElement('button');
                btnCheck.textContent="Sure";
                */
                div_Choices.appendChild(radiobtn);
                div_Choices.appendChild(textAns);
               // div_Choices.appendChild(btnCheck);                
                div_Choices.appendChild(document.createElement('br'));
                // typeListener.arr.push("sds");
                // console.log(typeListener.arr);
                /*
                btnCheck.addEventListener('click',()=>{
                typeListener.arr.push(textAns.value);
                console.log(typeListener.arr);
                })*/
                cnt = cnt + 1;
            }
        }
        )
        // textAns.addEventListener('change',()=>{
        //     console.log(textAns.textContent);
        //     typeListener.arr.push(textAns.value);
        // console.log(typeListener.arr);
        // });
    },
    true_or_false: (div_Choices,questionId) => {
        //typeListener.arr=[];
        var addBtn = document.createElement('button');
        setTypeToEle(addBtn,"qId",questionId);
        addBtn.textContent = "+";
        addBtn.name = "+";
        addBtn.value = "+";
        addBtn.classList.add('fixedBtn1');
        var cnt = 0;

        div_Choices.appendChild(addBtn);

        addBtn.addEventListener('click', () => {
            if (cnt < 2) {
                radiobtn = document.createElement('input');
                radiobtn.type = "radio";
                radiobtn.name = "choOne";
                radiobtn.classList.add('inline');
                textAns = document.createElement('input');
                textAns.type = "text";
                setTypeToEle(textAns,"qid",questionId);
                setTypeToEle(textAns,"index",cnt);
                textAns.addEventListener("change",getOption);
               // btnCheck=document.createElement('button');
               // btnCheck.textContent="Sure";
                textAns.classList.add(('inline1'));
                div_Choices.appendChild(radiobtn);
                div_Choices.appendChild(textAns);
                //div_Choices.appendChild(btnCheck);
                div_Choices.appendChild(document.createElement('br'));
                cnt = cnt + 1;
               // console.log(q.type);
                /*
                btnCheck.addEventListener('click',()=>{
                    typeListener.arr.push(textAns.value);
                    console.log(typeListener.arr);
                    })*/
            }
        }
        )


    },
    choosemore: (div_Choices,questionId) => {
       // typeListener.arr=[];
        var addBtn = document.createElement('button');
        setTypeToEle(addBtn,"qId",questionId);
        addBtn.textContent = "+";
        addBtn.name = "+";
        addBtn.value = "+";
        addBtn.classList.add('fixedBtn1');
        var cnt = 0;

        div_Choices.appendChild(addBtn);

        addBtn.addEventListener('click', () => {
            if (cnt < 4) {
                checkbtn = document.createElement('input');
                checkbtn.type = "checkbox";
                checkbtn.name = `${cnt + 1}`;
                checkbtn.classList.add('inline');
                textAns = document.createElement('input');
                textAns.type = "text";
                setTypeToEle(textAns,"qid",questionId);
                setTypeToEle(textAns,"index",cnt);
                textAns.addEventListener("change",getOption);
                textAns.classList.add(('inline1'));
               // btnCheck=document.createElement('button');
               // btnCheck.textContent="Sure";
                div_Choices.appendChild(checkbtn);
                div_Choices.appendChild(textAns);
               // div_Choices.appendChild(btnCheck);
                div_Choices.appendChild(document.createElement('br'));
                cnt = cnt + 1;
                /*
                btnCheck.addEventListener('click',()=>{
                    typeListener.arr.push(textAns.value);
                    console.log(typeListener.arr);
                    })*/
            }
        }
        )

    },
    text: (div_Choices,questionId) => {
        text1 = document.createElement('textarea');
        text1.classList.add('textarea')
        text1.disabled=true;
        label2=document.createElement('label');
        label2.textContent="the student will write the text";
        div_Choices.appendChild(label2);
        div_Choices.appendChild(text1);
    },
    upload_file: (div_Choices,questionId) => {
        label2=document.createElement('label');
        label2.textContent="the student will upload the file";
        div_Choices.appendChild(label2);
        const realFileBtn = document.createElement('input');
        realFileBtn.type="file";
        realFileBtn.disabled=true;
        realFileBtn.classList.add('real-file');
        const customBtn = document.createElement("button");
        customBtn.textContent = "uploadfile";
        customBtn.name = "uploadfile";
        customBtn.value = "uploadfile";
        customBtn.classList.add('custom-button');
        const customTxt = document.createElement("span");
        customTxt.textContent='No file chosen, yet.';
        customTxt.classList.add('custom-text');
          div_Choices.appendChild(realFileBtn);
          div_Choices.appendChild(customBtn);
          div_Choices.appendChild(customTxt);
    },
    matching: (div_Choices,questionId) => {
      
        var div_Left = document.createElement('div');
        var div_Right = document.createElement('div');
        div_Left.classList.add('div_Left');
        div_Right.classList.add('div_Right');
    
        let tA1 = document.createElement("input");
        tA1.type="text";
        div_Left.appendChild(tA1);
        div_Left.appendChild(document.createElement("br"));
        div_Left.appendChild(document.createElement("br"));
        var addBtn2 = document.createElement('button');
        addBtn2.textContent = "+";
        addBtn2.name = "+";
        addBtn2.value = "+";
        let tA2 = document.createElement("input");
        tA2.type="text";
        addBtn2.classList.add('fixedBtn1');
        div_Right.appendChild(tA2);
        div_Right.appendChild(addBtn2);
        
        div_Choices.appendChild(div_Left);
        div_Choices.appendChild(div_Right);
       

        
        addBtn2.addEventListener('click', () => {
            tA1.disabled=true;
            tA2.disabled=true;
            addBtn2.disabled=true;
            console.log(tA1.value);
            console.log(tA2.value);
            createMatchingArrays(questionId,Number(tA1.value),Number(tA2.value));

            for (let i=0;i<Number(tA1.value);i++)
            {
                label1 = document.createElement('label');
                label1.textContent = `${i+1}`;
            
                textAns = document.createElement('input');
                textAns.type = "text";
                textAns.classList.add(('inline1'));
                setTypeToEle(textAns,"qid",questionId);
                setTypeToEle(textAns,"arr",0);
                setTypeToEle(textAns,"index",i);
                textAns.addEventListener("change",addMactchOption);

                div_Left.appendChild(label1);
                div_Left.appendChild(textAns);
                div_Left.appendChild(document.createElement('br'));
            };
            for (let j=0;j<Number(tA2.value);j++)
            {
                correct_answer = document.createElement('input');
                correct_answer.type = "text";
                correct_answer.disabled=true;
                correct_answer.classList.add(('inline2'));
                textAns = document.createElement('input');
                textAns.type = "text";
                textAns.classList.add(('inline1'));
                setTypeToEle(textAns,"qid",questionId);
                setTypeToEle(textAns,"arr",1);
                setTypeToEle(textAns,"index",j);
                textAns.addEventListener("change",addMactchOption);
 
                div_Right.appendChild(correct_answer);
                div_Right.appendChild(textAns);
               
                div_Right.appendChild(document.createElement('br'));
            }

        }
        );

    }

}


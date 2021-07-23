createNewExam=document.querySelector("#createExam");
examInfo=document.querySelector("#examInfo");
//examInfo.classList.add("hidden");
btn=document.querySelector("#createNewExamButton");
btn.addEventListener('click',()=>{
    createNewExam.classList.add("hidden");
    examInfo.classList.remove("hidden");
    
});

var subjectName = document.getElementById('subjectName');
var file;
var infoDiv = document.getElementById('infoDiv');
infoDiv.classList.add("info");
infoDiv.classList.add("hidden");

var appendDiv = document.getElementById("appendDiv");
var preNextDiv = document.getElementById("preNextDiv");
var localDiv = document.getElementById("localDiv");
var sectionDiv = document.getElementById("sectionDiv");
var appendButton = document.getElementById("appendButton");
var nextPreButton = document.getElementById("nextPreButton");
var localButton = document.getElementById("localButton");
var appendBtn = document.getElementById("appendBtn");
var prevButton = document.getElementById("prev");
var cnt = document.getElementById("counter");
var nextButton = document.getElementById("next");
var showQuestion = document.getElementById("showQuestion");
var studentInfoEnteredDiv;
var examPageDiv;
let student1 = new student();
// let answerFrag;
submitInfo.addEventListener('click', () => {
    if (subjectName.value!=="")
    {
    file = subjectName.value + ".json";
    appendder.getFile(file);
    // console.log(file);

    studentInfoEnteredDiv = document.getElementById('studentInfoEnteredDiv');
    studentInfoEnteredDiv.classList.add('hidden');
    examPageDiv = document.getElementById('examPageDiv');
    examPageDiv.classList.remove('hidden');
    let myInfo = {
        "name": document.getElementById('fullName').value,
        "setNumber": document.getElementById('setNum').value,
        "email": document.getElementById('emailAddress').value
    };
    student1.setStudentInfo(myInfo);
    console.log(student1.studentInfo);
    fn = document.getElementById('fullName').value + ".json";
}
});
localButton.addEventListener('click', () => {
    infoDiv.classList.remove("hidden");
    setTimeout(captureImage, 20000);
    submitLayoutPage.classList.remove("hidden");
    appendder.show_Exam_info(infoDiv);
    sectionDiv.classList.add("hidden");
    localDiv.classList.remove("hidden");
    appendder.localQuestion(localDiv);

});
nextPreButton.addEventListener('click', () => {
    infoDiv.classList.remove("hidden");
    setTimeout(captureImage, 20000);
    // answerFrag=new answerFragment();
    // console.log(answerFrag);
    submitLayoutPage.classList.remove("hidden");
    appendder.show_Exam_info(infoDiv);
    sectionDiv.classList.add("hidden");
    preNextDiv.classList.remove("hidden");
    appendder.nextpreQuestion(showQuestion);

});
appendButton.addEventListener('click', () => {
    infoDiv.classList.remove("hidden");
    let btn = document.getElementById("appendBtn");
    btn.classList.remove("hidden");
    setTimeout(captureImage, 20000);
    submitLayoutPage.classList.remove("hidden");
    appendder.show_Exam_info(infoDiv);
    sectionDiv.classList.add("hidden");
    appendDiv.classList.remove("hidden");
    appendder.appendQuestion(appendDiv);

});

appendBtn.addEventListener('click', () => {
    appendder.appendQuestion(appendDiv);
});

nextButton.addEventListener('click', () => {
    appendder.next(showQuestion);
});
prevButton.addEventListener('click', () => {
    appendder.prev(showQuestion);
});


let video = document.querySelector("#video");
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        video.srcObject = stream;
        video.play();
    });

}
let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");

function captureImage() {

    video.pause();
    video.classList.add("hidden");
    canvas.classList.remove("hidden");
    context.drawImage(video, 0, 0, 290, 290);
    let encodedImage = context.canvas.toDataURL();
    console.log(encodedImage);
    /* 
    decoding :
    const img = document.createElement("img");
    img.src=encodedImage;
    body.appendChild(img);
    console.log(img); 
    */
    student1.studentInfo.imageSrc = encodedImage;


}
//setTimeout(captureImage,20000);
class QuestionFragment
{
    constructor()
    {
        //binding this : this.methodName = this.methodName.bind(this);
        this.setFragmetType = this.setFragmetType.bind(this);
        this.setFragmentValue = this.setFragmentValue.bind(this);
        this.setFragmentId = this.setFragmentId.bind(this);
        this.setFragmentQuestionId = this.setFragmentQuestionId.bind(this);
    }
    setFragmetType(fType)
    {
        this.type = fType;
    }
    setFragmentValue(fValue)
    {
        this.value = fValue;
    }
    setFragmentId(id)
    {
        this.id=id;
    }
    setFragmentQuestionId(id)
    {
        this.qId=id;
    }
}
class Question
{
    constructor()
    {   
        this.question_body=[];
        //this.answer_body=[4];
        this.setQuestionId       = this.setQuestionId.bind(this);
        this.setQuestionType     = this.setQuestionType.bind(this);
        this.addQuestionFragment = this.addQuestionFragment.bind(this);   
        this.addAnswerSequence   = this.addAnswerSequence.bind(this);
    }
    setQuestionId(QId) 
    {
        this.question_number=QId;
    }
    setArrayLength(len) 
    {
        this.answer_body=[len];
    }
    emptyArrray()
    {
        this.answer_body=[]; 
    }
    setQuestionType(Qtype) 
    {
        this.type=Qtype;
    }
    createAndPush(length1,length2)
    {
        let arr1=[length1];
        let arr2=[length2];
        this.answer_body[0]=arr1;
        this.answer_body[1]=arr2;
    }
    addQuestionFragment(obj)
    {
        this.question_body.push(obj);
    }
    addAnswerSequence(arr)
    {
        this.answer_body=arr;
    }
    addAnswerOptionToAnswerArray(option)
    {
        this.answer_body.push(option);
    }
}
let exam =
{   
    examQuestions:[],
    examInfo:{},
    setExamSubject:(subj)=>
    {
        exam.examInfo.examSubject=subj;
    },
    setExamTime:(time)=>
    {
        exam.examInfo.examTime =time; 
    },
    setExamCreator:(creator)=>
    {
        exam.examInfo.examCreator = creator;
    },
    setFacultyName:(faculty)=>
    {
        exam.examInfo.facultyName = faculty;
    },
    setUniversityName:(university)=>
    {
        exam.examInfo.universityName = university;
    },
    setExamInfo:(subject,time,creator,faculty,university)=>{
        exam.setExamSubject(subject);
        exam.setExamTime(time);
        exam.setExamCreator(creator);
        exam.setFacultyName(faculty);
        exam.setUniversityName(university);
        },
    addQuestion:(obj)=>
    {
        exam.examQuestions.push(obj);
    }
}
/*
//create new fragment 
let fragment1 = new QuestionFragment();
fragment1.setFragmetType("txt");
fragment1.setFragmentValue("what is your favourite language ?");
fragment1.setFragmentId(123);

//create new fragment 
let fragment2 = new QuestionFragment();
fragment2.setFragmetType("equation");
fragment2.setFragmentValue('<a href="https://www.codecogs.com/eqnedit.php?latex=\sum&space;x" target="_blank"><img src="https://latex.codecogs.com/gif.latex?\sum&space;x" title="\sum x" /></a>');
fragment2.setFragmentId(54);


//create new question
let question1 = new Question();
question1.setQuestionId(1);
question1.setQuestionType("choose_one");
question1.addQuestionFragment(fragment1);
question1.addQuestionFragment(fragment2);
question1.addAnswerSequence([1,2,3,4]);

//create new question
let question2 = new Question();
question2.setQuestionId(2);
question2.setQuestionType("choose_more");
question2.addQuestionFragment(fragment1);
question2.addQuestionFragment(fragment2);
question2.addAnswerSequence([1,2,3,4])

//set some charachteristics to the exam 
exam.setExamCreator("dr/eslam");
exam.setExamSubject("e-commerce");
exam.setExamTime("2 hours ");
exam.setFacultyName("computer science");
exam.setUniversityName("assuit university");
exam.addQuestion(question1);
exam.addQuestion(question2);

console.log(fragment1);
// console.log(fragment1.type);
console.log(question1);
console.log(exam);
*/




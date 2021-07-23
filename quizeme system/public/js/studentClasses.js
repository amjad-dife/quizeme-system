class answerFragment
{
    constructor()
    {
      //binding this : this.methodName = this.methodName.bind(this);
      this.setQuestionId = this.setQuestionId.bind(this);
      this.setQuestionType = this.setQuestionType.bind(this);
      this.setAnswerValue = this.setAnswerValue.bind(this);
    }
    setQuestionId(Id)
    {
        this.QuestionId=Id;
    }
    setQuestionType(qType)
    {
          this.QuestionType=qType; 
    }
    setAnswerValue(answer)
    {
        this.answerValue = answer;
    }
}
class student 
{
    constructor()
    {
        this.studentAnswers=[];
      //binding this : this.methodName = this.methodName.bind(this);
       this.setStudentInfo = this.setStudentInfo.bind(this);
        this.addStudentAnswer = this.addStudentAnswer.bind(this);
    }
    setStudentInfo(infoObject)
    {
        this.studentInfo=infoObject;
    }
    addStudentAnswer(answerFragmentObject)
    {
        this.studentAnswers.push(answerFragmentObject);
    }

}



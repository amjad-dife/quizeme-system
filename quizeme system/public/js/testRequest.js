var obj1={
    question:
    { 
        question_number:"1",
        type: "choose_one",
        question_body: [
            {
                type: "txt",
                value: "What is the capital of Connecticut?"
            }
        ],
        answer_body: [
            "Hartford",
            "Heartford",
            "Hart",
            " ford"
        ]
    },
    fileName:"newQuestionsTest.json"
};
//backEndService.createQuestionFile(obj1);
//backEndService.createAnswerFile(obj2);
//backEndService.addExamInfo(obj1);
//backEndService.addExamInfoToAnswerFile(obj2);
backEndService.addQuestion(obj1);


function checkAnswers()
{
    //make an array to store feedback on every question
    var feedback = [];
    //keep score
    var score=0;
//Question 1
    if (document.myQuiz.a1.value === 'Green')
    {
        score++;
        feedback.push('Question 1 is correct!')
    }
    else

    {
        feedback.push('No! The answer was Green')
    }

//Question 2
    var q2answer = document.myQuiz.a2.value.toLowerCase();
    if (q2answer === 'marcel')
    {
        score++;
        feedback.push('Question 1 is correct!')
    }
    else
    {
        feedback.push('No! The correct answer was Marcel')
    }

//Question 3
    if (document.myQuiz.a3A.checked === true && document.myQuiz.a3C.checked === true && document.myQuiz.a3D.checked === true)
    {
        if (document.myQuiz.a3B.checked === true)
        {
            feedback.push("No! Question 3 was Lobster, Kiwi, and Peanuts");
        }
        else
        {
            score++;
            feedback.push("Question 3 is CORRECT!!!");
        }
    }
    else
    {
        feedback.push("No! Question 3 was Lobster, Kiwi, and Peanuts");
    }

//Question 4
    if (document.myQuiz.a4.value === '72')
    {
        score ++;
        feedback.push('Question 4 is correct!')
    }
    else
    {
        feedback.push('No! Question 4 was 72!')
    }

    //  document.getElementById("score").innerHTML = score.toString();
    //     document.getElementById("answer").innerHTML = feedback.join("<br>");
    alert(feedback);
    alert(score);


}
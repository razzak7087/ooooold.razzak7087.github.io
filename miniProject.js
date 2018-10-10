/*Temperature Bug Project*/
function temperatureBug()
{
    var score = Number(document.project1.f1.value);
    if (score >= 200)
    {
        document.getElementById('weather').src = "img/move.jpg";
        return "move somewhere else"
    }
    else if (score >= 76)
    {
        document.getElementById('weather').src = "img/summer.jpg";
        return 'summer'
    }
    else if (score >= 69)
    {
        document.getElementById('weather').src = "img/spring.jfif";
        return 'spring'
    }
    else if (score >= 45)
    {
        document.getElementById('weather').src = "img/autumn.jpg";
        return 'autumn'
    }
    else if (score >= 10)
    {
        document.getElementById('weather').src = "img/winter.jpg";
        return 'winter'
    }

}

/*
Calorie Counter Project
*/
function calorieCounter()
{
    var activity = document.project2.activity.value;
    activity = activity.toLowerCase();
    var time = Number(document.project2.input1.value) ;
    if (activity === "running")
    {
        return 7 * time;
    }
    else if (activity === "skating")
    {
        return 9 * time;
    }
    else if (activity === "vacuuming")
    {
        return 3 * time;
    }
    else if (activity === "biking")
    {
        return 10 * time;
    }
    else if (activity === "trampolining")
    {
        return 4 * time;
    }
}
function dropDown()
{
    var activity = document.getElementById('activities').value;
    if (activity === "running")
    {
        return "running";
    }
    else if (activity === "skating")
    {
        return "skating";
    }
    else if (activity === "vacuuming")
    {
        return "vacuuming";
    }
    else if (activity === "biking")
    {
        return "biking";
    }
    else if (activity === "trampolining")
    {
        return "trampolining";
    }
}

/*
Assign Grade Project
*/
function assignGrade()
{
    var score = Number(document.project3.num1.value);
    if (score >= 90)
    {
        return 'A'
    }
    else if (score >= 80)
    {
        return 'B'
    }
    else if (score >= 70)
    {
        return 'C'
    }
    else if (score >= 60)
    {
        return 'D'
    }
    else if (score >= 0)
    {
        return 'F'
    }
}

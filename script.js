function findDay() {

    let userInput = document.getElementById("dayInput").value;
    let day;

    switch(Number(userInput)) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            day = "Please enter a valid number between 0 and 6!";
    }
    document.getElementById("result").innerHTML = day;
}
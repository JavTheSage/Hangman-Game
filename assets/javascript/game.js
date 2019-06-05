//Defined array of words
var randomWordArr = ["desperado","tarnation", "shucks"]
var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];
//global objects
var a;
var count = 0;
//empty array to store guesses
var answerArray = [];

//filling answer arrays with underscores
//these underscores match the number of letters in the randomly chosen word
function startUp()
{
    for (var i = 0; i < randomWord.length; i++)
    {
        answerArray[i] = "_";
    }
    
    //place them in a string
    a = answerArray.join(" ");
    document.getElementById("answer").innerHTML = a;
}

function Letter()
{
    var Letter = document.getElementById("letter").value;

    if (letter.length > 0)
    {
        for (var i = 0; i <randomWord.length; i++)
        {
            if (randomWord[i] === letter)
            {
                answerArray[i] = letter;
            }
        
        }
        count++;
        document.getElementById("counter").innerHTML = "No. of clicks: " + count;
        document.getElementById("answer").innerHTML = answerArray.join(" ");
    }
//salt generator prompt
    if(count>5)
    {
        document.getElementById("stat").innerHTML = "Ya shoulda guessed by now"
    }
}
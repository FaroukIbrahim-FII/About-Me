'use strict';
let totScore = 0;


let UserName = prompt('What is your name?');

alert('Welcome to my webpage ' + UserName);

alert('Let us play a quick quize. Please answer using yes/no or y/n only.');

function Q1() {
    let MyDegree = prompt('I am a civil engineer, right? Y/N');

    MyDegree = MyDegree.toLowerCase();

    if (MyDegree === 'yes' || MyDegree === 'y') {
        // console.log('That\'s correct');
        alert('That\'s correct');
        totScore++;
    } else if (MyDegree === 'no' || MyDegree === 'n') {
        // console.log('That\'s wrong');
        alert('That\'s wrong');
    } else {
        alert('Please answer using yes/no or y/n only.');
    }
}
// eslint-disable-next-line new-cap
Q1();
function Q2(){

    let MyFavGam = prompt('Is my favorite game Minecraft? Y/N');

    MyFavGam = MyFavGam.toLowerCase();

    if (MyFavGam === 'no' || MyFavGam === 'n') {
    // console.log('That\'s correct');
        alert('That\'s correct');
        totScore++;
    } else if (MyFavGam === 'yes' || MyFavGam === 'y') {
    // console.log('That\'s wrong');
        alert('That\'s wrong');
    } else {
        alert('Please answer using yes/no or y/n only.');
    }

}
Q2();

function Q3(){

    let FavCar = prompt('Is BMW my fav? Y/N');

    FavCar = FavCar.toLowerCase();

    if (FavCar === 'no' || FavCar === 'n') {
    // console.log('That\'s correct favorite car manufacturer');
        alert('That\'s correct');
        totScore++;
    } else if (FavCar === 'yes' || FavCar === 'y') { // edit to FavCar
    // console.log('That\'s wrong');
        alert('That\'s wrong');
    } else {
        alert('Please answer using yes/no or y/n only.');
    }
}
Q3();

function Q4(){
    let YearBorn = prompt('Am I born in 1994? Y/N');

    YearBorn = YearBorn.toLowerCase();

    if (YearBorn === 'yes' || YearBorn === 'y') {
    // console.log('That\'s correct favorite car manufacturer');
        alert('That\'s correct');
        totScore++;
    } else if (YearBorn === 'no' || YearBorn === 'n') {
    // console.log('That\'s wrong');
        alert('That\'s wrong');
    } else {
        alert('Please answer using yes/no or y/n only.');
    }
}
// eslint-disable-next-line new-cap
Q4();


let Exp = prompt('Have I worked as a civil Engineer for 7 years? Y/N');

Exp = Exp.toLowerCase();

if (Exp === 'no' || Exp === 'n') {
    // console.log('That\'s correct favorite car manufacturer');
    alert('That\'s correct');
    totScore++;
} else if (Exp === 'yes' || Exp === 'y') {
    // console.log('That\'s wrong');
    alert('That\'s wrong');
} else {
    alert('Please answer using yes/no or y/n only.');
}

/*
As a user, I would like to be guided to an answer through a series of feedback responses so that I can learn more about the site owner.

    * Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
    * Indicates through an alert if the guess is “too high” or “too low”.
    * It should give the user exactly four opportunities to get the correct answer.
    * After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.
*/

for (let i = 0; i < 4; i++) {
    let num = prompt('Okay, guess a number between 0 and 20');
    if (num == 15) {
        alert('Good job you have guessed it');
        // console.log('Good job you have guessed it');
        totScore++;
        break;
    } else if (num < 15) {
        alert('that is too low');
        // console.log('that is too low');
    } else if (num > 15) {
        alert('That is too high');
        // console.log('That is too high');
    } else {
        alert('please type a number between 0 and 20');
        // console.log('please type a number between 0 and 20');
    }

    if (i == 3) {
        alert('The correct number was 15');
    }
}

/* As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.

    * Add a 7th question that has multiple possible correct answers that are stored in an array.
    * Give the user 6 attempts to guess the correct answer.
    * The guesses will end once the user guesses a correct answer or they run out of attempts.
    * Display all the possible correct answers to the user.
    * Consider using a loop of some sort for this question.
*/
let GamArray = ['GTA V', 'Minecraft', 'Red Dead Redemption 2', 'The Legend of Zelda: Breath of the Wild', 'The Elder Scrolls V: Skyrim', 'The Last of Us', 'Portal 2', 'The Witcher 3: Wild Hunt'];

Try: for (let i = 0; i < 6; i++) {
    let guessGam = prompt('Try to guess one of my favorite Games');
    for (let x = 0; x < GamArray.length; x++) {
        if (guessGam == GamArray[x]) {
            alert('Good job you have guessed it. Correct answers were: (GTA V, Minecraft, Red Dead Redemption 2, The Legend of Zelda: Breath of the Wild, The Elder Scrolls V: Skyrim, The Last of Us, Portal 2, The Witcher 3: Wild Hunt)');
            // console.log(GamArray[x]);
            totScore++;
            break Try;
        }

    }
    if (i == 5) {
        alert('Correct answers were: (GTA V, Minecraft, Red Dead Redemption 2, The Legend of Zelda: Breath of the Wild, The Elder Scrolls V: Skyrim, The Last of Us, Portal 2, The Witcher 3: Wild Hunt)');
    }
}

// As a user, I would like to know my final score so that I can know how well I did.

//     Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.

alert(`that is it, thanks for visiting my webpage ${UserName}. Your score was ${totScore} /7 `);

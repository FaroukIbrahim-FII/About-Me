'use strict';
let totScore = 0;


let UserName = prompt('What is your name?');

alert('Welcome to my webpage ' + UserName);

alert('Let us play a quick quize. Please answer using yes/no or y/n only.');

function q1() {
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
q1();
function q2() {

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
q2();

function q3() {

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
q3();

function q4() {
    let YearBorn = prompt('Am I born in 1994? Y/N');

    YearBorn = YearBorn.toLowerCase();

    if (YearBorn === 'yes' || YearBorn === 'y') {

        alert('That\'s correct');
        totScore++;
    } else if (YearBorn === 'no' || YearBorn === 'n') {

        alert('That\'s wrong');
    } else {
        alert('Please answer using yes/no or y/n only.');
    }
}

q4();

function q5() {
    let Exp = prompt('Have I worked as a civil Engineer for 7 years? Y/N');

    Exp = Exp.toLowerCase();

    if (Exp === 'no' || Exp === 'n') {

        alert('That\'s correct');
        totScore++;
    } else if (Exp === 'yes' || Exp === 'y') {

        alert('That\'s wrong');
    } else {
        alert('Please answer using yes/no or y/n only.');
    }
}
q5();

function q6() {

    for (let i = 0; i < 4; i++) {
        let num = prompt('Okay, guess a number between 0 and 20');
        if (num == 15) {
            alert('Good job you have guessed it');

            totScore++;
            break;
        } else if (num < 15) {
            alert('that is too low');

        } else if (num > 15) {
            alert('That is too high');

        } else {
            alert('please type a number between 0 and 20');

        }

        if (i == 3) {
            alert('The correct number was 15');
        }
    }
}
q6();

function q7() {
    let GamArray = ['GTA V', 'Minecraft', 'Red Dead Redemption 2', 'The Legend of Zelda: Breath of the Wild', 'The Elder Scrolls V: Skyrim', 'The Last of Us', 'Portal 2', 'The Witcher 3: Wild Hunt'];

    Try: for (let i = 0; i < 6; i++) {
        let guessGam = prompt('Try to guess one of my favorite Games');
        for (let x = 0; x < GamArray.length; x++) {
            if (guessGam == GamArray[x]) {
                alert('Good job you have guessed it. Correct answers were: (GTA V, Minecraft, Red Dead Redemption 2, The Legend of Zelda: Breath of the Wild, The Elder Scrolls V: Skyrim, The Last of Us, Portal 2, The Witcher 3: Wild Hunt)');

                totScore++;
                break Try;
            }

        }
        if (i == 5) {
            alert('Correct answers were: (GTA V, Minecraft, Red Dead Redemption 2, The Legend of Zelda: Breath of the Wild, The Elder Scrolls V: Skyrim, The Last of Us, Portal 2, The Witcher 3: Wild Hunt)');
        }
    }
}
q7();

alert(`that is it, thanks for visiting my webpage ${UserName}. Your score was ${totScore} /7 `);

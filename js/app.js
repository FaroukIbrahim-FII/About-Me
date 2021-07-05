'use strict';

let UserName = prompt('What is your name?');

alert('Welcome to my webpage ' + UserName);

alert('Let us play a quick quize. Please answer using yes/no or y/n only.');


let MyDegree = prompt('I am a civil engineer, right? Y/N');

MyDegree = MyDegree.toLowerCase();


if (MyDegree === 'yes' || MyDegree === 'y') {
    // console.log('That\'s correct');
    alert('That\'s correct');
} else {
    // console.log('That\'s wrong');
    alert('That\'s wrong');
}

let MyFavGam = prompt('Is my favorite game Minecraft? Y/N');

MyFavGam = MyFavGam.toLowerCase();

if (MyFavGam === 'no' || MyFavGam === 'n') {
    // console.log('That\'s correct');
    alert('That\'s correct');
} else {
    // console.log('That\'s wrong');
    alert('That\'s wrong');
}

let FavCar = prompt('Is BMW my fav? Y/N');

FavCar = FavCar.toLowerCase();

if (FavCar === 'no' || FavCar === 'n') {
    // console.log('That\'s correct favorite car manufacturer');
    alert('That\'s correct');
} else {
    // console.log('That\'s wrong');
    alert('That\'s wrong');
}

let YearBorn = prompt('Am I born in 1994? Y/N');

YearBorn = YearBorn.toLowerCase();

if (YearBorn === 'yes' || YearBorn === 'y') {
    // console.log('That\'s correct favorite car manufacturer');
    alert('That\'s correct');
} else {
    // console.log('That\'s wrong');
    alert('That\'s wrong');
}

let Exp = prompt('Have I worked as a civil Engineer for 7 years? Y/N');

Exp = Exp.toLowerCase();

if (Exp === 'no' || Exp === 'n') {
    // console.log('That\'s correct favorite car manufacturer');
    alert('That\'s correct');
} else {
    // console.log('That\'s wrong');
    alert('That\'s wrong');
}

alert('that is it, thanks for visiting my webpage ' + UserName);

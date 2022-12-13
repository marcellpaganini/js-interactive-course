//document.getElementById("count-el").innerText = 5;
// let firstBatch = 5;
// let count = firstBatch;

// console.log(count);

// let myAge = 38;
// console.log(myAge);


// let myAge = 38;
// let humanDogRatio = 7;
// let myDogAge = humanDogRatio * myAge;

// console.log(myDogAge);

// let bonusPoints = 50;
// bonusPoints = bonusPoints + 50;
// bonusPoints = bonusPoints - 75;
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

let count = 0;

function increment() {
    count += 1;
    document.getElementById("count-el").innerText = count;
}

function save() {
    console.log(count);
}
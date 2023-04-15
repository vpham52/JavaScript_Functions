console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
    if (count < 0){
        console.log(`${count} is less than zero`);
        return;
    }
    
    for(let i = 0; i <= count; i++){
        if (i % 2 != 0){
            console.log(i);
        }     

    }
}
printOdds(15);
printOdds(-15);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){

let aboveSixteen = `Congrats ${userName}, you can drive!`;
let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
if (userName == null) {
    console.log(`no userName entered`);
    return;
}

if (age <= 0 || age == null){
    console.log(`Incorrect age entered`);
    return;
}

if (age < 16){
    console.log(belowSixteen);
}

else{
    console.log(aboveSixteen);
}
}

checkAge('Victoria', -8);
checkAge();
checkAge('Victoria', 5);
checkAge('Victoria', 25);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function quadrant(x,y){
var quadrant1 = `${x}, ${y} are in quadrant 1.`;
var quadrant2 = `${x}, ${y} are in quadrant 2.`;
var quadrant3 = `${x}, ${y} are in quadrant 3.`;
var quadrant4 = `${x}, ${y} are in quadrant 4.`;
var yAxis = `${x}, ${y} are on the Y axis`;
var xAxis = `${x}, ${y} are on the X axis`;

    if (x < 0 && y < 0){
        console.log(quadrant3);
    }
    else if (x > 0 && y < 0){
        console.log(quadrant4);
    }
    else if (x > 0 && y > 0) {
        console.log(quadrant1);
    }
    else if (x < 0 && y > 0){
        console.log(quadrant2);
    }
    else if (x == 0){
        console.log(yAxis);
    }
    else if (y == 0){
        console.log(xAxis);
    }
    if (x == 0 && y == 0){
        console.log("0,0 is on the origin point!")
    }
    
}
quadrant(5,5);
quadrant(25,-31);
quadrant(-52,58);
quadrant(0,58);
quadrant(5,0);


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangle(a,b,c){
    if (!(a + b > c) || !(b + c > a) || !(a + c > b)){
        console.log("This is not a triangle");
        return;        
    }    
     
    //triangle check
    if (a == b && a == c && b == c){
        console.log(`Triangle is equilateral`);
    } else if (a == b || a == c || b == c){
        console.log (`Triangle is isosceles`);
    } else {
        console.log(`Triangle is scalene`);
    }    
}
console.log('Side lengths: 5,5,8');
triangle(5,5,8);
console.log();

console.log('Side lengths: 5,5,5');
triangle(5,5,5);
console.log();

console.log('Side lengths: 1,2,3');
triangle(1,2,3);
console.log();

console.log('Side lengths: 2,5,6');
triangle (2,5,6);
console.log();

console.log('Side lengths: 1,1,2');
triangle(1,1,2);
console.log();

//Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function dailyPlan (planLimit, day, usage){

let averageDailyUse = planLimit/30;
let currentDailyUse = usage/day;
let dataRemaining = planLimit - usage;
let daysLeft = 30 - day;
let overage = (30 * currentDailyUse) - planLimit;
let dataToUseLeft = dataRemaining / daysLeft;

console.log(`${day} days used, ${daysLeft} days remaining`)
console.log(`Average daily use: ${averageDailyUse} GB/day`)

if (planLimit == usage && day <= 30){

    console.log(`You've run out of data`); 
}

else if (currentDailyUse > averageDailyUse){
    console.log(`You are EXCEEDING your average daily use (${currentDailyUse} GB/day),
continuing this high usage, you'll exceed your data plan by ${overage} GB.`)

    console.log(`To stay below your data plan, use no more than ${dataToUseLeft} GB/day.`)
}

else if (currentDailyUse < averageDailyUse){

    console.log(`You are UNDER your average daily use (${currentDailyUse} GB/day)`);
    
}


}
dailyPlan(100,15,56);

dailyPlan(100, 25, 62);

dailyPlan(100, 12,100);
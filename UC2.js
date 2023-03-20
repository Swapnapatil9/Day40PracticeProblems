// Calculate Daily Wage of Employee

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHrs = 0;
let empCheck = Math.floor(Math.random()*10)%3;
switch(empCheck){
    case IS_PART_TIME:
        empWage = PART_TIME_HOURS*WAGE_PER_HOUR;
        break;
    case IS_FULL_TIME:
        empWage = FULL_TIME_HOURS*WAGE_PER_HOUR;
        break;
    default:
        empWage = 0;
}
console.log("Employee Daily Wage: "+empWage);
//Use Map to Store and calculate Daily wage along with total wage.

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 100;

let empDailyWageArray = new Array();
let empDailyWageMap = new Map();

let empCheck = Math.floor(Math.random()*10)%3;
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
function calculateDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays =0;
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calculateDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calculateDailyWage(empHrs));
}

console.log(empDailyWageMap);
function totalWages(totalWage, dailyWage){
    return totalWage*dailyWage;
}

let empWage = calculateDailyWage(totalEmpHrs);
console.log("Total days:" +totalWorkingDays+ "Total hours:"+totalEmpHrs+ "Employee Wage:" +empWage);
console.log("totalHrs =" +Array.from(empDailyWageMap.values()).reduce(totalWages,0));
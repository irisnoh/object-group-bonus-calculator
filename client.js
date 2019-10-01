const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT


function BonusCalculator(employee) {

  let totalBonus = 0;
  if (employee.reviewRating == 5) {
    totalBonus += .1 * employee.annualSalary
  } else if (employee.reviewRating == 4) {
    totalBonus += .06 * employee.annualSalary
  } else if (mployee.reviewRating == 3) {
    totalBonus += .04 * employee.annualSalary
  }

if (employee.employeeNumber.length == 4) {
    totalBonus += .05 * employee.annualSalary
}
return totalBonus;
}

/*
walk through
1. bonus calculator function
2. loop function - passes each employee through bonus function. calculates employees bonuses
3. object creation using bonuses
/*

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

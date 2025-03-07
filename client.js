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

// bonuscalculator calculates only the bonus
// function BonusCalculatr (anyname) <- argument
function BonusCalculator(employee) {

  let totalPercentage = 0;
  if (employee.reviewRating == 5) {
    totalPercentage += .1;
  } else if (employee.reviewRating == 4) {
    totalPercentage += .06;
  } else if (employee.reviewRating == 3) {
    totalPercentage += .04;
  }

  if (employee.employeeNumber.length == 4) {
    totalPercentage += .05;
  }

  if (employee.annualSalary > 65000) totalPercentage -= .01;

  if (totalPercentage > .13) totalPercentage = .13;
  if (totalPercentage < 0) totalPercentage = 0;

  return totalPercentage;
}
console.log('Employees', employees);


function newEmployeeObject(employee) {
  let bonusPercentage = BonusCalculator(employee);

  let newEmployee = {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: Math.round(Number(employee.annualSalary) + Number(employee.annualSalary * bonusPercentage)),
    totalBonus: Math.round(Number(employee.annualSalary) * bonusPercentage)
  };

  return newEmployee;
}

/*function rounding (totalBonus) {
  let numbersRound = newEmployeeObject(totalBonus);
  var round = Math.round(numbersRound);
  document.write("Number after rounding : " + round +
    "<br>");
  var round = Math.round(12.51);
  document.write("Number after rounding : " + round);
}
*/

function newEmployeeArray(employees) {
  let newArray = [];
  for (i = 0; i < employees.length; i++) {
    newArray.push(newEmployeeObject(employees[i]));
  }

  return newArray
}

/*
function updateDOM(employees) {
  console.log('testingDOM');
  let el = $('#newArray');
  console.log(newEmployeeArray())

  return true;
}








/*
walk through
1. bonus calculator function
2. loop function - passes each employee through bonus function. calculates employees bonuses
3. object creation using bonuses
*/

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

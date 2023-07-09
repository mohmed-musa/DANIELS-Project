// window.alert("Hello Mohamed");
// document.getElementById('test').innerHTML = "Hello world";
// let num =("Enter a number:");
// console.log("You entered:", num);

// var userName = 25;
// var userAge = 25;
// console.log(typeof(userName));
// console.log(userAge) 


// var userRole ="sdsd";

// switch(userRole){
//     case"Admin":
//     console.log("Admin");
//     break;
//     case"User":
//     console.log("User");
//     break;
//     default:
//         console.log("go awey");
// }

// var userAge = 20;
// if(userAge > 25) {
//     console.log("ok")
// }else if(userAge == 25) {
//     console.log("ok againe")
// }else{
//     console.log("no")
// }

// for(var i = 0; i < 3; i = i +1){
//     console.log(i);
// }

// var userAge = window.prompt('please enter your number');
// var userAge2 = Number(userAge);
// var userAge = Number(window.prompt('please enter your number'));


// var Fnum = Number(window.prompt('please enter your first number'));
// var Snum = Number(window.prompt('please enter your second number'));

// if(Fnum > Snum){
//     console.log(Fnum)
// }else if(Snum > Fnum){
//     console.log(Snum)
// }else{
//     console.log("equal")
// }


// 
// var Fnum = Number(console.log('please enter your number'));




// let number = prompt("Enter a number:");
// console.log(number);

///////////////////////////////////////////////////

// let number = prompt("Enter a number:");

// if (number % 3 === 0 && number % 4 === 0) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }
/*----1------*/ 
function printNumber() {
    var num = parseInt(document.getElementById("nul").value.trim());
    var resultDiv = document.getElementById("result1");
    resultDiv.textContent = `You entered: ${num}`;
  }
  
  
  /*----2------*/ 
  function checkDivisibility() {
      let number = document.getElementById("number").value;
  
      if (number % 3 === 0 && number % 4 === 0) {
        document.getElementById("result").innerHTML = "Yes";
      } else {
        document.getElementById("result").innerHTML = "No";
      }
    }
  
  
  /*////////////////////////////////////////////////////////////////////*/   
  
  /*--------- 3 ------------------------*/
    function findMax() {
      let number1 = document.getElementById("num1").value;
      let number2 = document.getElementById("num2").value;
  
      if (number1 > number2) {
        document.getElementById("result3").innerHTML = number1;
      } else {
        document.getElementById("result3").innerHTML = number2;
      }
    }
  
    /*---------------------------------------------------*/
  
    /*------------ 4 ------------------------------*/
  
    function checkSign() {
      let number = document.getElementById("number3").value;
  
      if (number < 0) {
        document.getElementById("result4").innerHTML = "negative";
      } else {
        document.getElementById("result4").innerHTML = "positive";
      }
    }
  /*--------------------------------------------------*/
  
  /*------------------ 5 -----------------*/
  function findMinMax() {
      let number1 = parseInt(document.getElementById("number-1").value);
      let number2 = parseInt(document.getElementById("number-2").value);
      let number3 = parseInt(document.getElementById("number-3").value);
  
      let max = Math.max(number1, number2, number3);
      let min = Math.min(number1, number2, number3);
  
      document.getElementById("result5").innerHTML = "Max: " + max + "<br>Min: " + min;
    }
  /*------------------------------------------*/
  /*------------ 6 -------------------------*/
  function checkEvenOdd() {
      let number = document.getElementById("number6").value;
  
      if (number % 2 === 0) {
        document.getElementById("result6").innerHTML = "even";
      } else {
        document.getElementById("result6").innerHTML = "odd";
      }
    };
  /*-------------------------------------------------------*/
  
  /*----------- 7  ---------------------*/
  function checkVowel() {
      let character = document.getElementById("character").value.toLowerCase();
  
      if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u' || character === 'y') {
        document.getElementById("result7").innerHTML = "vowel";
      } else {
        document.getElementById("result7").innerHTML = "consonant";
      }
    }
  
  /*------------------------------------------------*/
  /*---------- 8  -------------*/
  function printNumbers() {
      let number = parseInt(document.getElementById("number-8").value);
      let result = "";
  
      for (let i = 1; i <= number; i++) {
        result += i + " ";
      }
  
      document.getElementById("result8").innerHTML = result;
    }
  /*------------------------------------------------------*/
  /*----------- 9 ----------------------------*/
  function printTable() {
      let number = parseInt(document.getElementById("number-9").value);
      let result = "";
  
      for (let i = 1; i <= 12; i++) {
        result += number + " x " + i + " = " + (number * i) + "<br>";
      }
  
      document.getElementById("result9").innerHTML = result;
    }
  /*-----------------------------------------------*/
  /*------- 10  ------------------*/  
  function displayEvenNumbers() {
    var numString = document.getElementById("num").value;
    var num = parseInt(numString);
  
    var resultDiv = document.getElementById("result10");
  
    resultDiv.innerHTML = "";
  
    var heading = document.createElement("h1");
    heading.textContent = "Even numbers between 1 and " + num + ":";
    resultDiv.appendChild(heading);
  
    for (var i = 2; i <= num; i += 2) {
      var evenNumber = document.createElement("p");
      evenNumber.textContent = i;
      resultDiv.appendChild(evenNumber);
    }
  }
  /*-----------------------------------------------*/
  /*------- 11  ------------------*/  
  function calculatePower() {
    var base = parseInt(document.getElementById("base").value);
    var power = parseInt(document.getElementById("power").value);
  
    var resultDiv = document.getElementById("result11");
  
    var result = 1;
    for (var i = 0; i < power; i++) {
      result *= base;
    }
    resultDiv.textContent = `${base} raised to the power of ${power} is ${result}`;
  }
  /*-----------------------------------------------*/
  /*------- 12  ------------------*/  
  function calculateMarks() {
    var subject1 = parseFloat(document.getElementById("subject1").value);
    var subject2 = parseFloat(document.getElementById("subject2").value);
    var subject3 = parseFloat(document.getElementById("subject3").value);
    var subject4 = parseFloat(document.getElementById("subject4").value);
    var subject5 = parseFloat(document.getElementById("subject5").value);
  
    var resultDiv = document.getElementById("result12");
  
    var totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    var averageMarks = totalMarks / 5;
    var percentage = (totalMarks / 500) * 100;
  
    resultDiv.textContent = `Total marks: ${totalMarks}\nAverage marks: ${averageMarks.toFixed(2)}\nPercentage: ${percentage.toFixed(2)}%`;
  }
  /*-----------------------------------------------*/
  /*------- 13  ------------------*/ 
  function calculateDays() {
    var month = parseInt(document.getElementById("month").value);
    var resultDiv = document.getElementById("result13");
    var daysInMonth = getDaysInMonth(month);
  
    resultDiv.textContent = `Number of days in month ${month}: ${daysInMonth}`;
  }
  function getDaysInMonth(month) {
    var daysInMonth;
    if (month == 2) {
      var year = new Date().getFullYear();
      if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        daysInMonth = 29;
      } else {
        daysInMonth = 28;
      }
    } else {
      daysInMonth = 31 - ((month - 1) % 7 % 2);
    }
    return daysInMonth;
  }
  
  /*-----------------------------------------------*/
  /*------- 14  ------------------*/ 
  function calculateMarks() {
    var physics = parseInt(document.getElementById("physics").value);
    var chemistry = parseInt(document.getElementById("chemistry").value);
    var biology = parseInt(document.getElementById("biology").value);
    var mathematics = parseInt(document.getElementById("mathematics").value);
    var computer = parseInt(document.getElementById("computer").value);
  
    var resultDiv = document.getElementById("result14");
  
    var totalMarks = physics + chemistry + biology + mathematics + computer;
    var percentage = (totalMarks / 500) * 100;
    
    var grade;
    if (percentage >= 90) {
      grade = "A+";
    } else if (percentage >= 80) {
      grade = "A";
    } else if (percentage >= 70) {
      grade = "B";
    } else if (percentage >= 60) {
      grade = "C";
    } else if (percentage >= 50) {
      grade = "D";
    } else {
      grade = "F";
    }
    resultDiv.textContent = `Total marks: ${totalMarks}\nPercentage: ${percentage.toFixed(2)}%\nGrade: ${grade}`;
  }
  
  /*-----------------------------------------------*/
  /*------- 15  ------------------*/ 
  
  function calculateDays() {
    var month = parseInt(document.getElementById("month").value);
  
    var resultDiv = document.getElementById("result15");
  
    var days;
    switch(month) {
      case 2:
        days = 28;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        days = 30;
        break;
      default:
        days = 31;
    }
    resultDiv.textContent = `Number of days in month ${month}: ${days}`;
  }
  /*-----------------------------------------------*/
  /*------- 16  ------------------*/ 
  function checkVowelConsonant() {
    var char = document.getElementById("char").value.trim();
    var resultDiv = document.getElementById("result16");
    var result = checkVowelConsonant(char);
    resultDiv.textContent = `The character '${char}' is a ${result}.`;
  }
  
  function checkVowelConsonant(char) {
    var result;
    switch(char.toLowerCase()) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        result = "vowel";
        break;
      default:
        result = "consonant";
    }
    return result;
  }
  
  /*-----------------------------------------------*/
  /*------- 17  ------------------*/ 
  function findMax() {
    let num17 = parseInt(document.getElementById("num17").value);
    let num27 = parseInt(document.getElementById("num27").value);
    let result = document.getElementById("result17");
    switch (true) {
      case (num17 > num27):
        result.innerHTML = "Maximum number is " + num17;
        break;
      case (num27 > num17):
        result.innerHTML = "Maximum number is " + num27;
        break;
      default:
        result.innerHTML = "Numbers are equal";
        break;
    }
  }
  
  
  /*-----------------------------------------------*/
  /*------- 18  ------------------*/ 
  // function checkEvenOdd() {
  //   var num = parseInt(document.getElementById("num").value.trim());
  //   var resultDiv = document.getElementById("result18");
  //   var result = checkEvenOdd(num);
  //   resultDiv.textContent = `The number ${num} is ${result}.`;
  // }
  
  // function checkEvenOdd(num) {
  //   var result;
  //   switch(num % 2) {
  //     case 0:
  //       result = "even";
  //       break;
  //     case 1:
  //       result = "odd";
  //       break;
  //   }
  //   return result;
  // }
  
  /*-----------------------------*/
  /*------ 19 -----------------------*/
  function checkNum() {
    let num19 = parseInt(document.getElementById("num19").value);
    let result = document.getElementById("result19");
    switch (Math.sign(num19)) {
      case 1:
        result.innerHTML = "The number is positive";
        break;
      case -1:
        result.innerHTML = "The number is negative";
        break;
      default:
        result.innerHTML = "The number is zero";
        break;
    }
  }  
  /*-----------------------------*/
  /*------ 20-----------------------*/
  function calculate() {
    let num11 = parseFloat(document.getElementById("num11").value);
    let num21 = parseFloat(document.getElementById("num21").value);
    let operation = document.getElementById("operation").value;
    let result = document.getElementById("result20");
    switch (operation) {
      case "+":
        result.innerHTML = num11 + num21;
        break;
      case "-":
        result.innerHTML = num11 - num21;
        break;
      case "*":
        result.innerHTML = num11 * num21;
        break;
      case "/":
        result.innerHTML = num11 / num21;
        break;
      default:
        result.innerHTML = "Invalid operation";
        break;
    }
  }
  
  
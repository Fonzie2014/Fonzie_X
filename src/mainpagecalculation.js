<<<<<<< HEAD
// Alphonse  Mboumba
// Main Calculation for the main page
// JavaScript File
// 08/19/17
// var firstTimeUserName = prompt("Enter a new user name #");
//
// var getUser = false;
//
// while (getUser == false) {
//   var userName = prompt("Enter user name: ");
//   if (userName == firstTimeUserName) {
//     console.log("Access Granted to " + firstTimeUserName);
//     getUser = true;
//   }
//
// }
// if (firstTimeUserName == null) {
//   alert("Sorry We ran intro some trouble please try again in a few minutes");
//   getUser
//
// }

function userInputDisplay() {
    var num1 = document.getElementById("userInput").value;
    var num2 = document.getElementById("userInput").value;
    var num3 = document.getElementById("userInput").value;
    var num4 = document.getElementById("userInput").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);
    num4 = parseFloat(num4);

    var total1 = num1 + num2 + num3 + num4;

    document.getElementById("userDisplayInput").innerHTML = num1;
    document.getElementById("userDisplayInput").innerHTML = num2;
    document.getElementById("userDisplayInput").innerHTML = num3;
    document.getElementById("userDisplayInput").innerHTML = num4;
    document.getElementById("totalDisplay").innerHTML = total1;


    // console.log("Total is: " + total);

    var warningColorRed = 1000;
    var warningColorOrange = 100;
    var warningColorGreen = 0;
    var AmountActucalySpent = parseFloat(prompt("Enter amount actually Spent"));
    var amountOwn = num1 + num2 + num3 + num4;
    var difference = amountOwn - AmountActucalySpent;

    console.log(amountOwn);
    console.log(difference);
    console.log(AmountActucalySpent);



      //
      // console.log("The difference is: " + difference);
      //
      // console.log("*************************");
      // for (var amountOwn = 0; amountOwn < 2; amountOwn++) {
      //   var newAnswer = amountOwn = parseFloat(window.prompt("Enter Value",""));
      // }


      for(var row = 0; row < 9; row++){

        difference = amountOwn - AmountActucalySpent;
        amountOwn -= AmountActucalySpent;
        if(difference >= warningColorRed )
        {
          console.log("difference Color is red $" + difference);
          var colorRed = 2000;
          if (difference > colorRed) {
            alert("The Difference Amount needs ATTENTION!!! ")
          }
        }
        else if ( difference >= warningColorOrange) {
          console.log("difference Color is Orange $" + difference);
        }
        else if (difference > warningColorGreen || difference < warningColorGreen) {
          console.log("difference Color is Green $" + difference);
        }
        else{
          console.log("amount unknown");
        }
        console.log("*************************");

        if(amountOwn >= warningColorRed )
        {
          console.log("Amount Own Color is red $" + amountOwn);
          var colorRed = 2000;
          if (amountOwn > colorRed) {
            alert("The Amount Own needs ATTENTION!!! ")
          }
        }
        else if ( amountOwn >= warningColorOrange ) {
          console.log("Amount Own Color is Orange $" + amountOwn);

        }
        else if (amountOwn >= warningColorGreen || amountOwn <= warningColorGreen ) {
          console.log("Amount Own Color is Green $" + amountOwn);
        }
        else{
          console.log("amount unknown");
        }

        console.log("*************************");


        if(AmountActucalySpent >= warningColorRed )
        {
          console.log("Amount Actually Spent Color is red $" + AmountActucalySpent);
          var colorRed = 2000;
          if (AmountActucalySpent > colorRed) {
            alert("The Amount Actually Spent Amount needs ATTENTION!!! ")
          }
        }
        else if ( AmountActucalySpent >= warningColorOrange) {
          console.log("Amount Actually Spent Color is orange $" + AmountActucalySpent);

        }
        else if (AmountActucalySpent >= warningColorGreen || AmountActucalySpent <= warningColorGreen) {
          console.log("Amount Actually Spent Color is green $" + AmountActucalySpent);
        }
        else{
          console.log("amount unknown" + AmountActucalySpent);
        }


      }
}

var amountOwn = [1,2,3,4,5,6,7]  ;

function amountEnter(price){
  // for (var i = 0; i < 5; i++) {
  //   price[i] = parseInt(prompt(""))
  // }
  for (var i = 0; i < price.length; i++) {
    var total = 0;
    total += price[i];
  }
  return console.log("Amount is : " + total);
}

amountEnter(amountOwn);

  // if(num3 >= warningColorRed )
    // {
    //   console.log("Color is red");
    // }
    // else if ( num3 >= warningColorOrange) {
    //   console.log("Colred is Orange");
    //
    // }
    // else if (num3 >= warningColorGreen) {
    //   console.log("Color is Green");
    // }
    // if(num4 >= warningColorRed )
    // {
    //   console.log("Color is red");
    // }
    // else if ( num4 >= warningColorOrange) {
    //   console.log("Colred is Orange");
    //
    // }
    // else if (num4 >= warningColorGreen) {
    //   console.log("Color is Green");
    // }
    // // if(total >= warningColorRed){
    //   console.log("Total Colored red");
    // }
    // else if (total >= warningColorOrange) {
    //   console.log("Total Color Orange");
    // }
    // else if (total <= warningColorGreen) {
    //   console.log("Total Color Green");
    // }



    //
    // vat totalOfBill = 4;
    //
    // for(var numberOfBill = 0; numberOfBill <= totalOfBill; numberOfBill++ ){
    //   if(num1 >= warningColorRed )
    //   {
    //     console.log("Color is red");
    //   }
    //   else if ( num1 >= warningColorOrange) {
    //     console.log("Colred is Orange");
    //
    //   }
    //   else if (num1 >= warningColorGreen) {
    //     console.log("Color is Green");
    //   }
    // }

    // 8/21/17 Never leave aerror after you leave make sure it working before you go everytime time.













































//
=======
// Alphonse  Mboumba
// Main Calculation for the main page
// JavaScript File
// 08/19/17
// var firstTimeUserName = prompt("Enter a new user name #");
//
// var getUser = false;
//
// while (getUser == false) {
//   var userName = prompt("Enter user name: ");
//   if (userName == firstTimeUserName) {
//     console.log("Access Granted to " + firstTimeUserName);
//     getUser = true;
//   }
//
// }
// if (firstTimeUserName == null) {
//   alert("Sorry We ran intro some trouble please try again in a few minutes");
//   getUser
//
// }

function userInputDisplay() {
    var num1 = document.getElementById("userInput").value;
    var num2 = document.getElementById("userInput").value;
    var num3 = document.getElementById("userInput").value;
    var num4 = document.getElementById("userInput").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);
    num4 = parseFloat(num4);

    var total1 = num1 + num2 + num3 + num4;

    document.getElementById("userDisplayInput").innerHTML = num1;
    document.getElementById("userDisplayInput").innerHTML = num2;
    document.getElementById("userDisplayInput").innerHTML = num3;
    document.getElementById("userDisplayInput").innerHTML = num4;
    document.getElementById("totalDisplay").innerHTML = total1;


    // console.log("Total is: " + total);

    var warningColorRed = 1000;
    var warningColorOrange = 100;
    var warningColorGreen = 0;
    var AmountActucalySpent = parseFloat(prompt("Enter amount actually Spent"));
    var amountOwn = num1 + num2 + num3 + num4;
    var difference = amountOwn - AmountActucalySpent;

    console.log(amountOwn);
    console.log(difference);
    console.log(AmountActucalySpent);



      //
      // console.log("The difference is: " + difference);
      //
      // console.log("*************************");
      // for (var amountOwn = 0; amountOwn < 2; amountOwn++) {
      //   var newAnswer = amountOwn = parseFloat(window.prompt("Enter Value",""));
      // }


      for(var row = 0; row < 9; row++){

        difference = amountOwn - AmountActucalySpent;
        amountOwn -= AmountActucalySpent;
        if(difference >= warningColorRed )
        {
          console.log("difference Color is red $" + difference);
          var colorRed = 2000;
          if (difference > colorRed) {
            alert("The Difference Amount needs ATTENTION!!! ")
          }
        }
        else if ( difference >= warningColorOrange) {
          console.log("difference Color is Orange $" + difference);
        }
        else if (difference > warningColorGreen || difference < warningColorGreen) {
          console.log("difference Color is Green $" + difference);
        }
        else{
          console.log("amount unknown");
        }
        console.log("*************************");

        if(amountOwn >= warningColorRed )
        {
          console.log("Amount Own Color is red $" + amountOwn);
          var colorRed = 2000;
          if (amountOwn > colorRed) {
            alert("The Amount Own needs ATTENTION!!! ")
          }
        }
        else if ( amountOwn >= warningColorOrange ) {
          console.log("Amount Own Color is Orange $" + amountOwn);

        }
        else if (amountOwn >= warningColorGreen || amountOwn <= warningColorGreen ) {
          console.log("Amount Own Color is Green $" + amountOwn);
        }
        else{
          console.log("amount unknown");
        }

        console.log("*************************");


        if(AmountActucalySpent >= warningColorRed )
        {
          console.log("Amount Actually Spent Color is red $" + AmountActucalySpent);
          var colorRed = 2000;
          if (AmountActucalySpent > colorRed) {
            alert("The Amount Actually Spent Amount needs ATTENTION!!! ")
          }
        }
        else if ( AmountActucalySpent >= warningColorOrange) {
          console.log("Amount Actually Spent Color is orange $" + AmountActucalySpent);

        }
        else if (AmountActucalySpent >= warningColorGreen || AmountActucalySpent <= warningColorGreen) {
          console.log("Amount Actually Spent Color is green $" + AmountActucalySpent);
        }
        else{
          console.log("amount unknown" + AmountActucalySpent);
        }


      }
}

var amountOwn = [1,2,3,4,5,6,7]  ;

function amountEnter(price){
  // for (var i = 0; i < 5; i++) {
  //   price[i] = parseInt(prompt(""))
  // }
  for (var i = 0; i < price.length; i++) {
    var total = 0;
    total += price[i];
  }
  return console.log("Amount is : " + total);
}

amountEnter(amountOwn);

  // if(num3 >= warningColorRed )
    // {
    //   console.log("Color is red");
    // }
    // else if ( num3 >= warningColorOrange) {
    //   console.log("Colred is Orange");
    //
    // }
    // else if (num3 >= warningColorGreen) {
    //   console.log("Color is Green");
    // }
    // if(num4 >= warningColorRed )
    // {
    //   console.log("Color is red");
    // }
    // else if ( num4 >= warningColorOrange) {
    //   console.log("Colred is Orange");
    //
    // }
    // else if (num4 >= warningColorGreen) {
    //   console.log("Color is Green");
    // }
    // // if(total >= warningColorRed){
    //   console.log("Total Colored red");
    // }
    // else if (total >= warningColorOrange) {
    //   console.log("Total Color Orange");
    // }
    // else if (total <= warningColorGreen) {
    //   console.log("Total Color Green");
    // }



    //
    // vat totalOfBill = 4;
    //
    // for(var numberOfBill = 0; numberOfBill <= totalOfBill; numberOfBill++ ){
    //   if(num1 >= warningColorRed )
    //   {
    //     console.log("Color is red");
    //   }
    //   else if ( num1 >= warningColorOrange) {
    //     console.log("Colred is Orange");
    //
    //   }
    //   else if (num1 >= warningColorGreen) {
    //     console.log("Color is Green");
    //   }
    // }

    // 8/21/17 Never leave aerror after you leave make sure it working before you go everytime time.













































//
>>>>>>> 309abed7b9bd24f2e4e575c53dbf9739d6c22ff1

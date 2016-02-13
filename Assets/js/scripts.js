//this targets each component that requires input in the form
//can you put these all in an array using javascript?
var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var emailAddress = document.getElementById("email-address");
var countryName = document.getElementById("country");
var biographyContent = document.getElementById("biography");
var phoneNumber = document.getElementById("phone-number");
var affiliationsName = document.getElementById("affiliations");
var userOccupation = document.getElementById("occupation");
var catName = document.getElementById("cat-name");
var favGadget = document.getElementById("fav-gadget");
var talentType = document.getElementById("talent");
var favDrink = document.getElementById("drink");
var specialPowers = document.getElementById("powers");
var weaponChoice = document.getElementById("weapon");
var userComment = document.getElementById("comments");

//an array of all variables
var userInputs =[firstName, lastName, emailAddress, countryName, biographyContent, phoneNumber, affiliationsName, userOccupation, catName, favGadget, talentType, favDrink, specialPowers, weaponChoice, userComment];

//this targets the whole form
// var formBody = document.getElementById("whole-form");

//this targets the "submit your data" button at the bottom of the screen
var submitButton = document.getElementById("submit");

//this prints out the values submitted to the form
//console.log(the input for each element)
submitButton.addEventListener("click", function(){
  for (i=0; i<userInputs.length; i++){
    console.log(userInputs[i].value);
  }
});

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

//this targets the "submit your data" button at the bottom of the screen
var submitButton = document.getElementById("submit");

//this prints out the values submitted to the form
//console.log(the input for each element)
//then, the form is cleared. all values input are cleared AKA set to an empty string.
submitButton.addEventListener("click", function(){
  for (i=0; i<userInputs.length; i++){
    console.log(userInputs[i].value);
  }
  for (i=0; i<userInputs.length; i++){
    userInputs[i].value="";
  }
});

//this targets the text field and text area elements, which have been given a class of "white-border" by default
var colorChange = document.getElementsByClassName("white-border");

for (i = 0; i < colorChange.length; i++){
  ( function(){
    var currentChangedElement = colorChange[i];
    currentChangedElement.addEventListener ("click", function (){
      var blueBorder = document.getElementsByClassName("blue-border");
        for (j = 0; j < blueBorder.length; j++) {
          blueBorder[j].className = "white-border";
        }
      currentChangedElement.className = "blue-border";
    })
  }())
};

//dealing with the problem of assigning event listeners to every element in an array
//the event listener was only applying to the last element in the array (the for loop looped through every element in the array, then applied the className change to the last element, NOT the element that was clicked)
//was able to base solution off of the discussion found here:
//http://stackoverflow.com/questions/19586137/addeventlistener-using-for-loop-and-passing-values

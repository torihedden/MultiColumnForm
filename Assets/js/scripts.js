//this targets each component that requires input in the form
var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var emailAddress = document.getElementById("email-address");
var countryName = document.getElementById("country");
var biographyContent = document.getElementById("biography");
var phoneNumber = document.getElementById("phone-number");
var affiliationsName = document.getElementById("affiliations");
var occupation = document.getElementById("occupation");

//this targets the whole form
var formBody = document.getElementById("whole-form");


//this targets the submit your data button at the bottom of the screen
var submitButton = document.getElementById("submit");


//this prints out the values submitted to the form
//console.log(the input for each element)
submitButton.addEventListener("click", function(){
  console.log(firstName.value);
  console.log(lastName.value);
  console.log(emailAddress.value);
  console.log(countryName.value);
  console.log(biographyContent.value);
  console.log(phoneNumber.value);
  console.log(affiliationsName.value);
  console.log(occupation.value);
});



// function myFunction() {
//     var x = document.getElementById("frm1");
//     var text = "";
//     var i;
//     for (i = 0; i < x.length ;i++) {
//         text += x.elements[i].value + "<br>";
//     }
//     document.getElementById("demo").innerHTML = text;
// }

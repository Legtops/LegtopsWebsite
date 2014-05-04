var ref = new Firebase("https://rizer-email.firebaseio.com/contacts"); /*Initialize firebase*/

var userEmail = document.getElementById("emailInput").value; /*Read the email the user typed in*/

var submit = function (userEmail) {
    alert("sending email"); /*Popup window*/
 	ref.push({email: userEmail}); /*Pushes data to firebase*/
 	document.getElementById("submitButton").value = "Thank you!";
    return false;
}
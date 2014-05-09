var ref = new Firebase("https://rizer-email.firebaseio.com/contacts"); /*Initialize firebase*/

var submit = function (userEmail) {
    alert("sending email"); /*Popup window*/
    var userEmail = document.getElementById("emailInput").value; /*Read the email the user typed in*/
 	ref.push({email: userEmail}); /*Pushes data to firebase*/
 	document.getElementById("submitButton").value = "Thank you!";
    return false;
}

var submitFeedback = function (userEmail, userFeedback) {
    alert("sending feedback"); /*Popup window*/
    var userFeedback = document.getElementById("feedbackInput").value;
    var userEmail = document.getElementById("emailInput").value;
 	ref.push({email: userEmail, feedback: userFeedback}); /*Pushes data to firebase*/
 	document.getElementById("submitButton").value = "Thank you!";
    return false;
}
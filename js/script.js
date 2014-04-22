
var ref = new Firebase("https://rizer-email.firebaseio.com/contacts");

var userEmail = document.getElementById("email-input").value;
var userName = "Placeholder";

var clickSubmit = document.getElementById("submitButton");
clickSubmit.onclick = submit;


function submit(userName, userEmail) {
  alert("sending email");
  return false;
}

             function submit(userName, userEmail) {
               ref.set({id: userName, email: userEmail});
               };

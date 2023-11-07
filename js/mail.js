const firebaseConfig = {
    apiKey: "AIzaSyBRJ5iNIMDOn9FAu0DH6V4ZDEwRQuW5zKU",
    authDomain: "groprofox.firebaseapp.com",
    databaseURL: "https://groprofox-default-rtdb.firebaseio.com",
    projectId: "groprofox",
    storageBucket: "groprofox.appspot.com",
    messagingSenderId: "916346866160",
    appId: "1:916346866160:web:c2eae421837af843aa7535"
  };


firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("groprofox");

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var firstname = getElementVal("fname");
    var lasttname = getElementVal("lname");
    var email = getElementVal("email");
    var phone = getElementVal("phonenum");
    var msgContent = getElementVal("msgcon");

    saveMessages(firstname, lasttname, email, phone, msgContent);

 //   enable alert
 document.querySelector(".alert").style.display = "block";

 //   remove the alert
 setTimeout(() => {
   document.querySelector(".alert").style.display = "none";
 }, 3000);

 //   reset the form
 document.getElementById("contactForm").reset();
}


const saveMessages = (firstname, lasttname, email, phone, msgContent)=>{
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        firstname : firstname,
        lasttname : lasttname,
        email : email,
        phone : phone,
        msgContent : msgContent
    });
};
const getElementVal = (id)=>{
    return document.getElementById(id).value;
};
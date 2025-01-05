var form = document.getElementById("form");
var email = document.getElementById("email");
var pass = document.getElementById("password");
var email_error = document.getElementById("email_e");
var pass_error = document.getElementById("pass_e");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailValue = email.value;
  const passValue = pass.value;
  if (
    emailValue.length >= 8 &&
    emailValue.includes('@') &&
    emailValue.includes('.') &&
    emailValue.endsWith('@gmail.com')
  ) {
    console.log("البريد الإلكتروني صحيح");
    email_error.style.display = "none";
  } else {
    console.log("البريد الإلكتروني غير صحيح");
    email_error.style.display = "block";
    return; 
  }
  const passPattern = /^[a-zA-Z0-9]{9,}$/;
  if (!passPattern.test(passValue)) {
    
    pass_error.style.display = "block";
    return; 
  } else {
    
    pass_error.style.display = "none";
  }

  let users = JSON.parse(localStorage.getItem('users')) || [];
  const userExists = users.some(user => user.email === emailValue);

  if (userExists) {
    alert("email alredy exite");
  } else {
    users.push({ email: emailValue, password: passValue });
    localStorage.setItem('users', JSON.stringify(users));
    alert("Registeration Done");
    form.submit(); 
  }
});

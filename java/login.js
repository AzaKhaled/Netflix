var form = document.getElementById("form");
var email = document.getElementById("email");
var pass = document.getElementById("password");
var email_error = document.getElementById("email_e");
var pass_error = document.getElementById("pass_e");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailValue = email.value.trim();
  const passValue = pass.value.trim();

  
  let users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.email === emailValue);

  if (user) {
    if (user.password === passValue) {
      console.log("تم تسجيل الدخول بنجاح");
      pass_error.style.display = "none";
      alert("تم تسجيل الدخول بنجاح!");
      form.submit()
      
      
    } else {
      console.log("ok");
      pass_error.style.display = "block";
      
    }
  } else {
    console.log("البريد الإلكتروني غير موجود");
    email_error.style.display = "block";
    
  }
});
// ✅ التحقق من البريد الإلكتروني
  // if (
  //   emailValue.length >= 8 &&
  //   emailValue.includes('@') &&
  //   emailValue.includes('.') &&
  //   emailValue.endsWith('@gmail.com')
  // ) {
  //   console.log("البريد الإلكتروني صحيح");
  //   email_error.style.display = "none";
  // } else {
  //   console.log("البريد الإلكتروني غير صحيح");
  //   email_error.style.display = "block";
  //   email_error.textContent = "البريد الإلكتروني غير صحيح";
  //   return; // منع الإرسال إذا كان البريد غير صحيح
  // }

  // ✅ التحقق من كلمة المرور
  // const passPattern = /^[a-zA-Z0-9]{9,}$/;
  // if (!passPattern.test(passValue)) {
  //   console.log("كلمة المرور غير صحيحة");
  //   pass_error.style.display = "block";
  // //  pass_error.textContent = "كلمة المرور غير صحيحة";
  //   return; // منع الإرسال إذا كانت كلمة المرور غير صحيحة
  // } else {
  //   console.log("كلمة المرور صحيحة");
  //   pass_error.style.display = "none";
  // }

  // ✅ التحقق من وجود البريد وكلمة المرور في LocalStorage
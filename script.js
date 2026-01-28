

function validateForm() {
  let isValid =true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const level = document.getElementById('level');
    const goal = document.getElementById('goal');
    const time_slots = document.querySelectorAll ('input[name="time_slots"]:checked');

    const errorName = document.getElementById('error-name');
    const errorEmail = document.getElementById('error-email');
    const errorLevel = document.getElementById('error-level');
    const errorGoal = document.getElementById('error-goal');
    const errorTime = document.getElementById ('error-time');


if (name.value.trim().length < 3){
  errorName.textContent ="Please enter a valid Full Name";
  isValid = false;
}
/*const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        errorEmail.textContent = "Please enter a valid email";
        isValid = false;
    }*/
   if (email.value === "" || !email.includes("@") || !email.includes(".")) {
        errorEmail.textContent = "Please enter a valid email address.";
        isValid = false;
    }

   if (level.value === "") {
        errorLevel.textContent = "Please select your English level";
        isValid = false;
    }  
if (goal.value.trim().length < 3) {
        errorGoal.textContent = "Goal must be at least 3 characters";
        isValid = false;
    }

    if (time_slots.length === 0) {
        errorTime.textContent = "Select at least one time slot";
        isValid = false;
    }
    return isValid;
}


function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  let display = document.getElementById("greetings-text");
  if (user != "") {
      display.innerHTML = "Welcome back, " + user + "!";
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
       display.innerHTML = "Welcome, " + user + "!";
     } else {
      display.innerHTML = "Welcome!";
     }
  }
}



function myFunction() {
  var x = document.getElementById("nav-links");
  if (x.className === "nav-links") {
    x.className += " responsive";
  } else {
    x.className = "nav-links";
  }
}






/*document.addEventListener('DOMContentLoaded', function() {
const languagebutton = document.getElementById('change-language');
languagebutton.addEventListener('click', function() {
    window.location.href = "ua.html";
});
});
*/
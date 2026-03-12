let contact = document.getElementById("contact");

contact.addEventListener("click", sayHello);

function sayHello() {
  let button = document.getElementById("contact");
  let email = document.getElementById("email");
  if (email.textContent == "") {
    email.textContent = "fallsbh@dukes.jmu.edu";
    email.style.background = "yellow";
    email.hidden = true;
  }
  if (email.hidden == false) {
    email.toggleAttribute("hidden");
    button.textContent = "Say Hello!";
  } else {
    email.toggleAttribute("hidden");
    button.textContent = "Hide!";
  }


}

emailjs.init("zZ4n2Itiz20QjzYBf");

document.querySelector(".contact-form").addEventListener("submit", function (event) {

  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("message").value.trim();

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let subjectError = document.getElementById("subjectError");
  let messageError = document.getElementById("messageError");

  nameError.innerText = "";
  emailError.innerText = "";
  subjectError.innerText = "";
  messageError.innerText = "";

  let isValid = true;

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name) {
    nameError.innerText = "Name is required";
    isValid = false;
  }

  if (!email) {
    emailError.innerText = "Email is required";
    isValid = false;
  }

  else if (!emailPattern.test(email)) {
    emailError.innerText = "Enter valid email";
    isValid = false;
  }

  if (!subject) {
    subjectError.innerText = "Subject is required";
    isValid = false;
  }

  if (!message) {
    messageError.innerText = "Message is required";
    isValid = false;
  }

  if (!isValid) return;

  let params = {
    name: name,
    email: email,
    subject: subject,
    message: message
  };

  emailjs.send(
    "service_vlmvlet",
    "template_xjlgr9j",
    params
  )

  .then(function () {

    alert("Email Sent Successfully!");

    document.querySelector(".contact-form").reset();

  })

  .catch(function (error) {

    console.log(error);

    alert("Failed to send email");

  });

});
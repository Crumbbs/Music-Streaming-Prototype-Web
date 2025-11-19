const submitBtn = document.getElementById("submit-btn");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const age = document.getElementById("age");
const gender = document.getElementById("gender");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (name.value == "" || password.value == "" || age.value == "" || email.value == "" || gender.value == "") {
    alert("Please fill all the data");
    return false;
  } else if (age.value <= 0) {
    alert("Invalid age");
    return false;
  } else if (!email.value.endsWith("@gmail.com")) {
    alert("email must end with @gmail.com");
    return false;
  } else {
    alert("Registration Successful");
    document.getElementById("form").reset();
    return true;
  }
});

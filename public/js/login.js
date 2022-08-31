// Will be used for admin login function

// Login Function 
async function login() {

  // Getting User's Input

  // Username 
  const username = "Rocio Escobedo";
  // Email 
  const emailInput = document.getElementById("loginEmail").value;
  // Password 
  const passwordInput = document.getElementById("loginPass").value;
  // Login Button 
  const loginBtn = document.getElementById("loginBtn");

  // Calling POST req 
  await fetch("/api/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: username,
      email: emailInput,
      password: passwordInput
    })
  })
    // Then reload page, and redirect them to dashboard 
    .then(() => {
      location.reload();
      window.location.replace("/dashboard");
    })
    // check for errors 
    .catch(
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Worked!");
        }
      });
}

// When user clicks button, execute login function 
loginBtn.addEventListener("click", login);

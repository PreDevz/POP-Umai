// Will be used for admin login function

require("dotenv").config();

// Cache The DOM

// Email 
const emailInput = document.getElementById('loginEmail')
// Password 
const passwordInput = document.getElementById('loginPass')
// Login Button 
const loginBtn = document.getElementById('loginBtn')

async function login() {
  await fetch("/api/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: process.env.ADMIN_NAME,
      email: emailInput,
      password: passwordInput
    })
  })
    .then(() => {
      location.replace('/dashboard')
    })
    .catch(
      (err) => {
        err ? console.log(err) : console.log("good")
      });
}
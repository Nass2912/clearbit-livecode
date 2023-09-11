// Step 0 (Config)
// Select all requierd elements from the DOM and setup Bearer_token
const authorization = "Bearer sk_5761c02dcf858da1ef548625532be8ce";
const clearbitForm = document.querySelector("#clearbitForm")
const input = document.querySelector("#clearbitEmail")
const userName = document.querySelector("#userName")
const userEmail = document.querySelector("#userEmail")
const userBio = document.querySelector("#userBio")
const userLocation = document.querySelector("#userLocation")

// Step 3
// Display the content on our page
const insertDetailsToDom = (data) => {
  userName.innerText = data.name.fullName
  userEmail.innerText = data.email
  userBio.innerText = data.bio
  userLocation.innerText = data.location
}

// Step 2
// fetch the clearbit API with the value from input tag
const fetchClearBit = (event) => {
  event.preventDefault()
  const url = `https://person.clearbit.com/v1/people/email/${input.value}`
  fetch(url, {
    headers: { Authorization: authorization }
  }).then(response => response.json())
  .then(insertDetailsToDom)
}

// Step 1
// Get the email from the input tag
clearbitForm.addEventListener("submit", fetchClearBit)

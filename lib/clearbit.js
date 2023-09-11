const authorization = "Bearer sk_5761c02dcf858da1ef548625532be8ce";
// TODO

// Step 1
// Get the email from the input tag
const clearbitForm = document.querySelector("#clearbitForm")
const input = document.querySelector("#clearbitEmail")
const userName = document.querySelector("#userName")
const userEmail = document.querySelector("#userEmail")
const userBio = document.querySelector("#userBio")
const userLocation = document.querySelector("#userLocation")

const insertDetailsToDom = (data) => {
  console.log(data)
  userName.innerText = data.name.fullName
  userEmail.innerText = data.email
  userBio.innerText = data.bio
  userLocation.innerText = data.location
}

const fetchClearBit = (query) => {
  const url = `https://person.clearbit.com/v1/people/email/${query}`
  fetch(url, {
    headers: { Authorization: authorization }
  }).then(response => response.json())
  .then(data => insertDetailsToDom(data))
}

clearbitForm.addEventListener("submit", (event) => {
  event.preventDefault()
  fetchClearBit(input.value)
})
// Step 2
// fetch the clearbit API with the value from input tag

// Step 3
// Display the content on our page

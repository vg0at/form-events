//grab the form
const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault();
console.log(event)

// const name = document.querySelector('#name')
// console.log(name.value)
// console.log(event.target.name.value);

const name = event.target.name.value;
const phone = event.target.phone.value;
const notes = event.target
const relationship = event.target.relationship.value;

// // calling function
// generateContact(name, phone, email, notes, relationship);
// form.reset();


});


const form = document.querySelector("#new-contact")

form.addEventListener("submit", (event)=>{
  event.preventDefault();
  // console.log(event)

  // const name = document.querySelector("#name");
  // console.log(name.value)
  // console.log(event.target)
  // console.log(event.target.name.value)

  const name = event.target.name.value
  const phone = event.target.phone.value
  const email = event.target.email.value
  const notes = event.target.notes.value 
  const relationship = event.target.relationship.value
  console.log(relationship) 
  // let checkedRel;

  
  // for(let i =0; i < relationship.length; i++){
  //   // console.log(relationship[i].value, relationship[i].checked)
  //   if(relationship[i].checked){
  //     checkedRel = relationship[i].value
  //   }
  // }
  // console.log(name, phone, email, notes)

  generateContact(name,phone,email,notes,relationship);
  form.reset();
})
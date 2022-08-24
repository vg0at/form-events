function contactTemplate (name, telephone, email, notes,relationship) {
    const li = document.createElement("li");
    li.textContent += name;
    
    if (telephone) {
      const strong = document.createElement("strong");
      strong.textContent = "Tel: ";
      li.append(document.createElement("br"), strong, telephone);
    }
  
    if (email) {
      const strong = document.createElement("strong");
      strong.textContent = "Email: ";
      li.append(document.createElement("br"), strong, email);
    }
  
    if (relationship) {
      const strong = document.createElement("strong");
      strong.textContent = "Relationship: ";
      li.append(document.createElement("br"), strong, relationship);
    }
  
    if (notes) {
      li.append(document.createElement("br"), notes);
    }
  
    return li;
  }
  
  function generateContact (name, telephone, email, notes, relationship) {
    const li = contactTemplate(name, telephone, email, notes,relationship);
  
    const ul = document.querySelector("ul");
    ul.append(li);
    updateContactCount();
  }
  
  function updateContactCount(){
    //find element/tag with contact count 
    const contactCountEl = document.querySelector(".contact-count")
    // const contactsLi = document.querySelectorAll("li")
    // console.log(contactsLi)
    // const count = contactsLi.length;
    // contactCountEl.textContent = `(${count} Contacts)`
  
    contactCountEl.textContent = `(${document.querySelectorAll("li").length} Contacts)`
    
  }
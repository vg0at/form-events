function contactTemplate(name, telephone, email, notes, relationship) {
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

function generateContact(name, telephone, email, notes, relationship) {
  const li = contactTemplate(name, telephone, email, notes, relationship);

  const ul = document.querySelector("ul");
  contactCount();
  ul.append(li);
}

function contactCount() {
  const contactCountEl = document.querySelector("span.contact-count")
  const contactList = document.querySelectorAll("li");
  const count = contactList.length;
  contactCountEl.textContent = `(${count} Contacts)`
}
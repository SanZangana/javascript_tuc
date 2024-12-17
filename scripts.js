function getName() {
  let name = prompt("Vad heter du?");

  return name.toUpperCase();
}

let userName = getName();

let nameLength = userName.length;

alert(`Hej ${userName}, visste du att ditt namn har ${nameLength} bokstäver?`);

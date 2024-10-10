// Initial array of cats
let cats = ["Milo", "Otis", "Garfield"];

// Function to destructively append a cat to the end
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Function to destructively prepend a cat to the beginning
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Function to destructively remove the last cat
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Function to destructively remove the first cat
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Function to append a cat and return a new array (non-destructive)
function appendCat(name) {
  return [...cats, name];
}

// Function to prepend a cat and return a new array (non-destructive)
function prependCat(name) {
  return [name, ...cats];
}

// Function to remove the last cat and return a new array (non-destructive)
function removeLastCat() {
  return cats.slice(0, -1);
}

// Function to remove the first cat and return a new array (non-destructive)
function removeFirstCat() {
  return cats.slice(1);
}

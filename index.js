// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield"
]
console. log (cats)
function destructivelyAppendCat(name) {
    cats.push("Ralph"); 
}

function destructivelyPrependCat (name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat (Milo){
    cats.pop("Milo")
}

function destructivelyRemoveFirstCat (Milo){
    cats.shift("Milo")
}

function appendCat(name) {
    return [...cats, "Broom"]; 
}

function prependCat(name) {
    return ["Arnold", ...cats];
}
function removeLastCat (){
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
    return cats.slice(1); 
}



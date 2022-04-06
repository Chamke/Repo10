var myPet = {
    species: "unknown",
    name: "Rex",
    legs: 4,
    friends:["two","strings"]
}

function myFunction(myObj){

    return myObj;
}

console.log(myFunction(myPet));
module.exports = { myPet, myFunction };
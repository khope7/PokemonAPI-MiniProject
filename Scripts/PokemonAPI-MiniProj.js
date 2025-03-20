// Updating Carousel with correct information
const firstSlide = document.getElementById("firstSlide");
firstSlide.innerHTML = "Growlithe";
const firstSlideParagraph = document.createElement("p");
firstSlideParagraph.innerHTML = "This is a fire type pokemon.";
document.getElementById("fs").appendChild(firstSlideParagraph)


const secondSlide = document.getElementById("secondSlide");
secondSlide.innerHTML = "Pikachu and Charmander";
const secondSlideParagraph = document.createElement("p");
secondSlideParagraph.innerHTML = "Electric and fire type pokemon.";
document.getElementById("ss").appendChild(secondSlideParagraph)

const thirdSlide = document.getElementById("thirdSlide");
thirdSlide.innerHTML = "Charizard";
const thirdSlideParagraph = document.createElement("p");
thirdSlideParagraph.innerHTML = "Charmanders ultimate form!";
document.getElementById("ts").appendChild(thirdSlideParagraph)


//using style to adjust findButton element
function changeColor(){
    document.getElementById("findButton").style.backgroundColor = "lightblue";
}

function removeChangeColor(){
    document.getElementById("findButton").style.backgroundColor = "transparent";
}





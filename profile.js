let color = document.querySelector('#color')

const showColor = (event) => {
    alert("Its red man!");
}

color.addEventListener("click", showColor);

const showPlace = (event) => {
    alert("Bohol is the best ;)");
}

document.querySelector('#place').addEventListener("click", showPlace);

const showRitual = (event) => {
    alert("two dews before starting to code.");
}

document.querySelector('#ritual').addEventListener("click", showRitual);
const id = document.querySelector(".id");
const quote = document.querySelector(".quote");
const btn = document.querySelector(".btn")



function random () {

    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {id.textContent=`#${data.slip.id}`;quote.textContent=`${data.slip.advice}`})
}

btn.addEventListener("click",() => random ())
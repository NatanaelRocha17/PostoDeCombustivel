const btn = document.querySelector("#btn-mobile")

function clicou(event){
    if(event.type === "click") event.preventDefault
    const nav = document.querySelector("#nav")
    //togle significa adicione caso não tenha, remova caso tenha 
    nav.classList.toggle("active")
}

btn.addEventListener("click", clicou)

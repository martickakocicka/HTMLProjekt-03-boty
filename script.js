const ramecek = document.querySelector(".velikosti")
ramecek.addEventListener("click", (event)=>{
    console.log("probehlo")
    event.target.classList.toggle("ramecek")
   
})
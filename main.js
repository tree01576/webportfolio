document.querySelector(".menu").addEventListener("click",()=>{
    document.querySelector(".sidebar").style.left = 0
})
document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector(".sidebar").style.left = "-300px"
})
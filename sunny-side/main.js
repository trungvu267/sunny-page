const bars = document.querySelector(".bars")
const menu = document.getElementById("menu")
const display1 = document.querySelector(".display1")
let current = true
bars.addEventListener('click',()=>{
    
    if(current){
        bars.innerHTML = `<i class="fas fa-times"></i>`
        menu.classList.remove('display1')
        menu.classList.add('display')
        current = 0
    }else{
        bars.innerHTML = `<i class="fas fa-bars"></i>`
        menu.classList.remove('display')
        menu.classList.add('display1')
        current = 1
    }
})


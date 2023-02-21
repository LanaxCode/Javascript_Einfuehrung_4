const inputAge =document.querySelector("form input[type='number']")
const output = document.querySelector('p')



function adult(){
     
    if(inputAge.value >= 18){
        output.innerHTML ="Volljährig"
    } else {
        output.innerHTML = "minderjährig"
    }
}
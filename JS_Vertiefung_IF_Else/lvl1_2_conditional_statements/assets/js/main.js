const inputAge =document.querySelector("form input[type='number']")
const output = document.querySelector('p:nth-of-type(2)')

function weather(){
    if(inputAge.value >= 8  ){
        output.innerHTML = "super"
    } else if (inputAge.value >= 6 ){
        output.innerHTML = "gut"
    } else if (inputAge.value >= 3 ){
        output.innerHTML = "okay"
    } else { 
        output.innerHTML = "schlecht"
}

}
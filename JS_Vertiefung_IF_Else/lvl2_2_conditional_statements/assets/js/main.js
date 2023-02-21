const slider = document.querySelector("form input[type='range']")
const output1 = document.querySelector('p:nth-of-type(1)')
const output2 = document.querySelector('p:nth-of-type(2)')
const points = document.querySelector('h3')


function checkAirQuality(){
    console.log(slider.value)
    if (slider.value <= 50){
        console.log(slider.value <= 50)
        output1.innerHTML = "Level of health concern: Good"
        output2.innerHTML = "Level of health effect: Little or no risk"
        points.innerHTML = slider.value
        document.body.style.backgroundColor = "green"
    } else if (slider.value >50 && slider.value <=100){
        output1.innerHTML =" Level of health concern: Moderate "
        output2.innerHTML = "Level of health effect: Acceptable quality"
        points.innerHTML = slider.value
        document.body.style.backgroundColor = "yellow"

    } else if (slider.value >101 && slider.value <=150){
        output1.innerHTML ="Level of health concern: Unhealthy for sensitive groups  "
        output2.innerHTML = "Level of health effect: Generable publics not likely affected"
        points.innerHTML = slider.value
        document.body.style.backgroundColor = "orange"
    }


}
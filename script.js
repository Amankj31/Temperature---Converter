var cel = document.getElementById("celsius")
var fah = document.getElementById("fahrenheit")

cel.addEventListener('input', function(){
    let c = this.value;
    let f = (c * 9/5) + 32;
    fah.value = f;
})

fah.addEventListener('input', function(){
    let f = this.value;
    let c = (f - 32) * 5/9;
    cel.value = c;
})

let btnClear = document.querySelector('button');
let input = document.querySelectorAll('input');

btnClear.addEventListener('click' , () => {
    input.forEach(input => input.value = ' ')
});





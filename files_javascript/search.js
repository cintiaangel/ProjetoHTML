
function validate(e) {
    e.preventDefault()
    var input = e.target[0];
    if(input.value == ""){
        alert('prencha')
    }
    console.log(e)
}


window.onload = function() {
    const form = document.querySelector('#my-form');
    form.addEventListener('submit', validate)
}



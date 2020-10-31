function validate(e) {
    e.preventDefault()
    var input = e.target[0];
    var campo = document.querySelector('.error_message');
    var regex = /[^#]+/g;
    console.log(input)
    console.log(regex.test(input));

    //mensagens de erro para o usuario, em casos que não é o esperado

    if(input.value == ''){
        campo.innerHTML = 'Ops, campo vazio! Digite o assunto de interrese no campo de busca.'
        campo.style.display = 'block';
	}else if(input.value.length > 140){
        campo.innerHTML = 'Ops hashtag muito extensa digite uma frase com no minimo 140 caracteres'
        campo.style.display = 'block'
    }else {
        campo.style.display = 'none';
    }

    if (input.value.match(regex)[0]) {
        console.log(input.value.match(regex)[0])
    }
}


window.onload = function() {
    const form = document.querySelector('#my-form');
    form.addEventListener('submit', validate)
}



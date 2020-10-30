<script> function validar() {

    var user = cadastro.usuario.value;
    var password = cadastro.senha.value;

if(user=="") {alert("É preciso preencher este campo"); cadastro.usuario.focus();return false;}

if(password=="") {alert("É preciso preencher este campo"); cadastro.senha.focus();return false;}

if (user!="academy@cocreare.com.br"){alert("Login inválido");cadastro.usuario.focus();return false;}

if (password!="123456") {alert("Senha inválida");cadastro.senha.focus();return false;} ;

}
</script>
function checalogin(){
    // declarei o usuário e senha como um valor ( o que vai ser digitado)
    var usuario = document.getElementById('user').value
    var pass = document.getElementById('senha').value
    // Se usário e senha estiverem certos irão para uma próxima pagina
if(usuario == "C021432" && pass == "BRASIL.020"){
    // links para a próxima pagina
    location.href = "sistema.html"
}else if (usuario == 0 || pass == 0){
    window.alert('preencha todos os campos')
} else{
    window.alert('Usuário ou senha incorreto(s)')
}
}
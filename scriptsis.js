const sup = document.getElementById('titulox');
const titulo = "Suporte Roaming";
const intervalo = 300;

function showText(sup, titulo, intervalo) {
    const char = titulo.split('').reverse();

    const typer = setInterval(() => {
        // inserir a letra no HTML pop irá retirar a última letra 
        if(!char.length){
            return clearInterval(typer)
        }
        const next = char.pop();
        sup.innerHTML += next;
    }, intervalo);
}

showText(sup, titulo, intervalo);

    

function verificar() {
  let cha = document.getElementsByName('sino')
    let mod = document.getElementsByName('radmod')
    let imga = document.querySelector('.slider')
    let imgf = document.querySelector('.iphone')

    // checa se foi selecionado o radio "não", se sim irá encaminhar a outra página
    if(cha[1].checked){
        window.confirm('Abra um chamado solcitando o serviço em: 0800 880 7447 ou no site a seguir')
        window.location.href='https://bunge.service-now.com/selfservice_bbr'
    }
    // checa se foi selcionado sim e o modelo qual foi selecionado
    // as imagens permancem como "none" até o botão ser acionao e o parametros estiverem certos, após isso se tornam "block e aparecem"
if(cha[0].checked && mod[0].checked && imga.style.display === "none"){      
    imga.style.display = "block"
}else{
    imga.style.display = "none"
}
if(cha[0].checked && mod[1].checked && imgf.style.display === "none"){
    imgf.style.display = "block"
}else{
    imgf.style.display ="none"
}
}
// função de slide automático para os 2 modelos
let counta = 1
document.getElementById("radio1").checked = true;

        setInterval(function(){
            nextImage();
        },7000)

        function nextImage(){
            counta++;
            if(counta>5){
                counta = 1;
            }
            document.getElementById('radio'+counta).checked = true;
        }
        let counti = 1
document.getElementById("radioi1").checked = true;

        setInterval(function(){
            nextImagei();
        },7000)

        function nextImagei(){
            counti++;
            if(counti>5){
                counti = 1;
            }
            document.getElementById('radioi'+counti).checked = true;
        }


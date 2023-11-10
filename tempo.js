let chave="xebcd482eda57fa6714c1c2ba91885"

function colocarNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML="Tempo em" + dados.name
    document.querySelector(".temp").innerHTML= Math.floor(dados.main.temp)+"°C"
    document.querySelector(".descricao").innerHTML= dados.weather[0].description
    document.querySelector(".icone").src= "http://openweathermap.org/img/wn/"+dados.weather[0].icon + ".png"

}

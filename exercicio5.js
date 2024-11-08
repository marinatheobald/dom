document.addEventListener("keydown", function(event){
    // obtém o nome da tecla pressionada e atualiza a mensagem
    document.getElementById("mensagem").innerText = alert('Você pressionou: '+ event.key)
    //mostra na tela a tecla clicada 
})
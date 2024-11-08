function mudarTexto(){
    // Solicita um novo texto
    let novoTexto = prompt("Digite o novo texto:");
    
    // Se o usuário digitar algo, atualiza o texto; caso contrário, mantém o texto atual
    if (novoTexto) {
        document.getElementById("texto").innerText = novoTexto;
    }
}

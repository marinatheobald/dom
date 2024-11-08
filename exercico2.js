let contador = 0;
  // incrementar o contador e atualizar os numeros
  function contarCliques() {
    contador++;   //incrementa os cliques 
      document.getElementById("contador").innerText = contador;
    }

    //resetar o contador 
    function resetarContador() {
      contador = 0;
      document.getElementById("contador").innerText = contador;
    }
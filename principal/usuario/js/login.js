function Login() {
    var done=0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario=usuario.toLowerCase();
    var senha= document.getElementsByName('senha')[0].value;
    senha=senha.toLowerCase();
    if (usuario=="admin" && senha=="admin") {
      window.location="/p/admin.html";
      done=1;
    }
    if (done==0) { alert("Dados incorretos, tente novamente"); }
  }

  function mais(){
    var atual = document.getElementById("total").value;
    var novo = atual - (-1); //Evitando Concatenacoes
    document.getElementById("total").value = novo;
  }
  
  function menos(){
    var atual = document.getElementById("total").value;
    if(atual > 0) { //evita números negativos
      var novo = atual - 1;
      document.getElementById("total").value = novo;
    }
  }
// 23/03/2017 - Everaldo Gomes - everaldo.gomes@ifpr.edu.br

//Use este código caso o Javascript esteja embaixo do CSS
document.addEventListener('DOMContentLoaded', function () {
  let botao = document.getElementById('enviar');
  botao.addEventListener('click',function(){
    let mensagem = document.getElementById('mensagem').value;
    let chat = document.getElementById('chat');
    chat.innerHTML = new Date() + chat.innerHTML + mensagem + "\n";
    document.getElementById('mensagem').value = " ";
  });
});

//Use este código, caso contrário
window.onload =function(){
};

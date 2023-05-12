let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 4000)

function nextImage(){
    count++;
    if(count>4){
        count =1;
    }

    document.getElementById("radio"+count).checked = true;
}

function enviarAvaliacao() {
    // Capturar os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var avaliacao = document.getElementById("avaliacao").value;
    var avaliados = document.getElementById("avaliados").value;

    var boxResultado = document.getElementById("box-resultado");
	var resultadoHTML = "<h2>Obrigado pela sua avaliação, " + nome + "!</h2>";
	resultadoHTML += "<p>Sua avaliação:</p>";
	resultadoHTML += "<blockquote>" + avaliacao + "</blockquote>";
	boxResultado.innerHTML = resultadoHTML;
	boxResultado.style.display = "block";
}

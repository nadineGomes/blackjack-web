var pontos1 = 0;
var pontos2 = 0;

function valorAleatorio() {
    min = Math.ceil(1);
    max = Math.floor(13);
    var aleatorio = Math.floor(Math.random() * (max - min)) + min;
    return aleatorio;
}
function nomes(){
    jogador1 = window.prompt("Informe o nome do jogador 1:");
    jogador2 = window.prompt("Informe o nome do jogador 2:");

    if (jogador1 != "" && jogador1 != null && jogador2 != "" && jogador2 != null) {
        document.getElementById("btn_jogador_1").removeAttribute('disabled');
        document.getElementById("btn_parar_1").removeAttribute('disabled');
        document.getElementById("btn_iniciar").setAttribute('disabled', true);
        document.getElementById("nomeJogador1").innerHTML = jogador1;
        document.getElementById("nomeJogador2").innerHTML = jogador2;

        jogador1();
    }
    else {
        window.alert("É necessário informar os nomes dos jogadores");
    }


}

function jogador1() {
    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_parar2 = document.getElementById("btn_parar_2");
    var btn_reiniciar = document.getElementById("btn_reiniciar");
    var valor = valorAleatorio();

    var cartas1 = document.getElementById("cartas1");
    $(cartas1).attr("src", '/images/' + valor + '.png'); 

    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');
    $(btn_reiniciar).removeAttr('disabled', 'disabled');
   
    pontuação(1, valor);
    
   
    


}
function jogador2() {
    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_parar2 = document.getElementById("btn_parar_2");
    var valor = valorAleatorio();

    var cartas2 = document.getElementById("cartas2");
    $(cartas2).attr("src", '/images/' + valor + '.png'); 

    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');

    pontuação(2, valor);
    

    
}
function iniciar() {
    
    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_parar2 = document.getElementById("btn_parar_2");
    var btn_iniciar = document.getElementById("btn_iniciar");
    var btn_reiniciar = document.getElementById("btn_reiniciar");
    
   
    $(btn_jogador1).removeAttr('disabled', 'disabled');
    $(btn_parar1).removeAttr('disabled', 'disabled');

    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');
    $(btn_iniciar).attr('disabled', 'disabled');
    $(btn_reiniciar).attr('disabled', 'disabled');
    
    var cartas2 = document.getElementById("cartas2");
    var cartas1 = document.getElementById("cartas1");
    $(cartas2).attr("src", '/images/0.png'); 
    $(cartas1).attr("src", '/images/0.png');

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = "";


}
function reiniciar() {
    var resultado = document.getElementById('resultado');
    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_parar2 = document.getElementById("btn_parar_2");
    var btn_iniciar = document.getElementById("btn_iniciar");
    var btn_reiniciar = document.getElementById("btn_reiniciar");
    pontos1 = 0;
    pontos2 = 0;
   
    document.getElementById('jogador1').innerHTML = pontos1;
    document.getElementById('jogador2').innerHTML = pontos2;
    
    $(btn_jogador1).removeAttr('disabled', 'disabled');
    $(btn_parar1).removeAttr('disabled', 'disabled');

    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');
    $(btn_iniciar).attr('disabled', 'disabled');
    $(btn_reiniciar).attr('disabled', 'disabled');

    var cartas2 = document.getElementById("cartas2");
    var cartas1 = document.getElementById("cartas1");
    $(cartas2).attr("src", '/images/0.png'); 
    $(cartas1).attr("src", '/images/0.png');

    resultado.innerHTML = "";



}

function parar1() {

    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_parar2 = document.getElementById("btn_parar_2");
    var btn_reiniciar = document.getElementById("btn_reiniciar");

    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');

    $(btn_jogador2).removeAttr('disabled', 'disabled');
    $(btn_parar2).removeAttr('disabled', 'disabled');
    $(btn_reiniciar).removeAttr('disabled', 'disabled');

   


}
function parar2() {

    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_parar2 = document.getElementById("btn_parar_2");
    var btn_iniciar = document.getElementById("btn_iniciar");
    var btn_reiniciar = document.getElementById("btn_reiniciar");

    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');

    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');
    $(btn_iniciar).removeAttr('disabled', 'disabled');
    $(btn_reiniciar).attr('disabled', 'disabled');

    resultado();
    

}


function jogadas(jogador) {
    var valor = valorAleatorio();

    if (jogador == 1) {
        
        pontuação(1, valor);
    }
    else {
        

        pontuação(2, valor);
    }
    document.getElementById("btn_reiniciar").removeAttribute('disabled');
}

function pontuação(jogador, valor) {
    
    if (jogador == 1) {
        pontos1 += valor;
        if (pontos1 <= 21) {
            document.getElementById('jogador1').innerHTML = pontos1;
            // Jogando
            if (pontos1 == 21) {
                document.getElementById("btn_jogador_1").setAttribute('disabled', true);
            }

        }
        else {
            // Partida perdida
            document.getElementById('jogador1').innerHTML = pontos1;
            document.getElementById("btn_jogador_1").setAttribute('disabled', true);
            document.getElementById("btn_parar_1").setAttribute('disabled', true);

            document.getElementById("btn_jogador_2").removeAttribute('disabled');
            document.getElementById("btn_parar_2").removeAttribute('disabled');
        }
    }
    else if (jogador == 2) {
        pontos2 += valor;

        if (pontos2 <= 21) {
            // Jogando
            document.getElementById('jogador2').innerHTML = pontos2;
            if (pontos2 == 21) {
                document.getElementById("btn_jogador_2").setAttribute('disabled', true);
                document.getElementById("btn_parar_2").setAttribute('disabled', true);
                resultado();
            }
        }
        else {
            //Partida perdida
            document.getElementById('jogador2').innerHTML = pontos2;
            document.getElementById("btn_jogador_2").setAttribute('disabled', true);
            document.getElementById("btn_parar_2").setAttribute('disabled', true);
            resultado();
        }
        
    }      
}

function resultado() {
    var resultado = document.getElementById('resultado');
    var nomeJogador1 = document.getElementById("nomeJogador1");
    var nomeJogador2 = document.getElementById("nomeJogador2");

    if (pontos1 <= 21 && pontos2 <= 21) {
        if (pontos1 == pontos2) {
            resultado.innerHTML = "Empate!";

        }
        else if (pontos1 > pontos2) {
            resultado.innerHTML = nomeJogador1.innerHTML + " jogador 1 ganhou!";
        }
        else {
            resultado.innerHTML = nomeJogador2.innerHTML + " jogador 2 ganhou!";
        }
    }
    else {
        if (pontos1 > 21 && pontos2 <= 21) {
            resultado.innerHTML = nomeJogador2.innerHTML + " jogador 2 ganhou!";
        }
        else if (pontos1 <= 21 && pontos2 > 21) {
            resultado.innerHTML = nomeJogador1.innerHTML + " jogador 1 ganhou!";
        }
        else {
            resultado.innerHTML = "Sem vencedor";
        }
    }
}

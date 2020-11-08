//alert("Coloque os dados\nNão se pode superar 40 tablets no horario\nPara selacionar o horario basta clicar em cima dele.\nPara enviar clique em enviar.");
var i, hr, z, valormax = 45, n, geral = 0, tot = 0,erro;
var x = true;
var ch = document.getElementsByName("check"); 
function enviar(hora,quant){
    $.ajax({
        url : "http://" + ip + ":3000/tablets",  
        method:"POST",
        data : {
            nome:  document.getElementById("nome").value,
            quant: quant,
            dia: document.getElementById("dia").value,
            hora: hora
        },
        beforeSend : function(){
            $("#resultado").html("ENVIANDO...");
            
        },success: function(result) {
            var horario = hor(hora);
            geral ++;
            if(geral == tot){
                alert("Reserva(s) Realizada(s)!");
                window.location.href = "file:///C:/Users/McLovin/Documents/GitHub/IT/principal/novo/novo.html";
            } 
        }
        })
        .done(function(msg){
            $("#resultado").html(msg);
        })
        .fail(function(jqXHR, textStatus, msg){
            alert(msg);
        });
        
}
function verificar(hora, quant){
    $.ajax({
        url : "http://" + ip + ":3000/validar",
        method:"POST",
        data : {
            dia: document.getElementById("dia").value,
            hora: hora
        },success: function(result) {
            n = parseInt(result);
            var numerototal = n + quant;
            if(numerototal > 15){
                erro ++;
                var l = (numerototal - 15);
                var horario = hor(hora);
                alert("Valor no horario " + horario + " superado em " + l + "\nReserva no horario não pode ser realizada.");
                x = false;
                geral++;
                if(geral >= tot){
                    if (erro != geral) {
                        window.location.href = "file:///C:/Users/McLovin/Documents/GitHub/IT/principal/novo/novo.html";
                    }
                } 
            }else{
                enviar(hora, quant);
            }
        }
        
    });
}
function quant(){
    x = true;
    geral = 0;
    tot = 0;
    erro = 0;
    var qt = [];
    qt[0] = document.getElementById("q1");
    qt[1] = document.getElementById("q2");
    qt[2] = document.getElementById("q3");
    qt[3] = document.getElementById("q4");
    qt[4] = document.getElementById("q5");
    qt[5] = document.getElementById("q6");
    qt[6] = document.getElementById("q7");
    qt[7] = document.getElementById("q8");
    qt[8] = document.getElementById("q9");
    qt[9] = document.getElementById("q10");
    var date = new Date();
    var dia = date.toLocaleDateString();
    var diatab = dia[6] + dia[7] + dia[8] + dia[9] + "-" + dia[3] + dia[4] + "-" + dia[0] + dia[1];
    if(document.getElementById("dia").value == ""){
        alert("Data incorreta!!!");
        x=false;
    }
    if(document.getElementById("dia").value < diatab){
        alert("A data deve ser hoje ou depois!");
        x=false;
    }
    if(document.getElementById("nome").value == "Selecione o nome"){
        alert("Nome vazio!!!");
        x=false;
    }
    for(i=0, z = 0;i<10;i++){
        if(ch[i].checked == false){
                z++;
        }
        if(z == 10){
            alert("Nenhum horario selecionado!!!");
            x=false;
        }
    }
    for(i=0, z = 0;i<10;i++){
        if(ch[i].checked == true){
            if(qt[i].value < 1 || qt[i].value > 15){
                var horario = hor(ch[i].value);
                alert("Valor no horario " + horario + " está com a quantidade incorreta.\nReserva no horario não pode ser realizada.");
                x=false;
            }
            tot++;
        }else {
            if(qt[i].value > 0){
                var horario = hor(ch[i].value);
                alert(horario + " não está selecionado.\nReserva no horario não pode ser realizada.");
                x =false;
            }
        }
    }
    for(i=0, z = 0;i<10;i++){
        if(ch[i].checked == true){
            if(x === true){
                verificar(ch[i].value, parseInt(qt[i].value));
            }
        }
    }
}
function redirecionar(){
    window.location.href = "file:///C:/Users/TI/Documents/GitHub/Reserva-de-tablets/tablets/receber/receber.html";
}

function hor(hora) {
    var horario;
    switch(hora){
        case "07:30":   
            horario = "07:30 - 08:15";
        break;
        case "08:20":
            horario = "08:20 - 09:05";
        break;
        case "09:30":   
            horario = "09:30 - 10:15";
        break;
        case "10:20": 
            horario = "10:20 - 11:05";
        break;
        case "11:20": 
            horario = "11:20 - 12:05";
        break;
        case "13:00":
            horario = "13:00 - 13:45";
        break;
        case "13:50": 
            horario = "13:50 - 14:35";
        break;
        case "14:55": 
            horario = "14:55 - 15:40";
        break;
        case "15:45": 
            horario = "15:45 - 16:30";
        break;
        case "16:50": 
            horario = "16:50 - 17:35";
        break;
    }
    return horario;
}

function rever() {
    if(x === false){
        estoque();
    }
}
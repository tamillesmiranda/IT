var date = new Date();
var ip = "localhost";
var dia = date.toLocaleDateString();
var diatab = dia[6] + dia[7] + dia[8] + dia[9] + "-" + dia[3] + dia[4] + "-" + dia[0] + dia[1];
/*$.ajax({
    url : "http://localhost:3000/delet",
    method:"POST",
    data : {
        dia: diatab
    }
}); */
var semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
$.get( "http://" + ip + ":3000/tablets", function( data ) {
    $( ".result" ).html( data );
    var n = JSON.parse(data);
    var sem = parseInt(dia[0] + dia[1]);
    
    switch (semana[date.getDay()]) {
        case "Domingo":
            sem +=7;
        break;
        case "Segunda":
            sem +=6;
        break;
        case "Terça":
            sem +=4;
        break;
        case "Quarta":
            sem +=3;
        break;
        case "Quinta":
            sem +=2;
        break;
        case "Sexta":
            sem +=1;
        break;
        default:
            break;
    }
    if(sem<10){
        sem = sem.toString();
        sem = "0" + sem;
    }
    

    var prox = dia[6] + dia[7] + dia[8] + dia[9] + "-" + dia[3] + dia[4] + "-" + sem;
    
    var k = document.getElementById("tab");
    var diaat = "0";
    for (let i = 0; diaat <= diatab; i++) {
        diaat = n[i].dia;
        var t = i;
    }
   
    for(var i = t;  diaat <= prox ; i++){  
        var diaa = n[i].dia[8] + n[i].dia[9] + "/" + n[i].dia[5] + n[i].dia[6] + "/" + n[i].dia[0] + n[i].dia[1] + n[i].dia[2] + n[i].dia[3];
        diaat = n[i+1].dia;
        var linha = document.createElement("tr");
        var coluna1 = document.createElement("td");
        if (n[i].prof.length > 30) {
            n[i].prof = n[i].prof.substr(0,29);
        }
        coluna1.textContent  = n[i].prof;
        coluna1.classList.add("professor");
        var coluna2 = document.createElement("td");
        coluna2.textContent  = n[i].quantidade;
        var coluna3 = document.createElement("td");
        coluna3.textContent  = diaa;
        var coluna4 = document.createElement("td");
        var horario = hor(n[i].hora);
        coluna4.textContent  = horario;
        linha.appendChild(coluna1);
        linha.appendChild(coluna2);
        linha.appendChild(coluna3);
        linha.appendChild(coluna4);
        tab.appendChild(linha);
    }
    for(; i < n.length; i++){
        var linha = document.createElement("tr");
        var coluna1 = document.createElement("td");
        if (n[i].prof.length > 30) {
            n[i].prof = n[i].prof.substr(0,29);
        }
        coluna1.textContent  = n[i].prof;
        coluna1.classList.add("professor");
        var coluna2 = document.createElement("td");
        coluna2.textContent  = n[i].quantidade;
        var coluna3 = document.createElement("td");
        var diaat = n[i].dia[8] + n[i].dia[9] + "/" + n[i].dia[5] + n[i].dia[6] + "/" + n[i].dia[0] + n[i].dia[1] + n[i].dia[2] + n[i].dia[3];
        coluna3.textContent  = diaat;
        var coluna4 = document.createElement("td");
        var horario = hor(n[i].hora);
        coluna4.textContent  = horario;
        linha.appendChild(coluna1);
        linha.appendChild(coluna2);
        linha.appendChild(coluna3);
        linha.appendChild(coluna4);
        tab1.appendChild(linha);
    }                      
}); 
function redirecionar(){
    window.location.href = "file:///C:/Users/user/Documents/GitHub/IT/principal/novo/novo.html";
}

function hor(hora) {
    var horario;
    switch(hora){
        case "19:00":   
            horario = "19:00";
        break;
        case "20:00":
            horario = "20:00";
        break;
        case "21:00":   
            horario = "21:00";
        break;
        case "22:00": 
            horario = "22:00";
        break;
        case "23:00": 
            horario= "23:00";
        break;
    }
    return horario;
}

botao_adicionar.addEventListener('click',adicionar_dados);
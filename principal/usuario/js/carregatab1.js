var ip = "25.86.139.217";
var date = new Date();
var dia = date.toLocaleDateString();
var diatab = dia[6] + dia[7] + dia[8] + dia[9] + "-" + dia[3] + dia[4] + "-" + dia[0] + dia[1];
/* $.ajax({
    url : "http://localhost:3000/delet",
    method:"POST",
    data : {
        dia: diatab
    }
}); */
$.get( "http://" + ip + ":3000/profs", function( data ) {
    $( ".result" ).html( data );
    var n = JSON.parse(data);
    /* $('select').append('<option>' + "Selecione o nome" + '</option>');
    for (i = 0; i < n.length; i++) {
        $('select').append('<option>' + n[i].nome + '</option>');
    } */  
    var comboCidades = document.getElementById("nome");
    var opt = document.createElement("option");
    opt.value = "Selecione o nome";
    opt.text = "Selecione o nome";
    comboCidades.add(opt, comboCidades.options[0]);
    for (let index = 0; index < n.length; index++) {
        var opt = document.createElement("option");
        opt.value = n[index].nome;
        opt.text = n[index].nome;
        comboCidades.add(opt, comboCidades.options[index + 1]);
    }
    var num = document.getElementById("q1");
    for (let index = 0; index < 16; index++) {
        var k = document.createElement("option");
        k.value = index;
        k.text = index.toString();
        num.add(k, num.options[index]);
    }
    var num = document.getElementById("q2");
    for (let index = 0; index < 16; index++) {
        var k = document.createElement("option");
        k.value = index;
        k.text = index.toString();
        num.add(k, num.options[index]);
    } 
    var num = document.getElementById("q3");
    for (let index = 0; index < 16; index++) {
        var k = document.createElement("option");
        k.value = index;
        k.text = index.toString();
        num.add(k, num.options[index]);
    } 
    var num = document.getElementById("q4");
    for (let index = 0; index < 16; index++) {
        var k = document.createElement("option");
        k.value = index;
        k.text = index.toString();
        num.add(k, num.options[index]);
    } 
    var num = document.getElementById("q5");
    for (let index = 0; index < 16; index++) {
        var k = document.createElement("option");
        k.value = index;
        k.text = index.toString();
        num.add(k, num.options[index]);
    }                 
});
var horario;
$.get( "http://" + ip + ":3000/tablets", function( data ) {
    $( ".result" ).html( data );
    var n = JSON.parse(data);
    var k = document.getElementById("tab");
    var date = new Date();
    var dia = date.toLocaleDateString();
    var diatab = dia[6] + dia[7] + dia[8] + dia[9] + "-" + dia[3] + dia[4] + "-" + dia[0] + dia[1];
    var diaat = "0";
    for (let i = 0; diaat < diatab; i++) {
        diaat = n[i].dia;
        var t = i;
    }
    for( i = t; diatab === n[i].dia/* n.length */; i++){
        var linha   = document.createElement("tr");
        var coluna1 = document.createElement("td");
        if (n[i].prof.length > 30) {
            n[i].prof = n[i].prof.substr(0,29);
        }
        coluna1.textContent = n[i].prof;
        coluna1.classList.add("professor");
        var coluna2 = document.createElement("td");
        coluna2.textContent  = n[i].quantidade;
        var coluna3 = document.createElement("td");
        var date = n[i].dia[8] + n[i].dia[9] + "/" + n[i].dia[5] + n[i].dia[6] + "/" + n[i].dia[0] + n[i].dia[1] + n[i].dia[2] + n[i].dia[3];
        coluna3.textContent  = date;
        var coluna4 = document.createElement("td");
        switch(n[i].hora){
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
        coluna4.textContent  = horario;

        linha.appendChild(coluna1);
        linha.appendChild(coluna2);
        linha.appendChild(coluna3);
        linha.appendChild(coluna4);

        tab.appendChild(linha);
    }                    
}); 
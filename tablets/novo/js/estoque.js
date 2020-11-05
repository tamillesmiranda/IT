var tem = true;
function estoque(){
    $.ajax({
        url : "http://" + ip + ":3000/estoque",
        method:"POST",
        data : {
            dia: document.getElementById("dia").value
        },success: function(result) {
            var date = new Date();
            var dia = date.toLocaleDateString();
            var diatab = dia[6] + dia[7] + dia[8] + dia[9] + "-" + dia[3] + dia[4] + "-" + dia[0] + dia[1];
            var n = JSON.parse(result); 
            var quant = [0,0,0,0,0,0,0,0,0,0];
            for (let index = 0; index < n.length; index++) {
                switch(n[index].hora){
                    case "07:30":   
                        quant[0] = parseInt(n[index].soma);
                    break;
                    case "08:20":
                        quant[1] = parseInt(n[index].soma);
                    break;
                    case "09:30":   
                        quant[2] = parseInt(n[index].soma);
                    break;
                    case "10:20": 
                        quant[3] = parseInt(n[index].soma);
                    break;
                    case "11:20": 
                        quant[4] = parseInt(n[index].soma);
                    break;
                    case "13:00":
                        quant[5] = parseInt(n[index].soma);
                    break;
                    case "13:50": 
                        quant[6] = parseInt(n[index].soma);
                    break;
                    case "14:55": 
                        quant[7] = parseInt(n[index].soma);
                    break;
                    case "15:45": 
                        quant[8] = parseInt(n[index].soma);
                    break;
                    case "16:50": 
                        quant[9] = parseInt(n[index].soma);
                    break;
        
                }
                
            }
            if(document.getElementById("nome").value == "Selecione o nome"){
                alert("Selecione um nome");
                x = false;
            }else
            if(document.getElementById("dia").value == ""){
                alert("Selecione uma data");
            }else if(document.getElementById("dia").value < diatab){
                alert("Data deve hoje ou depois");
            }else{
                
                var k = document.getElementById("disp");
                if(tem == true){
                    for(var i = 0; i < 10; i++){
                        var linha = document.createElement("tr");
                        var coluna1 = document.createElement("td"); 
                        coluna1.textContent  = (40 - quant[i]);
                        linha.appendChild(coluna1);
                        k.appendChild(linha);
                    }     
                    tem = false;
                }else{
                    for (let index = 0; index < 10; index++) {
                        k.deleteRow(0);
                    }
                    for(var i = 0; i < 10; i++){
                        var linha = document.createElement("tr");
                        var coluna1 = document.createElement("td"); 
                        coluna1.textContent  = (40 - quant[i]);
                        linha.appendChild(coluna1);
                        k.appendChild(linha);
                    }  
                }
            }
            
            
            
        }
    }); 
}
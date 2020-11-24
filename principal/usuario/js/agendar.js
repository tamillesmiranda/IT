var botao_agendar = document.querySelector("#adicionar_dados");
var campo_data = document.querySelector("input[name='data']");
var campo_horario = document.querySelector("input[name='check1']","input[name='check2']","input[name='check3']","input[name='check4']","input[name='check5']");
var campo_qtde=document.querySelector("input[name='n1']","input[name='n2']","input[name='n3']","input[name='n4']","input[name='n5']");

var corpo_tabela = document.querySelector("tbody");

var contTab=0;
//funcoes
function TabelaDinamica(nome,idade,cidade){

		this.nome=nome;
		this.idade=idade;
		this.cidade=cidade;


		this.mostrar_dados=function() 
		{
		console.log(" nome é"+this.nome+
			"a idade é"+this.idade+
			"e a cidade é "+this.cidade)
        }

this.criar_linha_tabela = function()
{

		var linha = document.createElement("tr");
		var campo_nome = document.createElement("td");
		var campo_idade = document.createElement("td");
		var campo_cidade = document.createElement("td");

		var inputNome = document.createElement("textarea");
		var inputIdade = document.createElement("textarea");
		var inputCidade = document.createElement("textarea");
	
  	inputNome.setAttribute('disabled',true);
    inputIdade.setAttribute('disabled',true);
    inputCidade.setAttribute('disabled',true);
    

		var texto_nome = document.createTextNode(this.nome);
		var texto_idade = document.createTextNode(this.idade);
		var texto_cidade = document.createTextNode(this.cidade);


		inputNome.appendChild(texto_nome);
		inputIdade.appendChild(texto_idade);
		inputCidade.appendChild(texto_cidade);

		campo_cidade.appendChild(inputCidade);
		campo_idade.appendChild(inputIdade);
		campo_nome.appendChild(inputNome);

		var botao_editar = document.createElement("input");
		botao_editar.setAttribute('type','submit');
		botao_editar.setAttribute('value','editar');

		var botao_excluir = document.createElement("input");
		botao_excluir.setAttribute('type','submit');
		botao_excluir.setAttribute('value','excluir');	
		
    
    
		linha.appendChild(campo_nome);
		linha.appendChild(campo_idade);
        linha.appendChild(campo_cidade);
        linha.appendChild(botao_editar);
        linha.appendChild(botao_excluir);

        corpo_tabela.appendChild(linha);


        botao_excluir.addEventListener('click',function(){
        	var tr = this.parentNode;
        	var tb = tr.parentNode;
          tb.removeChild(tr);
        
        });
        
        botao_editar.addEventListener('click', function(){
        		var tr = this.parentNode;            
            for(var i =0; i< tr.children.length -2; i++){
            		var td = tr.children[i];
                if(td.children[0].tagName = 'textarea')
                td.children[0].disabled = false;
            }
        
        });

    
    }

  };

function adicionar_dados(event){

	event.preventDefault();

	nova_tabelaDinamica = new TabelaDinamica(campo_nome.value,campo_idade.value,campo_cidade.value);

	nova_tabelaDinamica.criar_linha_tabela();

	nova_tabelaDinamica.mostrar_dados();
	

};

botao_adicionar.addEventListener('click',adicionar_dados);

/*cep*/
$("#cep").focusout(function(){
    //Início do Comando AJAX
    $.ajax({
        url: 'https://viacep.com.br/ws/'+$(this).val()+'/json/unicode/',
        dataType: 'json',
        success: function(resposta){
            $("#logradouro").val(resposta.logradouro);
            $("#complemento").val(resposta.complemento);
            $("#bairro").val(resposta.bairro);
            $("#cidade").val(resposta.localidade);
            $("#uf").val(resposta.uf);
            $("#numero").focus();
        }
    });
});
/*cpf*/

function CPF(){
    "user_strict";
    function r(r){
    for(var t=null,n=0;9>n;++n)
    t+=r.toString().charAt(n)*(10-n);
    var i=t%11;
    return i=2>i?0:11-i
}
    function t(r){
        for(var t=null,n=0;10>n;++n)
        t+=r.toString().charAt(n)*(11-n);
        var i=t%11;
        return i=2>i?0:11-i
    }
        var n="CPF Inválido",i="CPF Válido";
        this.gera=
        function(){
            for(var n="",i=0;9>i;++i)
            n+=Math.floor(9*Math.random())+"";
            var o=r(n),a=n+"-"+o+t(n+""+o);
            return a
        },
        this.valida=
        function(o){
            for(var a=o.replace(/\D/g,""),u=a.substring(0,9),f=a.substring(9,11),v=0;10>v;v++)
            if(""+u+f==""+v+v+v+v+v+v+v+v+v+v+v)
            return n;
            var c=r(u),e=t(u+""+c);
            return f.toString()===c.toString()+e.toString()?i:n}}

   var CPF = new CPF();

$("#input").keypress(function(){
    $("#resposta").html(CPF.valida($(this).val()));
});

$("#input").blur(function(){
     $("#resposta").html(CPF.valida($(this).val()));
});

/*cartao*/
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mcc(v){
    v=v.replace(/\D/g,"");
    v=v.replace(/^(\d{4})(\d)/g,"$1 $2");
    v=v.replace(/^(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3");
    v=v.replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3 $4");
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('cc').onkeypress = function(){
		mascara( this, mcc );
	}
};
/*data vcto*/

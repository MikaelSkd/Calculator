function Calculadora() {
    var total = document.getElementById("total");
    var sete = document.getElementById("sete");
    var oito = document.getElementById("oito");
    var nove = document.getElementById("nove");
    var divisor = document.getElementById("divisor");
    var quatro = document.getElementById("quatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var multiplica = document.getElementById("multiplica");
    var um = document.getElementById("um");
    var dois = document.getElementById("dois");
    var tres = document.getElementById("tres");
    var subtrai = document.getElementById("subtrai");
    var igual = document.getElementById("igual");
    var reset = document.getElementById("reset");
    var zero = document.getElementById("zero");
	var soma = document.getElementById("soma");
	var graus = document.getElementById("graus");
	var rad = document.getElementById("rad");
	var ponto = document.getElementById("ponto");
	var qdrante = document.getElementById("qdrante");

    um.onclick = function(a) {
        total.textContent = total.textContent + "1";
    }
    dois.onclick = function(a) {
        total.textContent = total.textContent + "2";
    }
    tres.onclick = function(a) {
        total.textContent = total.textContent + "3";
    }
    quatro.onclick = function(a) {
        total.textContent = total.textContent + "4";
    }
    cinco.onclick = function(a) {
        total.textContent = total.textContent + "5";
    }
    seis.onclick = function(a) {
        total.textContent = total.textContent + "6";
    }
    sete.onclick = function(a) {
        total.textContent = total.textContent + "7";
    }
    oito.onclick = function(a) {
        total.textContent = total.textContent + "8";
    }
    nove.onclick = function(a) {
        total.textContent = total.textContent + "9";
    }
    zero.onclick = function(a) {
		total.textContent = total.textContent + "0";
	}
	ponto.onclick = function(a) {
        total.textContent = total.textContent + ".";
	}
    reset.onclick = function(a) {
        resetar();
    }
    igual.onclick = function(a) {
        numero2 = total.textContent;
        calcular();
    }
    soma.onclick = function(a) {
        numero1 = total.textContent;
        sinal = "+";
        limpar()
    }
    divisor.onclick = function(a) {
        numero1 = total.textContent;
        sinal = "/";
        limpar()
    }
    multiplica.onclick = function(a) {
        numero1 = total.textContent;
        sinal = "*";
        limpar()
    }
    subtrai.onclick = function(a) {
        numero1 = total.textContent;
        sinal = "-";
        limpar()
	}
	qdrante.onclick = function(a) {
        numero1 = total.textContent;
        sinal = "qdrante";
        limpar()
	}
	graus.onclick = function(a){
		if(total.textContent > 0){
			numero1 = total.textContent;
		}else{
			total.textContent = 1
			numero1 = total.textContent;
		}
		sinal = "graus";
		limpar()
	}
	rad.onclick = function(a){
		numero1 = total.textContent;
		sinal = "rad";
	}
}

function limpar() {
    total.textContent = "";
}

function resetar() {
    total.textContent = "";
    numero1 = 0;
    numero2 = 0;
    sinal = "";
}

function calcular() {
	var resposta = 0;
	var resultado = 0;
	const PI = 3.141592653589793238463;
    switch (sinal) {
        case "+":
            resposta = parseFloat(numero1) + parseFloat(numero2);
            break;
        case "-":
            resposta = parseFloat(numero1) - parseFloat(numero2);
            break;
        case "*":
            resposta = parseFloat(numero1) * parseFloat(numero2);
            break;
        case "/":
            resposta = parseFloat(numero1) / parseFloat(numero2);
			break;
		case "qdrante":
			if(numero1 >= 90 && numero1 < 180){
				resultado = 180 - numero1;
			}
			if(numero1 >= 180 && numero1 < 270){
				resultado = 270 - numero1;	
			}
			if(numero1 >= 270 && numero1 < 360){
				resultado = 360 - numero1;	
			}		

			break;
		case "graus":
			if( numero2 == 0){
				numero2 = 1;
			}
			resultado = (180 * ((numero1*PI) / numero2)) / PI;
			break;
		case "rad":
			resposta = (parseFloat(numero1)*PI)/180;
			break;
    }
	resetar();
		if(resposta > 0){
			total.textContent = resposta;
		}else{
			total.textContent = Math.round(resultado);
		}
		
		
}
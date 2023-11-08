


 //variables
let auxA;
let auxB;
let operacion;
const pantalla = document.querySelector(".pantalla-superior");
const pantalla_inferior = document.querySelector(".pantalla-inferior");
const num1 = document.getElementById('num1');
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
const num4 = document.querySelector(".num4");
const num5 = document.querySelector(".num5");
const num6 = document.querySelector(".num6");
const num7 = document.querySelector(".num7");
const num8 = document.querySelector(".num8");
const num9 = document.querySelector(".num9");
const num0 = document.querySelector(".num0");
const multiplicacion = document.querySelector(".multiplicacion");
const suma = document.querySelector(".suma");
const resta = document.querySelector(".resta");
const igual = document.querySelector(".igual");
const division = document.querySelector(".division");
const borrar = document.querySelector(".borrar");


//eventos
num1.addEventListener('click', b1);
function b1(e){
		pantalla.textContent += "1";
}
 num2.addEventListener('click', function(e){
	pantalla.textContent += "2";
});
  num3.addEventListener('click', function(e){
	pantalla.textContent += "3";
});
   num4.addEventListener('click', function(e){
	pantalla.textContent += "4";
});
 num5.addEventListener('click', function(e){
	pantalla.textContent += "5";
});
  num6.addEventListener('click', function(e){
	pantalla.textContent += "6";
});
   num7.addEventListener('click', function(e){
	pantalla.textContent += "7";
});
 num8.addEventListener('click', function(e){
	pantalla.textContent += "8";
});
  num9.addEventListener('click', function(e){
	pantalla.textContent += "9";
});
   num0.addEventListener('click', function(e){
	pantalla.textContent += "0";
});

division.addEventListener('click',function(e){
   auxA = pantalla.textContent;
   operacion = "/";
   pantalla.textContent = "";
});
resta.addEventListener('click',function(e){
   auxA = pantalla.textContent;
   operacion = "-";
   pantalla.textContent = "";
});
multiplicacion.addEventListener('click',function(e){
   auxA = pantalla.textContent;
   operacion = "*";
   pantalla.textContent = "";
});
suma.addEventListener('click',function(e){
   auxA = pantalla.textContent;
   operacion = "+";
   pantalla.textContent = "";
});
 
 igual.addEventListener('click',function(e){



if(operacion == "+"){
	pantalla_inferior.textContent = parseFloat(auxA) + parseFloat(pantalla.textContent);	
	operacion = "";
 }else if(operacion == "-"){
	pantalla_inferior.textContent = parseFloat(auxA) - parseFloat(pantalla.textContent);
	operacion = "";	
 }else if(operacion == "/"){
	pantalla_inferior.textContent = parseFloat(auxA) / parseFloat(pantalla.textContent);	
	operacion = "";
 }else if(operacion == "*"){
	pantalla_inferior.textContent = parseFloat(auxA) * parseFloat(pantalla.textContent);	
	operacion = "";
 }
 pantalla.textContent="";
 });
 
 borrar.addEventListener('click',function(e){
   pantalla.textContent = "";
   operacion = "";
   pantalla_inferior.textContent = "";
 });

 if (pantalla.textContent=="") {

 	i
 }

 
 


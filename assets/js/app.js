/* función splash  */
$(document).ready(function(){

var aleatorio
/* Validar campo que sea solo números */
 $('#telefono').validCampoFranz('0123456789');
 

/* Función para validar el input cuando es menos de 10 caracteres */
$("#telefono").keydown(function(){	
var min_length = 10;
var length = $("#telefono").val().length;
if (length > min_length) {
  $('#boton_next').attr('disabled', false);

} else {
   $('#boton_next').attr('disabled', true);
}

})	

/* Función para crear números aleatorios */
$("#boton_next").click(function(){
  var limite = 100;
  aleatorio = Math.floor(Math.random()*limite);
  alert("Su código es:Lab-" +aleatorio);
  $('#myModal2').show();

})
  
  /* Función para validar si el código es correcto */
 $('#codigo_al').keyup(function(){
    var valid_cod = $(this).val();
    	if (aleatorio == valid_cod){
    	 $('#boton_next3').attr('disabled', false);

    	} else {
    	  $('#boton_next3').attr('disabled', true);
    	} 
  })

  $("#boton_next3").click(function(){
    $("#mymodal2").hide();
  })


});

function splash(param) { var time = param; setTimeout(function () { $('#splashscreen').hide(); }, time); } 	

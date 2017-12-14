/* función splash  */
$(document).ready(function(){
// función para validar espacios vacios
function validar() {
     if ($('#name').val() != "" && $('#email').val() != ""){
      $('#boton_next4').attr('disabled', false);
      console.log('false')

}     else {

      $('#boton_next4').attr('disabled', true);
      console.log('true')
}

};

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

/* Función para limpiar el campo */
$('#boton_next2').click(function(){
  $("#telefono").val('');

})

/* Función para crear números aleatorios */
$("#boton_next").click(function(){
  var limite = 100;
  aleatorio = Math.floor(Math.random()*limite);
  alert("Su código es:Lab-" +aleatorio);
  $("#myModal").hide();
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


 /* manda mensaje cuando el focus esta en el input*/
  $("#name").focusout(function(){
    if($(this).val() === ""){
      $("#name_vacio").html("<span style='colo:blue;'>Debe ingresar un nombre</span>");
    }
  });

  /* manda mensaje cuando el focus esta en el input*/
  $("#mail").focusout(function(){
    if($(this).val() === ""){
      $("#email_vacio").html("<span style='colo:blue;'>Debe ingresar un email</span>");
    }
  });

 /* Validar que los campos no estana vacios para habilitar el boton */
 $("#name").keyup(function(){
   validar();
   
 });

 $("#mail").keyup(function(){
   validar();
   
 });

  /*Cambiar el color cuando el focus esta en el input */
  $("#telefono").focusin(function(){
   $(this).addClass("miClase");
      
  });


  $("#name").focusin(function(){
   $(this).addClass("miClase");
      
  });

  $("#mail").focusin(function(){
   $(this).addClass("miClase");
      
  });


//Ocultar el modal 2
  $("#boton_next3").click(function(){
    $("#myModal2").hide();
  });

  $("#boton_next2").click(function(){
    //$("#myModal").show();
    $("#myModal2").hide();

  });


  $("#boton_next4").click(function(){
    $("#myModal3").modal('hide');
    $(".finalizar").attr("display","block");
  });

 
  $("#box").click(function(){
    $(this).prop('checked', true)
  });


       

       

 


});

function splash(param) { var time = param; setTimeout(function () { $('#splashscreen').hide(); }, time); } 	

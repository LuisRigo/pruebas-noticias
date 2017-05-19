// $( document ).ready() // window.onload=function... al cargar la página
$(function() {
  //leer y parsear
  $.getJSON( "https://rawgit.com/urbinapro/news/master/data/names.json", function( jsonObject  ) {
    rellenar(jsonObject );
  });
  
});

//una de las muchas formas de rellenar el contenido con los datos recibidos
// json es una lista de objectos con los datos, i es el índice de la lista (hay 3 empleados), empleado es un objeto con firtName i lastName.
function rellenar(json){
  $.each( json, function( i, empleado ) {
    $("#out").append( "<li id='" + i + "'>" + empleado.firstName+ " " + empleado.lastName + "</li>" );
  });  
}
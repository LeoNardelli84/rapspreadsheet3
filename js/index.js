//https://mpago.la/1g2F5th link de donaciones mercadopago
//https://www.youtube.com/watch?v=OrMpKvcLPw8 conectar github con cpanel repo publico
//https://9elements.github.io/fancy-border-radius/#52.85.16.51--. div deformados
localStorage.clear();


//------------
function obtenerFecha(){

    var fecha = new Date();
    var dia = fecha.getDate();
    var mes =  fecha.getMonth();
    var anio = fecha.getFullYear();
    var num_dia = fecha.getDay();
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    return ( dias[num_dia] + " " + dia + " de " + meses[mes] + " de " + anio);

  }
  var fecha = obtenerFecha();
  $("#fecha").html(fecha);
//------------

  $(".formato").click(function(){
    var formato = $(this).children('h4').html()
    
    Swal.fire({
        title: formato,
        text: "Comenzando...",
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: 'black',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Comenzar'
      }).then((result) => {
        if (result.isConfirmed) {
          
          switch (formato) {
            case 'Liga regular':
              $(location).attr('href', 'formatos/ligaRegular/regular.html')    
              break;
          
            
          }
          
        }
      })

  });//FIN .FORMATO CLICK
//------------

//windows scroll
$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  console.log(scroll);

  $(".presentacion").removeClass("invisible");
  
  $(".presentacion").addClass("animate__zoomIn");
  $(".app").removeClass("invisible");
  $(".app").addClass("animate__fadeInLeftBig");
  $(".img-presentacion").addClass("animate__backInDown");
 
  
});
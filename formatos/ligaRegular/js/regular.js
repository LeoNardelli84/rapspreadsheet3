$(function(){
    localStorage.clear();

    var typed = new Typed('#subTitulo', {
    strings: ['Nuevo formato 2023', 'vota todas las FMS', 'Entra en nuestro discord' ,'¿Estas list@?'],
    smartBackspace: false,
    typeSpeed: 55,
    backSpeed: 25,
    showCursor: false
    });
  
    var btnComenzar = $("#btn-comenzar");
  
    btnComenzar.click(function(e){
      var p1 = $("#player1").val();
      var p2 = $("#player2").val();
  
      if (p1 == "") {
        e.preventDefault();
        Swal.fire('Necesitamos el nombre del 1er Mc')
        //alert("Necesitamos el nombre del 1er Mc")
      } else if (p2 == "") {
        e.preventDefault();
        //alert("Necesitamos el nombre del 2do Mc")
        Swal.fire('Necesitamos el nombre del 2do Mc')
  
      } else{
        alert("ahora")
        console.log("ahora")
        localStorage.setItem("p1", p1);
        localStorage.setItem("p2", p2);
        

        $(location).attr('href', './pages/menu.html');
           
      }
      
  
    });
    /*
    $("#btn-volver").click(function(e){
        e.preventDefault();
  
        swal({
          title: "¿Volver al menu principal?",
          text: "podrás elegir otro formato",
          icon: "../../img/favicon.ico",
          buttons: true,
          dangerMode: true
        })
        .then((willDelete) => {
          if (willDelete) {
  
            swal("¡Volviendo al menu!", {
              icon: "success",
            });
  
            $(location).attr('href', '../../index.html');
          } else {
            e.preventDefault();
            swal("Continua con la FMS");
  
          }
        });
  
      });// fin btn-volver
      */
  });
  
  
 
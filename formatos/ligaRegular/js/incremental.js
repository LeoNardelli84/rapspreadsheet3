function tomarDatos(){
    //Player 1
    var p1_patron1 = parseFloat($("#patron1p1").val());
    var p1_patron2 = parseFloat($("#patron2p1").val());
    var p1_patron3 = parseFloat($("#patron3p1").val());
    var p1_patron4 = parseFloat($("#patron4p1").val());
    var p1_patron5 = parseFloat($("#patron5p1").val());
    var p1_patron6 = parseFloat($("#patron6p1").val());
    var p1_tecnica = parseFloat($("#tecnicasp1").val());
    var p1_flow = parseFloat($("#flowp1").val());
    var p1_escena = parseFloat($("#escenap1").val());
    var p1_totalPatrones
    
    //Player 2
    var p2_patron1 = parseFloat($("#patron1p2").val());
    var p2_patron2 = parseFloat($("#patron2p2").val());
    var p2_patron3 = parseFloat($("#patron3p2").val());
    var p2_patron4 = parseFloat($("#patron4p2").val());
    var p2_patron5 = parseFloat($("#patron5p2").val());
    var p2_patron6 = parseFloat($("#patron6p2").val());
    var p2_tecnica = parseFloat($("#tecnicasp2").val());
    var p2_flow = parseFloat($("#flowp2").val());
    var p2_escena = parseFloat($("#escenap2").val());
    var p2_totalPatrones
    
     /*
     sumar los p1_totalPatrones
     almacenar todo ene l localStorage

     */ 


    
}
$(function(){
    $("#p1").html(localStorage.getItem("p1"))
    $("#p2").html(localStorage.getItem("p2"))

    //btn-continuar
    $("#btn-continuar").click(function(){
        Swal.fire({
            title: 'Terminar Incremental?',
            text: "No podras realizar cambios",
            showCancelButton: true,
            confirmButtonColor: 'black',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si! Continuar'
          }).then((result) => {
            if (result.isConfirmed) {
              
              $(location).attr('href', 'menu.html')
            }
          })
    });

});
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
    
    p1_totalPatrones = p1_patron1 + p1_patron2 + p1_patron3 + p1_patron4 + p1_patron5 + p1_patron6;
    p2_totalPatrones = p2_patron1 + p2_patron2 + p2_patron3 + p2_patron4 + p2_patron5 + p2_patron6; 
    
    p1_totalRm = p1_totalPatrones + p1_tecnica + p1_flow + p1_escena;
    
    p2_totalRm = p2_totalPatrones + p2_tecnica + p2_flow + p2_escena;
    

    if (isNaN(p1_totalRm)) {
        
        Swal.fire({
            title: 'Te falto votar algo de ' + localStorage.getItem('p1') ,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    } else if (isNaN(p2_totalRm)){
        Swal.fire({
            title: 'Te falto votar algo de ' + localStorage.getItem('p2') ,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    } else{
            //seteo en localStorage
             //player 1
             localStorage.setItem('rm_totalPatronesp1', p1_totalPatrones)
             localStorage.setItem('rm_tecnicasp1', p1_tecnica)
             localStorage.setItem('rm_flowp1', p1_flow)
             localStorage.setItem('rm_escenap1', p1_escena)
             localStorage.setItem('rm_totalp1', p1_totalRm)
            //player 2
            localStorage.setItem('rm_totalPatronesp2',p2_totalPatrones)
            localStorage.setItem('rm_tecnicasp2', p2_tecnica)
            localStorage.setItem('rm_flowp2', p2_flow)
            localStorage.setItem('rm_escenap2', p2_escena)
            localStorage.setItem('rm_totalp2', p2_totalRm)
    }
   
} //fin funcion tomarDatos()

$(function(){
    $("#p1").html(localStorage.getItem("p1"))
    $("#p2").html(localStorage.getItem("p2"))

    //btn-continuar
    $("#btn-continuar").click(function(){
        Swal.fire({
            title: 'Terminar Random Mode?',
            text: "No podras realizar cambios",
            showCancelButton: true,
            confirmButtonColor: 'black',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si! Continuar'
          }).then((result) => {
            if (result.isConfirmed) {
              tomarDatos();
              $(location).attr('href', 'menu.html')
            }
          })
    });

});
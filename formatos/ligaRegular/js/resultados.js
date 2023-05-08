$(function(){
    let p1 = localStorage.getItem("p1");
    let p2 = localStorage.getItem("p2");
    $("#p1").html(p1)
    $("#p2").html(p2)
    //datos del Incremental Mode
    //player 1
    var im_totalPatronesp1 = localStorage.getItem("im_totalPatronesp1")
    var im_tecnicasp1 = localStorage.getItem("im_tecnicasp1")
    var im_flowp1 = localStorage.getItem("im_flowp1")
    var im_escenap1 = localStorage.getItem("im_escenap1")
    var im_totalp1 = localStorage.getItem("im_totalp1")
    //player 2
    var im_totalPatronesp2 = localStorage.getItem("im_totalPatronesp2")
    var im_tecnicasp2 = localStorage.getItem("im_tecnicasp2")
    var im_flowp2 = localStorage.getItem("im_flowp2")
    var im_escenap2 = localStorage.getItem("im_escenap2")
    var im_totalp2 = localStorage.getItem("im_totalp2")
    
    //datos del Random Mode
    //player 1
    var rm_totalPatronesp1 = localStorage.getItem("rm_totalPatronesp1")
    var rm_tecnicasp1 = localStorage.getItem("rm_tecnicasp1")
    var rm_flowp1 = localStorage.getItem("rm_flowp1")
    var rm_escenap1 = localStorage.getItem("rm_escenap1")
    var rm_totalp1 = localStorage.getItem("rm_totalp1")
    //player 2
    var rm_totalPatronesp2 = localStorage.getItem("rm_totalPatronesp2")
    var rm_tecnicasp2 = localStorage.getItem("rm_tecnicasp2")
    var rm_flowp2 = localStorage.getItem("rm_flowp2")
    var rm_escenap2 = localStorage.getItem("rm_escenap2")
    var rm_totalp2 = localStorage.getItem("rm_totalp2")

    //datos del minuto libre
    //player 1
    var ml_totalPatronesp1 = localStorage.getItem("ml_totalPatronesp1")
    var ml_tecnicasp1 = localStorage.getItem("ml_tecnicasp1")
    var ml_flowp1 = localStorage.getItem("ml_flowp1")
    var ml_escenap1 = localStorage.getItem("ml_escenap1")
    var ml_totalp1 = localStorage.getItem("ml_totalp1")
    //player 2
    var ml_totalPatronesp2 = localStorage.getItem("ml_totalPatronesp2")
    var ml_tecnicasp2 = localStorage.getItem("ml_tecnicasp2")
    var ml_flowp2 = localStorage.getItem("ml_flowp2")
    var ml_escenap2 = localStorage.getItem("ml_escenap2")
    var ml_totalp2 = localStorage.getItem("ml_totalp2")

    //datos del Deluxe Mode
    //player 1
    var de_totalPatronesp1 = localStorage.getItem("de_totalPatronesp1")
    var de_tecnicasp1 = localStorage.getItem("de_tecnicasp1")
    var de_flowp1 = localStorage.getItem("de_flowp1")
    var de_escenap1 = localStorage.getItem("de_escenap1")
    var de_totalp1 = localStorage.getItem("de_totalp1")
    //player 2
    var de_totalPatronesp2 = localStorage.getItem("de_totalPatronesp2")
    var de_tecnicasp2 = localStorage.getItem("de_tecnicasp2")
    var de_flowp2 = localStorage.getItem("de_flowp2")
    var de_escenap2 = localStorage.getItem("de_escenap2")
    var de_totalp2 = localStorage.getItem("de_totalp2")

    var resFinalp1 = parseFloat(im_totalp1) + parseFloat(rm_totalp1) + parseFloat(ml_totalp1) + parseFloat(de_totalp1)
    var resFinalp2 = parseFloat(im_totalp2) + parseFloat(rm_totalp2) + parseFloat(ml_totalp2) + parseFloat(de_totalp2)

    //imprimir resultados en pantalla
    //incremental mode
    //player 1
    $("#im_patronesp1").html(im_totalPatronesp1)
    $("#im_tecnicasp1").html(im_tecnicasp1)
    $("#im_flowp1").html(im_flowp1)
    $("#im_escenap1").html(im_escenap1)
    $("#im_totalp1").html(im_totalp1)
    //player 2
    $("#im_patronesp2").html(im_totalPatronesp2)
    $("#im_tecnicasp2").html(im_tecnicasp2)
    $("#im_flowp2").html(im_flowp2)
    $("#im_escenap2").html(im_escenap2)
    $("#im_totalp2").html(im_totalp2)

    //Random mode
    //player 1
    $("#rm_patronesp1").html(rm_totalPatronesp1)
    $("#rm_tecnicasp1").html(rm_tecnicasp1)
    $("#rm_flowp1").html(rm_flowp1)
    $("#rm_escenap1").html(rm_escenap1)
    $("#rm_totalp1").html(rm_totalp1)
    //player 2
    $("#rm_patronesp2").html(rm_totalPatronesp2)
    $("#rm_tecnicasp2").html(rm_tecnicasp2)
    $("#rm_flowp2").html(rm_flowp2)
    $("#rm_escenap2").html(rm_escenap2)
    $("#rm_totalp2").html(rm_totalp2)

    //Minutos libres
    //player 1
    $("#ml_patronesp1").html(ml_totalPatronesp1)
    $("#ml_tecnicasp1").html(ml_tecnicasp1)
    $("#ml_flowp1").html(ml_flowp1)
    $("#ml_escenap1").html(ml_escenap1)
    $("#ml_totalp1").html(ml_totalp1)
    //player 2
    $("#ml_patronesp2").html(ml_totalPatronesp2)
    $("#ml_tecnicasp2").html(ml_tecnicasp2)
    $("#ml_flowp2").html(ml_flowp2)
    $("#ml_escenap2").html(ml_escenap2)
    $("#ml_totalp2").html(ml_totalp2)

    //Deluxe mode
    //player 1
    $("#de_patronesp1").html(de_totalPatronesp1)
    $("#de_tecnicasp1").html(de_tecnicasp1)
    $("#de_flowp1").html(de_flowp1)
    $("#de_escenap1").html(de_escenap1)
    $("#de_totalp1").html(de_totalp1)
    //player 2
    $("#de_patronesp2").html(de_totalPatronesp2)
    $("#de_tecnicasp2").html(de_tecnicasp2)
    $("#de_flowp2").html(de_flowp2)
    $("#de_escenap2").html(de_escenap2)
    $("#de_totalp2").html(de_totalp2)

    $("#resFinalp1").html(resFinalp1)
    $("#resFinalp2").html(resFinalp2)

    function difTotales(num1, num2){
        if (num1 > num2) {
          return num1 - num2;
        }else{
          return num2 - num1;
        }
      }
    var difTotales = difTotales(resFinalp1, resFinalp2)
    if( difTotales <= 1.5){
        $("#resultado").html("replica")
        $(".redes").css('background-color', 'rgb(57, 57, 57)')
        $(".graficos-final").css('background-color', 'rgb(57, 57, 57)')
    } else if (resFinalp1 > resFinalp2) {
        $("#resultado").html("gano " + p1);
        $(".redes").css('background-color', 'red')
        $(".graficos-final").css('background-color', 'red')
    } else{
        $("#resultado").html("gano " + p2)
        $(".redes").css('background-color', 'blue')
        $(".graficos-final").css('background-color', 'blue')
    }
});
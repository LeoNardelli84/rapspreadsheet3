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

    $("#nombre_finalp1").html(p1);
    $("#nombre_finalp2").html(p2);
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
        $("#difTotales").html("(diferencia de " + difTotales + ")")
        $(".redes").css('background-color', 'rgb(57, 57, 57)')
        $(".graficos-final").css('background-color', 'rgb(57, 57, 57)')
        
    } else if (resFinalp1 > resFinalp2) {
        $("#resultado").html("gano " + p1);
        $(".redes").css('background-color', 'red')
        $(".graficos-final").css('background-color', 'red')
        $("#difTotales").html("(diferencia de " + difTotales + ")")
    } else{
        $("#resultado").html("gano " + p2)
        $(".redes").css('background-color', 'blue')
        $(".graficos-final").css('background-color', 'blue')
        $("#difTotales").html("(diferencia de " + difTotales + ")")
    }

    //Chart.js
    //crear los % del player 1
    var totalPatronesp1 = (parseFloat(im_totalPatronesp1) + parseFloat(rm_totalPatronesp1) + parseFloat(ml_totalPatronesp1) + parseFloat(de_totalPatronesp1)) * 100 / 130;
    var totalTecnicasp1 = (parseFloat(im_tecnicasp1) + parseFloat(rm_tecnicasp1) + parseFloat(ml_tecnicasp1) + parseFloat(de_tecnicasp1)) *100 / 10;
    var totalFlowp1 = (parseFloat(im_flowp1) + parseFloat(rm_flowp1) + parseFloat(ml_flowp1) + parseFloat(de_flowp1)) *100 /10;
    var totalEscenap1 = (parseFloat(im_escenap1) + parseFloat(rm_escenap1) + parseFloat(ml_escenap1) + parseFloat(de_escenap1)) *100 /10;
    //crear los % del player 2
    var totalPatronesp2 = (parseFloat(im_totalPatronesp2) + parseFloat(rm_totalPatronesp2) + parseFloat(ml_totalPatronesp2) + parseFloat(de_totalPatronesp2)) * 100 / 130;
    var totalTecnicasp2 = (parseFloat(im_tecnicasp2) + parseFloat(rm_tecnicasp2) + parseFloat(ml_tecnicasp2) + parseFloat(de_tecnicasp2)) *100 / 10;
    var totalFlowp2 = (parseFloat(im_flowp2) + parseFloat(rm_flowp2) + parseFloat(ml_flowp2) + parseFloat(de_flowp2)) *100 /10;
    var totalEscenap2 = (parseFloat(im_escenap2) + parseFloat(rm_escenap2) + parseFloat(ml_escenap2) + parseFloat(de_escenap2)) *100 /10;

    //batallometro
    var batallometro = (parseFloat(resFinalp1) + parseFloat(resFinalp2)) * 100 / 320;
    
    $(".progressBar").width(batallometro + "%");
    $(".p-porcentaje").html(batallometro.toFixed(2) + "% ");
    $(".h6-batallometro").html(parseFloat(resFinalp1) + parseFloat(resFinalp2) + " Puntos obtenidos")
    




    //chart barras
    var chart1 = document.getElementById('chart1').getContext('2d');

    var chart1_bar = new Chart(chart1,{
        type:"bar",
        data: {
          labels:['Patrones', 'Técnicas', 'Flow', 'P. Escena'],
          datasets: [
            {
            label: p1,
            data: [totalPatronesp1.toFixed(2), totalTecnicasp1.toFixed(2), totalFlowp1.toFixed(2), totalEscenap1.toFixed(2)],
            backgroundColor: 'rgb(220, 0, 0)',
            borderColor: 'rgb(210, 0, 0)',
            borderWidth: 1
          },{
            label: p2,
            data: [totalPatronesp2.toFixed(2), totalTecnicasp2.toFixed(2), totalFlowp2.toFixed(2), totalEscenap2.toFixed(2) ],
            backgroundColor: 'rgb(0, 0, 220)',
            borderColor: 'rgb(0, 0, 210)',
            borderWidth: 1
          }
        ]},
        options: {
          plugins:{
            legend:{
              labels: {
                color: 'white'
              }
            }
          },
          layout: {
              padding: {
                  left: 0,
                  right: 10,
                  top: 10,
                  bottom: 10
              }
          },
          scales: {
            x: {
              ticks: {
                color: 'white'
              },
              beginAtZero: true
             
            },
            y: {
              display: false,
              beginAtZero: true
            }
          }
        }

    }); //fin chart barras
    
    // chart  2 LINE
    var chart2 = document.getElementById('chart2').getContext('2d');
    var chart2_line = new Chart(chart2,{
        type:"line",
        data: {
          labels:['IM', 'RM', 'ML', 'DE'],
          datasets: [{
            lineTension: 0.4,
            label: p1,
            data: [(parseFloat(im_totalp1) * 100 / 30).toFixed(2), (parseFloat(rm_totalp1) * 100 /30).toFixed(2), (parseFloat(ml_totalp1) * 100 / 66).toFixed(2), (parseFloat(de_totalp1) * 100 / 34).toFixed(2)],
            borderColor: 'rgb(210, 0, 0)',
            borderWidth: 2
          },{
            lineTension: 0.4,
            label: p2,
            data: [(parseFloat(im_totalp2) * 100 / 30).toFixed(2), (parseFloat(rm_totalp2) * 100 / 30).toFixed(2), (parseFloat(ml_totalp2) * 100 / 66).toFixed(2), (parseFloat(de_totalp2) * 100 / 34).toFixed(2)],
            borderColor: 'rgb(0, 98, 255)',
            borderWidth: 2
          }
        ]},
        options: {
          plugins:{
            legend:{
              labels: {
                color: 'white'
              }
            }
          },
          layout: {
              padding: {
                  left: 5,
                  right: 5,
                  top: 10,
                  bottom: 10
              }
          },
          scales: {
            x: {
              beginAtZero: true,
              display: true,
              ticks: {
                color: 'white'
              }
              
            },
            y: {
              display: false,
              beginAtZero: true,
              min: 0,
              max: 100
               
            }
          }
        }

    });

  });
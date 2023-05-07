$(function(){
    const p1 = localStorage.getItem('p1')
    const p2 = localStorage.getItem('p2')
    let terminados = 0;

    $("#p1").html(p1)
    $("#p2").html(p2)

    //btn incremental verde o gris
    if(localStorage.getItem('im_totalp1') ===null){
      
        $(".incremental>a").css('background-color', 'rgba(145, 145, 145, 0.51)')//gris
    } else{
        $(".incremental>a").css('background','linear-gradient(112deg, rgba(23,148,4,1) 0%, rgba(101,253,45,1) 40%)')//verde
        $(".incremental>a").css('box-shadow', '0px 0px 15px green')
        terminados += 1;
    }
    //btn random verde o gris
    if(localStorage.getItem('rm_totalp1') ===null){
        $(".random>a").css('background', 'grey')
    } else{
        $(".random>a").css('background','linear-gradient(112deg, rgba(23,148,4,1) 0%, rgba(101,253,45,1) 40%)')
        $(".random>a").css('box-shadow', '0px 0px 15px green')
        $(".random>a").css('color', 'black')
        terminados += 1;
    }
    //btn libre verde o gris
    if(localStorage.getItem('ml_totalp1') ===null){
        $(".libres>a").css('background', 'grey')
    } else{
        $(".libres>a").css('background','linear-gradient(112deg, rgba(23,148,4,1) 0%, rgba(101,253,45,1) 40%)')
        $(".libres>a").css('box-shadow', '0px 0px 15px green')
        $(".libres>a").css('color', 'black')
        terminados += 1;
    }
    //btn deluxe verde o gris
    if(localStorage.getItem('de_totalp1') ===null){
        $(".deluxe>a").css('background', 'grey')
    } else{
        $(".deluxe>a").css('background','linear-gradient(112deg, rgba(23,148,4,1) 0%, rgba(101,253,45,1) 40%)')
        $(".deluxe>a").css('box-shadow', '0px 0px 15px green')
        $(".deluxe>a").css('color', 'black')
        terminados += 1;
        
    }

    switch (terminados) {
        case 0:      //ARRANCA EL MENU
          var options = {
            strings: ["Bienvenido a rapspreadsheet", "FMS-Regenesis","","Nuevo formato FMS 2023", "3...2...1... TIEMPO!!", "" ],
            typeSpeed: 100,
            showCursor: false,
            smartBackspace: true
          }
          var typed = new Typed("#subs", options);
    
          $(".incremental>a").removeClass("disabled");
          $(".incremental>a").css('background-color', 'white')
          $(".incremental>a").focus();
    
          break;
    
          case 1:  // INCREMENTAL MODE TERMINADO
    
            var options = {
              strings: ["Incremental Mode Terminado", "" + localStorage.getItem('im_totalp1') + " Pts Para " + p1 +"","" + localStorage.getItem('im_totalp2') + " Pts Para " + p2 +"", "Preparate para el Random Mode", "" ],
              typeSpeed: 100,
              showCursor: false,
              smartBackspace: true
            };
      
            var typed = new Typed("#subs", options);
      
      
            $(".random>a").removeClass("disabled");
            $(".random>a").css('background-color', 'white')
            $(".random>a").focus();

      
            break;
    
          case 2:  // RANDOM MODE TERMINADO
          var options = {
            strings: ["<h4>Random Mode Terminado</h4>", "<h4>" + localStorage.getItem('rm_totalp1') + " Pts Para " + p1 +"</h4>","<h4>" + localStorage.getItem('rm_totalp2') + " Pts Para " + p2 +"</h4>", "<h4>Sigue con el minuto a sangre...</h4>", "<h4></h4>" ],
            typeSpeed: 100,
            showCursor: false,
            smartBackspace: true
          }
          var typed = new Typed("#subs", options);
          $(".libres>a").removeClass("disabled");
          $(".libres>a").css('background-color', 'white')
          $(".libres>a").focus();
          break;
    
          case 3: //Minutos libres terminados
            var options = {
              strings: ["<h4>Minutos libres terminados", "<h4>" + localStorage.getItem('ml_totalp1') + " Pts Para " + p1 +"</h4>","<h4>" + localStorage.getItem('ml_totalp2') + " Pts Para " + p2 +"</h4>", "<h4>Preparate para el Deluxe</h4>"],
              typeSpeed: 100,
              showCursor: false,
              smartBackspace: true
            }
            var typed = new Typed("#subs", options);
            $(".deluxe>a").removeClass("disabled");
            $(".deluxe>a").css('background-color', 'white')
            $(".deluxe>a").focus();
    
            break;
    
          case 4: // deluxe terminado
          var options = {
            strings: ["<h4>Deluxe Terminado</h4>", "<h4>" + localStorage.getItem('de_totalp1') + " Pts Para " + p1 +"</h4>","<h4>" + localStorage.getItem('de_totalp2') + " Pts Para " + p2 +"</h4>", "<h4>Analizando datos...</h4>"],
            typeSpeed: 70,
            showCursor: false,
            smartBackspace: true
          }
          var typed = new Typed("#subs", options);
          $("#btn-terminarBatalla").removeClass("invisible") 
          $("#btn-terminarBatalla").removeClass("disabled");
          $("#btn-terminarBatalla").addClass("animate__heartBeat")
          $("#btn-terminarBatalla").addClass("animate__pulse");
          $("#btn-terminarBatalla").css('background-color', 'bisque')
          $("#btn-terminarBatalla").css('box-shadow', '0px 0px 15px bisque')
          $("#btn-terminarBatalla").focus();
          $(".incremental>a").addClass("animate__pulse");
          $(".incremental>a").addClass("animate__heartBeat");
          $(".random>a").addClass("animate__pulse");
          $(".random>a").addClass("animate__heartBeat");
          $(".libres>a").addClass("animate__pulse");
          $(".libres>a").addClass("animate__heartBeat");
          $(".deluxe>a").addClass("animate__pulse");
          $(".deluxe>a").addClass("animate__heartBeat");
          break;
    
      }//fin switch
    

});

$(function(){
    const p1 = localStorage.getItem('p1')
    const p2 = localStorage.getItem('p2')
    let terminados = 0;

    $("#p1").html(p1)
    $("#p2").html(p2)

    //btn incremental verde o gris
    if(localStorage.getItem('im_totalIm1') ===null){
      
        $(".incremental>a").css('background-color', 'rgba(145, 145, 145, 0.51)')//gris
    } else{
        $(".incremental>a").css('background-color', "rgba(17, 213, 78, 0.39)")//verde
        $(".incremental>a").css('box-shadow', '0px 0px 15px green')
        terminados += 1;
    }
    //btn random verde o gris
    if(localStorage.getItem('rm_totalRm1') ===null){
        $(".random>a").css('background', 'grey')
    } else{
        $(".random>a").css('background','linear-gradient(112deg, rgba(23,148,4,1) 0%, rgba(101,253,45,1) 40%)')
        $(".ramdom>a").css('color', 'black')
        terminados += 1;
    }
    //btn libre verde o gris
    if(localStorage.getItem('li_totalLi1') ===null){
        $(".libres>a").css('background', 'grey')
    } else{
        $(".libres>a").css('background','linear-gradient(112deg, rgba(23,148,4,1) 0%, rgba(101,253,45,1) 40%)')
        $(".libres>a").css('color', 'black')
        terminados += 1;
    }
    //btn deluxe verde o gris
    if(localStorage.getItem('de_totalDe1') ===null){
        $(".deluxe>a").css('background', 'grey')
    } else{
        $(".deluxe>a").css('background','linear-gradient(112deg, rgba(23,148,4,1) 0%, rgba(101,253,45,1) 40%)')
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
    
          break;
    
          case 1:  // EASY MODE TERMINADO
    
          var options = {
            strings: ["Incremental Mode Terminado", "" + localStorage.getItem('im_totalIm1') + " Pts Para " + p1 +"","" + localStorage.getItem('im_totalIm2') + " Pts Para " + p2 +"", "Prepárate para el Random Mode", "" ],
            typeSpeed: 100,
            showCursor: false,
            smartBackspace: true
          };
    
          var typed = new Typed("#subs", options);
    
    
          $(".random>a").removeClass("disabled");
    
          break;
    
          case 2:  // HARD MODE TERMINADO
          var options = {
            strings: ["<h4>Random Mode Terminado</h4>", "<h4>" + localStorage.getItem('rm_totalRm1') + " Pts Para " + p1 +"</h4>","<h4>" + localStorage.getItem('rm_totalRm2') + " Pts Para " + p2 +"</h4>", "<h4>Prepárate para Temáticas</h4>", "<h4></h4>" ],
            typeSpeed: 100,
            showCursor: false,
            smartBackspace: true
          }
          var typed = new Typed("#typed", options);
          $("#tematicas").removeClass("disabled");
    
          break;
    
          case 3: //Tematicas terminado
            var options = {
              strings: ["<h4>Temáticas Terminado</h4>", "<h4>" + localStorage.getItem('te_totalTematicas1') + " Pts Para " + player1 +"</h4>","<h4>" + localStorage.getItem('te_totalTematicas2') + " Pts Para " + player2 +"</h4>", "<h4>Prepárate para Random mode</h4>"],
              typeSpeed: 100,
              showCursor: false,
              smartBackspace: true
            }
            var typed = new Typed("#typed", options);
            $("#randomMode").removeClass("disabled");
    
            break;
    
          case 4: // personajes terminado
          var options = {
            strings: ["<h4>Random Mode Terminado</h4>", "<h4>" + localStorage.getItem('rm_totalRandom1') + " Pts Para " + player1 +"</h4>","<h4>" + localStorage.getItem('rm_totalRandom2') + " Pts Para " + player2 +"</h4>", "<h4>Se viene el minuto libre...</h4>"],
            typeSpeed: 70,
            showCursor: false,
            smartBackspace: true
          }
          var typed = new Typed("#typed", options);
          $("#libre").removeClass("disabled");
    
          break;
    
          case 5:
          var options = {
            strings: ["<h4>Libre Terminado</h4>", "<h4>" + localStorage.getItem('li_totalLibre1') + " Pts Para " + player1 +"</h4>","<h4>" + localStorage.getItem('li_totalLibre2') + " Pts Para " + player2 +"</h4>", "<h4>Prepárate para Deluxe</h4>", "<h4></h4>" ],
            typeSpeed: 70,
            showCursor: false,
            smartBackspace: true
          }
          var typed = new Typed("#typed", options);
          $("#deluxe").removeClass("disabled");
    
          break;
    
          case 6:
          var options = {
            strings: ["<h4>Deluxe Terminado</h4>", "<h4>" + localStorage.getItem('de_totalDeluxe1') + " Pts Para " + player1 +"</h4>","<h4>" + localStorage.getItem('de_totalDeluxe2') + " Pts Para " + player2 +"</h4>", "<h4>Finaliza para ver los resultados</h4>", "<h4></h4>" ],
            typeSpeed: 70,
            showCursor: false,
            smartBackspace: true
          }
          var typed = new Typed("#typed", options);
    
          //activar termianr batalla
          $("#btn-terminarBatalla").removeClass("disabled");
    
    
      }//fin switch
    

});

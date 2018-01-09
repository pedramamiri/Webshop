$(document).ready(function(){
    console.log("hello world")
    localStorage.nykl;
    localStorage.nykl2;
    localStorage.nykl3;
    var utvaldaProdukter =[];
    localStorage.utvpro;
    var x=55; 
    sessionStorage.remo;
    
    // shooroo be fetch kardane huvud kategri

    fetch('huvudkategori.json')
    .then(function(response)
    {
        return response.json();
    })
    .then(function(json)
    {
        // inja append kardane batem haye header
       hKategori = json;      
       $(".hmeny").append('<li class="logo"><a href="index.html">Arad Butik</a></li>');
       
       for(var i=0;i<4;i++){
        $(".hmeny").append('<li class="toKategori" id="'+[i]+'"><a href="produkt.html">'+hKategori[i].countryname+'</a></li>');
    }
       $(".hmeny").append('<li class="info" id="shop" >KUND VAGN</li>');
       $(".hmeny").append('<li class="info">Kontakt</li>');
       $(".hmeny").append('<li class="info">Info</li>');
       
       openKategori();
       getNykl();
       toBuy();
       console.log(localStorage.utvpro);     
       console.log(localStorage.nykl3);
       
    });
   
    
    // fetch kardane under kategori
    fetch('underkategori.json')
    .then(function(response)
    {
        return response.json();
    })
    .then(function(json)
    {
        uKategori = json;  
    });



    fetch('produkter.json')
    .then(function(response)
    {
        return response.json();
    })
    .then(function(json)
    {
        allProdukt = json;       
        printProduct();
       
   
    });


    function openKategori(){
        $(".toKategori").mouseenter(function(){
        $( ".umeny" ).empty();
        var index = Number($(this).attr('id'));
        for (var i=0;i<uKategori.length;i++){
            if( index == uKategori[i].huvudkategori){
                $(".umeny").append('<p class="tnKategori" id="'+[i]+'"><a href="produkt.html">'+uKategori[i].stadname+'</a></p>');
                getnykl2();
            }
        }
        });               
    }

    function getNykl(){
        $(".toKategori").click(function(){
            localStorage.nykl = Number($(this).attr('id'));
                                  
        }); 
    }
    

    function getnykl2(){
        $(".tnKategori").click(function(){
            localStorage.nykl2 = Number($(this).attr('id'));
            localStorage.nykl = 86;            
        });
    }

    function getnykl3(){
        $(".foto").click(function(){            
            localStorage.nykl3 = Number($(this).attr('id'));
            $( ".showProdukt" ).empty();
            $(".showProdukt").append('<div class="card" id="infopro" style="width:650px"><h4 class="card-title">'+allProdukt[localStorage.nykl3].prodName+'</h4><img class="card-img-top" src="'+ allProdukt[localStorage.nykl3].prourl +'" alt="image!" style="width:80%; height:400px;"><div class="card-body"><p class="card-text"> '+allProdukt[localStorage.nykl3].prodDesc+'</p><p class="card-text"> '+allProdukt[localStorage.nykl3].prodPrice+" kr "+'</p><a href="#" class="btn btn-primary" id="butten">Add to card</a></div></div>');
            addToCard();  
            console.log(localStorage.nykl3) ;                    
        });
    }
    
    



    $(".nav").mouseleave(function(){
        $( ".umeny" ).empty();
    });
    
    function printProduct(){
        if(localStorage.nykl == 86){
            for(var i=0;i<allProdukt.length;i++){
             if(localStorage.nykl2 == allProdukt[i].underKat){
               $(".showProdukt").append('<div class="card" style="width:400px"><h4 class="card-title">'+allProdukt[i].prodName+'</h4><a class="foto" href="#" id="'+[i]+'"><img class="card-img-top" src="'+ allProdukt[i].prourl +'" alt="image!" style="width:80%; height:300px;"></a></div>');    
               }

            }
        }  
    else{
            for(var i=0;i<allProdukt.length;i++){
               if(localStorage.nykl == allProdukt[i].huvudKat){
               $(".showProdukt").append('<div class="card" style="width:400px"><h4 class="card-title">'+allProdukt[i].prodName+'</h4><a class="foto" href="#" id="'+[i]+'"><img class="card-img-top" src="'+ allProdukt[i].prourl +'" alt="image!" style="width:80%; height:300px;"></a></div>');    
               }
   
            }
         
        }  
        getnykl3(); 
        
    }

    function addToCard(){
        $("#butten").click(function(){
            if(localStorage.utvpro == undefined){
            utvaldaProdukter.push(localStorage.nykl3);
            localStorage.utvpro = JSON.stringify(utvaldaProdukter);
            console.log(localStorage.utvpro);
            }
            else{
                utvaldaProdukter = JSON.parse(localStorage.utvpro);
                utvaldaProdukter.push(localStorage.nykl3);
                localStorage.utvpro = JSON.stringify(utvaldaProdukter);
                console.log(localStorage.utvpro);
                kundvagn();
                
            }
        });

    }

    function kundvagn(){
        if( localStorage.utvpro !== null){
            $("#shop").css("background-color", "red");

        }
    }

      function toBuy(){

         
      $("#shop").click(function(){
        $( ".showProdukt" ).empty();
        $(".utvpro").empty();
        $(".showProdukt").append('<h1 style="color:black; margin-bottom:30px;">VARUKORG</h1> ');
        utvaldaProdukter = JSON.parse(localStorage.utvpro);
        console.log(utvaldaProdukter);
        for(var i=0;i<utvaldaProdukter.length;i++){           
                    $(".utvpro").append('<div  class="shovaror" ><button type="button" class="close" id="'+utvaldaProdukter[i]+'">x</button><img  src="'+ allProdukt[utvaldaProdukter[i]].prourl +'" alt="image!" style="width:60px; height:60px;"><h4 style="color:black;  ">'+allProdukt[utvaldaProdukter[i]].prodName+" "+" -"+allProdukt[utvaldaProdukter[i]].prodPrice+"kr"+'</h4></div>');
                    x=x+Number(allProdukt[utvaldaProdukter[i]].prodPrice);
                    
                }
                $(".utvpro").append('<div class="frakt"><h4>Frakt</h4><h4>55 kr</h4></div>');
                $(".utvpro").append('<hr class="style3" style="border-width: 3px;"/>');
                $(".utvpro").append('<div class="samma"><h4>TOTALSUMMA(inkl. moms)</h4><h4>'+x+" "+"kr"+'</h4>')               
                close();
        });
    }


      function close(){
        
          $(".close").click(function(){
             x = 55;
             utvaldaProdukter = JSON.parse(localStorage.utvpro);
             $(this).parent().hide();
             var removeitem = Number($(this).attr('id'));
             console.log(removeitem);
             sessionStorage.remo = 80;
             for (var i=0; i<utvaldaProdukter.length; i++){
                 if(removeitem == utvaldaProdukter[i] && sessionStorage.remo != 90){
                 utvaldaProdukter.splice(i, 1);
                 console.log(utvaldaProdukter);
                 sessionStorage.remo = 90
                 console.log(sessionStorage.remo );
                 }
                }
            $(".samma").empty();
            for(var i=0;i<utvaldaProdukter.length;i++){           
            x=x+Number(allProdukt[utvaldaProdukter[i]].prodPrice);                 
            }
            $(".utvpro").append('<div class="samma"><h4>TOTALSUMMA(inkl. moms)</h4><h4>'+x+" "+"kr"+'</h4>')

               localStorage.utvpro = JSON.stringify(utvaldaProdukter);          
         });
      }





       
    
});
    

   


    
    
    

    
    
    






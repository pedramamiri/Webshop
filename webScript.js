$(document).ready(function(){
    console.log("hello world")
    localStorage.nykl;
    localStorage.nykl2;
    localStorage.nykl3;
    var utvaldaProdukter =[];
    localStorage.utvpro;
    // fetch huvud kategori

    fetch('huvudkategori.json')
    .then(function(response)
    {
        return response.json();
    })
    .then(function(json)
    {
       hKategori = json;      
       $(".hmeny").append('<li class="logo"><a href="index.html">Arad Butik</a></li>');
       
       for(var i=0;i<4;i++){
        $(".hmeny").append('<li class="toKategori" id="'+[i]+'"><a href="produkt.html">'+hKategori[i].countryname+'</a></li>');
    }
       $(".hmeny").append('<li class="info" id="shop">KUND VAGN</li>');
       $(".hmeny").append('<li class="info">Kontakt</li>');
       $(".hmeny").append('<li class="info">Info</li>');
       openKategori();
       getNykl();
       kundvagn();      
       console.log(localStorage.nykl3);
       
    });


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
            $(".showProdukt").append('<div class="card" style="width:400px"><h4 class="card-title">'+allProdukt[localStorage.nykl3].prodName+'</h4><img class="card-img-top" src="'+ allProdukt[localStorage.nykl3].prourl +'" alt="image!" style="width:80%; height:300px;"><div class="card-body"><p class="card-text"> '+allProdukt[localStorage.nykl3].prodDesc+'</p><p class="card-text"> '+allProdukt[localStorage.nykl3].prodPrice+" kr "+'</p><a href="#" class="btn btn-primary" id="butten">Add to card</a></div></div>');
            addToCard();                       
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
            if(localStorage.utvpro == null){
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

    

   


    
    
    

    
    
    
});





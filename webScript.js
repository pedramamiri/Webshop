$(document).ready(function(){
    console.log("hello world")
    localStorage.nykl;
    localStorage.nykl2;
    // fetch huvud kategori

    fetch('huvudkategori.json')
    .then(function(response)
    {
        return response.json();
    })
    .then(function(json)
    {
        hKategori = json;
       console.log(hKategori[0].countryname);
       $(".hmeny").append('<li class="logo"><a href="index.html">Arad Butik</a></li>');
       
       for(var i=0;i<4;i++){
        $(".hmeny").append('<li class="toKategori" id="'+[i]+'"><a href="produkt.html">'+hKategori[i].countryname+'</a></li>');
    }
       $(".hmeny").append('<li class="info">KUND VAGN</li>');
       $(".hmeny").append('<li class="info">Kontakt</li>');
       $(".hmeny").append('<li class="info">Info</li>');
       openKategori();
       getNykl();      
       console.log(localStorage.nykl2);
       console.log(localStorage.nykl);
       
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
        $(".toKategori").hover(function(){
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
    
    



    $(".nav").mouseleave(function(){
        $( ".umeny" ).empty();
    });
    
    function printProduct(){
        if(localStorage.nykl == 86){
            for(var i=0;i<allProdukt.length;i++){
             if(localStorage.nykl2 == allProdukt[i].underKat){
               $(".showProdukt").append('<div class="card" style="width:400px"><h4 class="card-title">'+allProdukt[i].prodName+'</h4><img class="card-img-top" src="'+ allProdukt[i].prourl +'" alt="image!" style="width:80%; height:300px;"><div class="card-body"><p class="card-text"> '+allProdukt[i].prodDesc+'</p></div></div>');    
               }

            }
        }  
    else{
            for(var i=0;i<allProdukt.length;i++){
               if(localStorage.nykl == allProdukt[i].huvudKat){
               $(".showProdukt").append('<div class="card" style="width:400px"><h4 class="card-title">'+allProdukt[i].prodName+'</h4><img class="card-img-top" src="'+ allProdukt[i].prourl +'" alt="image!" style="width:80%; height:300px;"><div class="card-body"><p class="card-text"> '+allProdukt[i].prodDesc+'</p></div></div>');    
               }
   
            }
         
        }    
    }
    
    
    

    
    
    
});





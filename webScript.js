$(document).ready(function(){
    console.log("hello world")
    localStorage.nykl;
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
       getNykl()
    });
    fetch('underkategori.json')
    .then(function(response)
    {
        return response.json();
    })
    .then(function(json)
    {
        uKategori = json;
       console.log(uKategori[0].stadname);
   
    });

    fetch('produkter.json')
    .then(function(response)
    {
        return response.json();
    })
    .then(function(json)
    {
        allProdukt = json;
       console.log(allProdukt[0].prodName);
       printProduct();
   
    });


    function openKategori(){
        $(".toKategori").hover(function(){
        $( ".umeny" ).empty();
        var index = Number($(this).attr('id'));
        for (var i=0;i<uKategori.length;i++){
            if( index == uKategori[i].huvudkategori){
                $(".umeny").append('<p class="tnKategori"><a href="produkt.html">'+uKategori[i].stadname+'</a></p>');                
            }
        }
        });        
    }

    function getNykl(){
        $(".toKategori").click(function(){
            localStorage.nykl = Number($(this).attr('id'));
                        
        }); 
    }

    $(".nav").mouseleave(function(){
        $( ".umeny" ).empty();
    });
    
    function printProduct(){
      for(var i=0;i<allProdukt.length;i++){
         if(localStorage.nykl == allProdukt[i].huvudKat){
            $(".showProdukt").append('<div class="card" style="width:400px"><h4 class="card-title">'+allProdukt[i].prodName+'</h4><img class="card-img-top" src="'+allProdukt[i].prourl +'" alt="image!" style="width:100%; height:300px;"><a data-pin-do="embedPin" href="https://www.pinterest.com/pin/441141725992933737/"></a><div class="card-body"><p class="card-text"> '+allProdukt[i].prodDesc+'</p></div></div>' );    
         }

      }
    } 

    
    
    
});




/*function showPost(){
    for (var i=0; i<4; i++){
        cardTitle = data[i].title.rendered;
        cardText = data[i].excerpt.rendered.substring(0,150);
        cardLink = data[i].link;
        cardImg = data[i].better_featured_image.source_url;
        $(".container").append('<div class="card" style="width:400px"><h4 class="card-title">'+cardTitle+'</h4><img class="card-img-top" src="'+ cardImg +'" alt="image!" style="width:100%; height:300px;"><div class="card-body"><p class="card-text"> '+cardText+ "[...]"+'</p><a class="card-link" href="'+cardLink+'">Läs mer</a></div></div>' );

    }
}*/
$(document).ready(function(){
    console.log("hello world")
    
    fetch('huvudkategori.json')
    .then(function(response)
    {
        return response.json();
    })
    .then(function(json)
    {
        hKategori = json;
       console.log(hKategori[0].countryname);
       $(".hmeny").append('<li class="logo">Arad Butik</li>');
       
       for(var i=0;i<4;i++){
        $(".hmeny").append('<li class="toKategori" id="'+[i]+'">'+hKategori[i].countryname+'</li>');
    }
       $(".hmeny").append('<li class="info">KUND VAGN</li>');
       $(".hmeny").append('<li class="info">Kontakt</li>');
       $(".hmeny").append('<li class="info">Info</li>');
       openKategori();
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
    function openKategori(){
        $(".toKategori").hover(function(){
        $( ".umeny" ).empty();
        var index = Number($(this).attr('id'));
        for (var i=0;i<uKategori.length;i++){
            if( index == uKategori[i].huvudkategori){
                $(".umeny").append('<p class="tnKategori">'+uKategori[i].stadname+'</p>');                
            }
        }
        });
    }
    $(".nav").mouseleave(function(){
        $( ".umeny" ).empty();
    });
    

    
});
$(document).ready(function(){
    console.log("hello world")
    localStorage.nykl;
    localStorage.nykl2;
    localStorage.nykl3;
    var utvaldaProdukter =[];
    localStorage.utvpro;
    localStorage.kundName;
    localStorage.kundlist;
    console.log(localStorage.kundName);
    
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
       $(".vagn").append('<li class="fa fa-shopping-cart" style="font-size:24px;  float: right;" id="shop" ></li>');
       $(".hmeny").append('<li class="info" id="info2">Kontakt</li>');
       $(".hmeny").append('<li class="info" id="info2">Info</li>');
       
       openKategori();
       getNykl();
       toBuy();
       kundvagn();
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
            kundvagn();
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
        if( localStorage.utvpro == undefined ){
            $("#shop").css("color", "white");
            }
            else {
            utvaldaProdukter = JSON.parse(localStorage.utvpro);
            if (utvaldaProdukter.length == 0){
                $("#shop").css("color", "white");
            }
            else{               
                $("#shop").css("color", "#ffbc00");  
            }
        }
    }
    


      function toBuy(){

         
      $("#shop").click(function(){
        $(".test").css("display","flex");  
        x=55  
        $( ".showProdukt" ).empty();
        $(".adminsida").empty();
        $(".utvpro").empty();              
        $(".showProdukt").append('<h1 style="color:black; margin-bottom:30px;">VARUKORG</h1> ');
        if(localStorage.utvpro !== undefined){
        utvaldaProdukter = JSON.parse(localStorage.utvpro);
        console.log(utvaldaProdukter);
        for(var i=0;i<utvaldaProdukter.length;i++){           
                    $(".utvpro").append('<div  class="shovaror" ><button type="button" class="close" id="'+utvaldaProdukter[i]+'">x</button><img  src="'+ allProdukt[utvaldaProdukter[i]].prourl +'" alt="image!" style="width:60px; height:60px;"><h4 style="color:black;  ">'+allProdukt[utvaldaProdukter[i]].prodName+" "+" -"+allProdukt[utvaldaProdukter[i]].prodPrice+"kr"+'</h4></div>');
                    x=x+Number(allProdukt[utvaldaProdukter[i]].prodPrice);
                    
                }
            }
                $(".utvpro").append('<div class="frakt"><h4>Frakt</h4><h4>55 kr</h4></div>');
                $(".utvpro").append('<div class="samma"><h4>TOTALSUMMA(inkl. moms)</h4><h4>'+x+" "+"kr"+'</h4>')
                $(".inlogning").css("display","inline");
                $(".name").css("display","none");
                $(".surname").css("display","none");
                $(".submit").css("display","none");
                $(".login").css("display","inline");
                $(".signup").css("display","inline");
                if(localStorage.kundName == undefined || localStorage.kundName == 0){
                    $(".welcome").empty();
                    $(".logout").css("display","none");
                    $(".welcome").append('Please enter username and password');

                }
                else if (localStorage.kundName == "admin"){
                    $(".welcome").empty();
                    $(".adminsida").empty();
                    $(".login").css("display","none");
                    $(".signup").css("display","none");
                    $(".logout").css("display","inline");
                    $(".adminsida").append('<input class="admins" type="button" value="View admin page"  />');
                    $(".welcome").append('Hello '+localStorage.kundName +', you are allready logged in');  
                }
                else{
                    $(".welcome").empty();
                    $(".login").css("display","none");
                    $(".signup").css("display","none");
                    $(".logout").css("display","inline");
                    $(".welcome").append('Hello '+localStorage.kundName +', you are allready logged in'); 

                }
               if(x>55){
                    
                   $(".utvpro").append('<div class="tobuy"><input class="buy" type="button" value="click here to buy"  /></div>')
                } 
                viweads();
                tobuy();
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
            $(".tobuy").empty();

            for(var i=0;i<utvaldaProdukter.length;i++){           
            x=x+Number(allProdukt[utvaldaProdukter[i]].prodPrice);                 
            }
            $(".utvpro").append('<div class="samma"><h4>TOTALSUMMA(inkl. moms)</h4><h4>'+x+" "+"kr"+'</h4>')
            
               localStorage.utvpro = JSON.stringify(utvaldaProdukter);
               kundvagn();
               if(x>55){
                
               $(".utvpro").append('<div class="tobuy"><input class="buy" type="button" value="click here to buy"  /></div>')
            } 
            tobuy();
                      
         });

      }
      var kunder =[
        {
            
            "name": "janne",
            "surname" : "janne",
            "usename": "janne@hiveandfive.se",
            "password": "12345"
        },{
    
            "name":"test",
            "surname":"test",
            "usename": "test",
            "password": "password"
        },
        {
            
            "name":"admin",
            "usename": "admin",
            "password": "admin"
        }

    ]
    $(".login").click(function(){
        nvalue = $(".usename").val();
        pasvalue =$(".passvalue").val();
        var key = 0;
        if ( localStorage.kundlist == undefined){            
        for(var i=0;i<kunder.length;i++){
            if( key == 0){
             if(nvalue == "admin" && pasvalue == "admin" ){
                 console.log("admin");
                 key = 1;
                 localStorage.kundName = "admin";
                 $(".welcome").empty();
                 $(".adminsida").empty();
                 $(".welcome").append('Hello admin, you are logged in')
                 $(".logout").css("display","inline");
                 $(".signup").css("display","none");
                 $(".login").css("display","none");
                 $(".adminsida").append('<input class="admins" type="button" value="View admin page"  />');

             }   
           else if(nvalue == kunder[i].usename && pasvalue == kunder[i].password){
            $(".welcome").empty();   
            localStorage.kundName = kunder[i].name;
            console.log(localStorage.kundName);
            $(".welcome").append('Hello '+localStorage.kundName +', you are logged in')
            $(".logout").css("display","inline");
            $(".signup").css("display","none");
            $(".login").css("display","none");
            key = 1;     
           }
           else {
            $(".welcome").empty();
            $(".welcome").append('Please enter correct username and password');
           }

        }
        }
        }else{
            kunder = JSON.parse(localStorage.kundlist);
            for(var i=0;i<kunder.length;i++){
                if( key == 0){
                    if(nvalue == "admin" && pasvalue == "admin" ){
                        console.log("admin");
                        key = 1;
                        localStorage.kundName = "admin";
                        $(".welcome").empty();
                        $(".adminsida").empty();
                        $(".welcome").append('Hello admin, you are logged in')
                        $(".logout").css("display","inline");
                        $(".signup").css("display","none");
                        $(".login").css("display","none");
                        $(".adminsida").append('<input class="admins" type="button" value="View admin page"  />');

                    }   
               else if(nvalue == kunder[i].usename && pasvalue == kunder[i].password){
                $(".welcome").empty();   
                localStorage.kundName = kunder[i].name;
                console.log(localStorage.kundName);
                $(".welcome").append('Hello '+localStorage.kundName +', you are logged in')
                $(".logout").css("display","inline");
                $(".signup").css("display","none");
                $(".login").css("display","none");
                key = 1;     
               }
               else {
                $(".welcome").empty();
                $(".welcome").append('Please enter correct username and password');
               }
    
            }
            }
        }
        viweads();


    });

    $(".logout").click(function(){
        $(".welcome").empty();       
        $(".welcome").append('Please enter username and password');
        console.log("yes");
        $(".logout").css("display","none");
        $(".signup").css("display","inline");
        $(".login").css("display","inline");
        $(".adminsida").empty();
        
        if ( localStorage.kundName == "admin"){
            $(".utvpro").empty();
            $( ".showProdukt" ).empty();
            x = 55;
        if(localStorage.utvpro !== undefined){
            utvaldaProdukter = JSON.parse(localStorage.utvpro);
            console.log(utvaldaProdukter);
            for(var i=0;i<utvaldaProdukter.length;i++){           
                        $(".utvpro").append('<div  class="shovaror" ><button type="button" class="close" id="'+utvaldaProdukter[i]+'">x</button><img  src="'+ allProdukt[utvaldaProdukter[i]].prourl +'" alt="image!" style="width:60px; height:60px;"><h4 style="color:black;  ">'+allProdukt[utvaldaProdukter[i]].prodName+" "+" -"+allProdukt[utvaldaProdukter[i]].prodPrice+"kr"+'</h4></div>');
                        x=x+Number(allProdukt[utvaldaProdukter[i]].prodPrice);
                        
                    }
                }
                    $(".showProdukt").append('<h1 style="color:black; margin-bottom:30px;">VARUKORG</h1><br> ');
                    $(".utvpro").append('<div class="frakt"><h4>Frakt</h4><h4>55 kr</h4></div>');
                    $(".utvpro").append('<div class="samma"><h4>TOTALSUMMA(inkl. moms)</h4><h4>'+x+" "+"kr"+'</h4>')
                    if(x>55){
                        
                       $(".utvpro").append('<div class="tobuy"><input class="buy" type="button" value="click here to buy"  /></div>')
                    } 

                    tobuy();
                    close();
        }
        localStorage.kundName = 0;


        
        //sessionStorage.clear();
    });

    function tobuy(){
    $(".buy").click(function(){
        if(localStorage.kundName == undefined || localStorage.kundName == 0){
            $(".utvpro").empty();
            $( ".showProdukt" ).empty(); 
            $(".inlogning").css("display","none");
            //$(".logout").css("display","none");            
            $(".showProdukt").append('<h1 style="color:black; margin-bottom:30px;">VARUKORG</h1><br> ');
            $(".utvpro").append('<h1 style="color:black; margin-bottom:30px;">Thanks for shopping </h1> ');
           // window.localStorage.clear();
           // localStorage.clear();
          // sessionStorage.clear();
           utvaldaProdukter = [];
           localStorage.utvpro = JSON.stringify(utvaldaProdukter);
            kundvagn();

     }
     else{
        $(".utvpro").empty();
        $( ".showProdukt" ).empty(); 
        $(".inlogning").css("display","none");            
        $(".showProdukt").append('<h1 style="color:black; margin-bottom:30px;">VARUKORG</h1><br> ');
        $(".utvpro").append('<h1 style="color:black; margin-bottom:30px;">Thanks'+" "+ localStorage.kundName +' for your shopping  </h1> ');
       // window.localStorage.clear();
        //sessionStorage.clear();
        utvaldaProdukter = [];
        localStorage.utvpro = JSON.stringify(utvaldaProdukter);
        kundvagn();

     }
    });
}
    
    $(".signup").click(function(){
        $(".welcome").empty();
        $(".welcome").append('Please enter your information');
        $(".name").css("display","inline");
        $(".surname").css("display","inline");
        $(".submit").css("display","inline");
        $(".login").css("display","none");
        $(".signup").css("display","none");
        $(".logout").css("display","none");
        

    });
    $(".submit").click(function(){
        $(".welcome").empty();
        $(".welcome").append('Please enter your information');
        var name = $("#name").val();
        var surname = $("#surname").val();
        var username = $(".usename").val();
        var pass = $(".passvalue").val();
        if( !$("#name").val() || !$("#surname").val() || !$(".usename").val() || !$(".passvalue").val()  ){
            $(".welcome").append(' <div class="alert alert-info alert-dismissable fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Ooops!</strong> Please fill all of boxes.</div> ');
        
        }else{
            var kund ={
                
                        "name":name,
                        "surname":surname,
                        "usename": username,
                        "password": pass
                    }
                    if(localStorage.kundlist == undefined){
                        kunder.push(kund);                        
                        localStorage.kundlist = JSON.stringify(kunder);
                        console.log(localStorage.kundlist);
                    }else{
                        kunder = JSON.parse(localStorage.kundlist);
                        kunder.push(kund);
                        localStorage.kundlist = JSON.stringify(kunder);
                        console.log(localStorage.kundlist);


                    }
                    $(".welcome").empty();
                    $(".welcome").append('Please enter username and password');
                    $(".name").css("display","none");
                    $(".surname").css("display","none");
                    $(".submit").css("display","none");
                    $(".login").css("display","inline");
                    $(".signup").css("display","inline");
                    $(".logout").css("display","none");            
        }
    });


    function viweads(){
        $(".admins").click(function(){
            console.log("hello admin");
            $(".showProdukt").empty();
            $(".utvpro").empty();
            $(".showProdukt").append('<h1 style="color:black; margin-bottom:30px;">Admin page (customer list) </h1><br> ');
            if (localStorage.kundlist == undefined){
                for (var i=0;i<kunder.length;i++){
                    $(".utvpro").append('<div><h4>Customer '+[i+1]+'</h4><p style="color:black;">'+kunder[i].name +" "+kunder[i].surname +" "+kunder[i].usename +" "+kunder[i].password +' </div>')
                    
                }

            }else{
            kunder = JSON.parse(localStorage.kundlist);
            console.log(kunder);
            for (var i=0;i<kunder.length;i++){
                $(".utvpro").append('<div><h4>Customer '+[i+1]+'</h4><p style="color:black;">'+kunder[i].name +" "+kunder[i].surname +" "+kunder[i].usename +" "+kunder[i].password +' </div>')
                
            }
            }





        });
        }


    

      
    








       
    
});
    

   


    
    
    

    
    
    






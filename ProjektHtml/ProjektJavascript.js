$(document).ready(function(){
   
    
    $("#robin").click(function(){                          
    $("#robin").removeClass("fornamn");                     //Funktion för att få understruket namn
    $("#mattias, #oskar, #alla").removeClass("selected");   // och loada ny profil på "Om oss" sidan
    $("#mattias, #oskar, #alla").addClass("fornamn")        // Gäller 4 första funktionerna
     $("#robin").addClass("selected");   
     $("#bottomOmOss").empty();
     $("#bottomOmOss").hide().load("https://raw.githubusercontent.com/BaggenBengt/ProjektHtml/Robin/RobinPersonliga.html").fadeIn(1000);     
    })


    $("#mattias").click(function(){
        $("#bottomOmOss").empty();
        $("#mattias").removeClass("fornamn"); 
        $("#robin, #oskar, #alla").removeClass("selected");
        $("#robin, #oskar, #alla").addClass("fornamn")
         $("#mattias").addClass("selected"); 
        $("#bottomOmOss").hide().load("https://raw.githubusercontent.com/BaggenBengt/ProjektHtml/Robin/MattiasPersonliga.html").fadeIn(1000);     
       }) 
   
       $("#oskar").click(function(){
        $("#bottomOmOss").empty();
        $("#oskar").removeClass("fornamn"); 
        $("#mattias, #robin, #alla").removeClass("selected");
        $("#mattias, #robin, #alla").addClass("fornamn")
         $("#oskar").addClass("selected"); 
        $("#bottomOmOss").hide().load("https://raw.githubusercontent.com/BaggenBengt/ProjektHtml/Robin/OskarPersonliga.html").fadeIn(1000);     
       }) 


       $("#alla").click(function(){
        $("#bottomOmOss").empty();
        $("#alla").removeClass("fornamn"); 
        $("#mattias, #robin, #oskar").removeClass("selected");
        $("#mattias, #robin, #oskar").addClass("fornamn")
         $("#alla").addClass("selected"); 
         $("#bottomOmOss").hide().load("https://raw.githubusercontent.com/BaggenBengt/ProjektHtml/Robin/ProjektOmoss.html #bottomOmOss").fadeIn(1000);
         
       })

    
       $("#spotifyText").fadeIn(1500);
       $("#chromeText").fadeIn(1500);
   



//Startar och stänger av Timern anropar även funktionen "bytBild()" ----> Knappen "spela bildspel har value " " för att inget ska synas på knappen
// Startar även musiken!

$('#spelaBildspel').click(function(){
    var namn = $('#spelaBildspel').val();
    if (namn == " "){
        playAudio()
    tid = setInterval("bytBild()", 1000);

    $('#spelaBildspel').val("  ");
    $('#spelaBildspel').css('opacity', '0.3');
    $("#spelaBildspel").css("background-image", "url('pause1.png')");
}
     if (namn == "  "){
        x.pause();
    clearInterval(tid);
    $('#spelaBildspel').val(" ");
    $('#spelaBildspel').css('opacity', '1');
    $("#spelaBildspel").css("background-image", "url('play1.png')");
     }
    });
    //Startar och stänger av Timern <----
});

//Musiken till bildspelet!
var x = document.getElementById("musikSpelare");

function playAudio() {
  x.play();
}
function pauseAudio() {
  x.pause();
}





 // För Hambugeren (navbaren) så att den slide in och slide ut. On click!
function navSlide(){
var burger = document.querySelector('.scrollLista');
var nav = document.querySelector('.meny');

burger.addEventListener('click',()=>{
    nav.classList.toggle('meny-active');
    
});
}
navSlide();

//Gömmer Bildtexten  och spela upp knappen när hamburgaren åker ut!

$(".scrollLista").click(function(){
    setTimeout(function(){

    $("#textBildspel").toggle();
    $("#spelaBildspel").toggle();
    }, 500);
  });


// Funktionen som byter själva bilden!
function bytBild(){
   
    var image = document.getElementById("imgBildSpel");
    var x = document.getElementById("textBildspel");
    if(image.src.match("bild1.jpg")){
    image.src = "bild2.jpg";
    x.innerHTML ="Till"
  
    }
    else if (image.src.match("bild2.jpg")){
    image.src = "bild3.jpg";
    x.innerHTML="Våran"
    }
    else if (image.src.match("bild3.jpg")){
    image.src = "bild4.jpg";
    x.innerHTML="Portfolio"
    }
    else{
    image.src = "bild1.jpg";
    x.innerHTML="Välkommen"
    }
    }

   

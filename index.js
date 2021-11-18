var dark = document.querySelectorAll(".margin-def")[1];

var bright = document.querySelectorAll(".margin-def")[2];

dark.addEventListener("click",function(){
    document.querySelector("body").style.backgroundColor='#3B3B3B';

    document.querySelectorAll(".margin-def")[0].style.backgroundColor='#3B3B3B';
    document.querySelectorAll(".margin-def")[1].style.backgroundColor='#3B3B3B';
    document.querySelectorAll(".margin-def")[2].style.backgroundColor='#3B3B3B';

    for(var i=0; i<17;i++){
        document.querySelectorAll(".for-theme")[i].style.color = 'rgba(255,255,255,.75)';
    }
});

bright.addEventListener("click",function(){
    document.querySelector("body").style.backgroundColor='rgba(255,255,255,.75)';

    document.querySelectorAll(".margin-def")[0].style.backgroundColor='rgba(255,255,255,.75)';
    document.querySelectorAll(".margin-def")[1].style.backgroundColor='rgba(255,255,255,.75)';
    document.querySelectorAll(".margin-def")[2].style.backgroundColor='rgba(255,255,255,.75)';

    for(var i=0; i<17;i++){
        document.querySelectorAll(".for-theme")[i].style.color = '#3B3B3B';
    }

});

'use strict';

window.addEventListener('load', event=>{


    function horloge()
    {
        // Ma div ou va venir d'afficher mon horloge
        let displayHorloge = document.querySelector("#display");
        // Génération d'une variable a la date de l'instant
        let date = new Date();
        // Stackage de l'heure, des minutes et des seconde
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let secondes = date.getSeconds();
        // Stockage des aiguilles
        let needleHours = document.querySelector(".hours");
        let needleMinutes = document.querySelector(".minutes");
        let needleSecondes = document.querySelector(".secondes");

        // Cal
        let secondesDeg = ((secondes/60)* 360);
        needleSecondes.style.transform = `rotate(${secondesDeg}deg)`;


        let minutesDeg = ((minutes/60) * 360);
        needleMinutes.style.transform = `rotate(${minutesDeg}deg)`;


        let hoursDeg = ((hours/12)*360) ;
        needleHours.style.transform = `rotate(${hoursDeg}deg)`;

        if (date.getHours() < 10){
            hours = `0${date.getHours()}`;
        }
        if (date.getMinutes() < 10){
            minutes = `0${date.getMinutes()}`;
        }
        if (date.getSeconds() < 10){
            secondes = `0${date.getSeconds()}`;
        }

        displayHorloge.innerHTML = `${hours} : ${minutes} : ${secondes}`;
    }


    let waiting = function() {
        let displayClock = document.querySelector('#clock');
        let divLoading = document.querySelector('#loading');

        divLoading.style.display = 'none';
        displayClock.style.display = 'flex';
    };

    setTimeout(waiting, 3000);
    setInterval(horloge,1000);

});
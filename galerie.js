const images = document.querySelectorAll('#galerie img'); //pour récupérer photos
let imgActive = 0;
images[imgActive].classList.add('show');

//pour affecter class hidden aux trois dernieres photos (sauf la premiere)
for (let i = 1; i < images.length; i+=1) {
    images[i].classList.add('hidden');
}

//clic sur bouton suivant - ecouteur d'evenement
document.querySelector('#next').addEventListener('click', function(){
    next(); //appeler function next ci-dessous
});

//fonction next
const next = function(){
    images[imgActive].classList.remove('show');
    images[imgActive].classList.add('hidden');
    imgActive += 1;
    if (imgActive >= images.length) {
        imgActive = 0;
    }
    images[imgActive].classList.remove('hidden');
    //pour gerer le temps (de transition)
    setTimeout(() => {
        images[imgActive].classList.add('show');
    }, 300);
};

//clic sur bouton precedent - ecouteur d'evenement
document.querySelector('#prev').addEventListener('click', function(){
    prev(); //appeler function next ci-dessous
});

//fonction previous
const prev = function(){
    images[imgActive].classList.remove('show');
    images[imgActive].classList.add('hidden');
    imgActive -= 1;
    if (imgActive < 0) { //pour retourner a la derniere photo
        imgActive = images.lenght - 1; //car le tableau commence à 0
    }
    images[imgActive].classList.remove('hidden');
    //pour gerer le temps (de transition)
    setTimeout(() => {
        images[imgActive].classList.add('show');
    }, 300);
};

//variable globale qui permet de stocker l'interval de temps
let interval;
//clic sur bouton play - ecouteur d'evenement
document.querySelector('#play').addEventListener('click', function(){
    interval = setInterval(next, 3000); //creation de l'interval de temps
});

//clic sur bouton pause
document.querySelector('#pause').addEventListener('click', function(){
    clearInterval(interval); //destruction de l'interval de temps
});

//gestion touches du clavier
window.addEventListener('keydown', function(e){
    if (e.key == 'ArrowRight'){
        next();
    }
    if (e.key == 'ArrowLeft'){
        prev();
    }
});

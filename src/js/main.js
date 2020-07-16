const btnMenu = document.querySelector('.btn-rond-menu');
const nav = document.querySelector('.nav-gauche');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const ligne = document.querySelector('.cont-ligne');

btnMenu.addEventListener('click', () => {
    
    ligne.classList.toggle('active');
    nav.classList.toggle('menu-visible');
});

if(window.matchMedia('(max-width: 1300px')) {

    allItemNav.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('menu-visible');
            ligne.classList.toggle('active');
        });
    });
}

// Animation écriture accueil

const txtAnim = document.querySelector('.text-animation');

let typewriter = new Typewriter(txtAnim,  {
    loop: false,
    deleteSpeed: 20
});

typewriter 
.pauseFor(1800)
.changeDelay(20)
.typeString('Yannick Decombes')
.pauseFor(300)
.typeString('<strong>, Développeur Full-Stack</strong> !')
.pauseFor(1000)
.deleteChars(13)
.typeString('<span style="color: #6d88e3;"> PHP</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: #048b9a;"> Symfony</span> !')
.pauseFor(1000)
.deleteChars(9)
.typeString('<span style="color: #708d23;"> Css</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: #eda126;"> JavaScript</span> !')
.pauseFor(1000)
.deleteChars(12)
.typeString('<span><strong>Full-Stack</strong></span> !')
.start();


// Animation Contact

const input_fields = document.querySelectorAll('input'); // 

for(let i = 0; i < input_fields.length; i++) {   // Ici on cible les deux input
    let field = input_fields[i];

    field.addEventListener('input', (e) => {                    // Ici a l'ecoute de l'evenement sur les input
        if(e.target.value !== ''){                              // Si l'on écrit, c'est donc diffèrent d'une chaîne de caractère vide alors on rajoute la class animation au parent de la cible

            e.target.parentNode.classList.add('animation');
        } else if(e.target.value === ''){                        // Sinon si pas entrain d'écrire on enleve la class animation
            e.target.parentNode.classList.remove('animation');
        }
    });
}

// Animation GSAP + ScrollMagic

const navbar = document.querySelector('.nav-gauche');
const titre = document.querySelector('h1');
const btn = document.querySelectorAll('.btn-acc');
const btnMedias = document.querySelectorAll('.media');
const btnRondAccueil = document.querySelector('.btn-rond');

const TL1 = gsap.timeline({paused: true});
TL1
.to(navbar, {left: '0px', ease: Power3.easeOut, duration: 0.6})
.from(titre, {y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4})
.staggerFrom(btn, 1, {opacity: 0}, 0.2, '-=0.30')
.staggerFrom(btnMedias, 1, {opacity: 0}, 0.2, '-=0.75')  // stagger pour animer un [] d'elements
.from(btnRondAccueil, {y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4}, '-=1');

window.addEventListener('load', () => {
    TL1.play();
});

// Animation ScrollMagic GSAP présentation

const presentationContainer = document.querySelector('.presentation');
const titrePres = document.querySelector('.titre-pres');
const presGauche = document.querySelector('.pres-gauche');
const listePres = document.querySelectorAll('.item-liste');

const tlpres = new TimelineMax();

tlpres
.from(titrePres, {y: -200, opacity: 0, duration: 0.6})
.from(presGauche, {y:-20, opacity: 0, duration: 0.6}, '-=0.5')
.staggerFrom(listePres, 1, {opacity: 0}, 0.2, '-=0.5');

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: presentationContainer,
    triggerHook: 0.5,
    reverse: false
})
.setTween(tlpres)
// .addIndicators()
.addTo(controller);

// Animation Portfolio

const portfolioContainer = document.querySelector('.portfolio');
const titrePortfolio = document.querySelector('.titre-port');
const itemPortfolio = document.querySelectorAll('.vague1');


const t1Portfolio = new TimelineMax();

t1Portfolio
.from(titrePortfolio, {y: -50, opacity: 0, duration: 0.5})
.staggerFrom(itemPortfolio, 1, {opacity: 0}, 0.2, '-=0.5');

const scene2 = new ScrollMagic.Scene({
    triggerElement: portfolioContainer,
    triggerHook: 0.5,
    reverse: false
})
.setTween(t1Portfolio)
.addTo(controller);

// Vague 2

const itemPortfolio2 = document.querySelectorAll('.vague2');


const t1Portfolio2 = new TimelineMax();

t1Portfolio2
.staggerFrom(itemPortfolio2, 1, {opacity: 0}, 0.2, '-=0.5');

const scene3 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio,
    triggerHook: 0.2,
    reverse: false
})
.setTween(t1Portfolio2)
.addTo(controller);

// Vague 3

const itemPortfolio3 = document.querySelectorAll('.vague3');


const t1Portfolio3 = new TimelineMax();

t1Portfolio3
.staggerFrom(itemPortfolio3, 1, {opacity: 0}, 0.2, '-=0.5');

const scene4 = new ScrollMagic.Scene({
    triggerElement: itemPortfolio2,
    triggerHook: 0.2,
    reverse: false
})
.setTween(t1Portfolio3)
.addTo(controller);

// Animation Range

const sectionComp = document.querySelector('.section-range');
const titreComp = document.querySelector('.titre-exp');
const allLabel = document.querySelectorAll('.label-skill');
const allPourcent = document.querySelectorAll('.number-skill');
const allBarres = document.querySelectorAll('.barre-skill');
const allShadowBarres = document.querySelectorAll('.barre-grises');

const tlCompetences = new TimelineMax();

tlCompetences
.from(titreComp, {opacity: 0, duration: 0.6})
.staggerFrom(allLabel, 0.5, {y: -50, opacity:0}, 0.1, '-=0.5')
.staggerFrom(allPourcent, 0.5, {y: -10, opacity:0}, 0.1, '-=1')
.staggerFrom(allShadowBarres, 0.5, {y: -10, opacity:0}, 0.1, '-=1')
.staggerFrom(allBarres, 0.5, {y: -10, opacity:0}, 0.1, '-=1');

const scene5 = new ScrollMagic.Scene({
    triggerElement: sectionComp,
    reverse: false
})
.setTween(tlCompetences)
.addTo(controller);

// Envoi email

$('#send_email').click(function(e){
    e.preventDefault();
    var data = {
        email: $('#email').val(),
        name: $('#name').val(),
        firstname: $('#firstname').val(),
        message: $('#message').val()
    };

    // AJAX
    
    $.ajax({
        url: "mail.php",
        type: 'POST',
        data: data,
        success: function(data) {
            $('#js_alert_success').css({'display' : 'block'});
            setTimeout(function(){
                $('#js_alert_success').css({'display' : 'none'});
                $('#email').val("");
                $('#name').val("");
                $('#firstname').val("");
                $('#message').val("");
            }, 3000);
        },
        error: function(data) {
            $('#js_alert_danger').css({'display' : 'block'});
            setTimeout(function(){
                $('#js_alert_danger').css({'display' : 'none'});
                $('#email').val("");
                $('#name').val("");
                $('#firstname').val("");
                $('#message').val("");
            }, 3000);
        }
    });
});

// ToolTip

/*$(document).ready(function() {
    $('.tooltip').tooltipster();
});*/
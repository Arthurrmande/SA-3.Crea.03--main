import './style.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1), // Déplace vers la gauche
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-scroll-container", // Élément qui déclenche
    pin: true,     // Épingle l'écran
    scrub: 1,      // Fluidité du scroll
    // Définit la longueur du scroll virtuel
    end: () => "+=" + document.querySelector(".horizontal-wrapper").offsetWidth
  }
});


// ANIMATION DU GRAPHIQUE SVG 
const tlGraphique = gsap.timeline({
  scrollTrigger: {
    trigger: ".info__touriste",
    start: "top 60%",
    toggleActions: "play none none reverse",
    markers: true,
  }
});

tlGraphique
  .from("#bars .bar", {
    scaleY: 0,
    transformOrigin: "bottom center",
    duration: 0.8,
    ease: "elastic.out(1, 0.5)",
    stagger: 0.1
  })

  .from("#rect-qui-revele", {
    scaleY: 0,
    transformOrigin: "bottom center",
    duration: 1.5,
    ease: "power2.inOut"
  }, "-=0.5")

  .from("#number", {
    y: -600,            
    opacity: 0,         
    duration: 1.5,      
    ease: "bounce.out"  
  }, "-=1.0");




// ANIMATION DE LA POPULATION
const tlPopulation = gsap.timeline({
  scrollTrigger: {
    trigger: ".population-section",
    start: "top 50%",
    toggleActions: "play none none reverse"
  }
});

tlPopulation
  .from(".mec-bleu", {
    y: -window.innerHeight, // Ils tombent depuis le haut de l'écran
    opacity: 0,
    duration: 1.5,
    ease: "bounce.out", // Effet de rebond au sol
    stagger: 0.2 // Petit délai entre chaque bleu pour ne pas qu'ils tombent en bloc
  })

  .from(".mec-blanc", {
    y: -window.innerHeight, 
    opacity: 0,
    duration: 1.2,
    ease: "bounce.out",
    stagger: {
      amount: 1.5, // Temps total pour que tous les blancs tombent
      grid: [6, 5], // Indique à GSAP qu'on est sur une grille 6 lignes, 5 colonnes
      from: "random"
    }
  }, "-=0.5"); // Cette anim commence 0.5s avant la fin de celle des bleus pour fluidifier



// ANIMATION DU CERCLE DE LA GES
  gsap.registerPlugin(ScrollTrigger);

  // 1. Calcul de la circonférence
  // Le rayon du cercle de remplissage est de 102.57
  const fillRadius = 102.57;
  const circumference = 2 * Math.PI * fillRadius;
  
  // 2. Initialisation des états
  // Cercle Violet (Remplissage)
  gsap.set("#violet-fill", {
    strokeDasharray: circumference,
    strokeDashoffset: circumference, // Le cercle est vide au départ
    rotation: -90, // Position de départ (haut)
    transformOrigin: "50% 50%"
  });
  
  // Secteur Rose
  gsap.set("#pink-sector", {
    scale: 0, // Taille 0 au départ
    opacity: 0,
    // Le point de pivot est le centre du cercle (coordonnées cx, cy du SVG)
    transformOrigin: "208px 246px" 
  });
  
  // 3. La Timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".info__ges",
      start: "top 30%",
      toggleActions: "play none none reverse"
    }
  });
  
  tl
    // Étape 1 : Le violet se remplit EN TOURNANT
    .to("#violet-fill", {
      strokeDashoffset: 0, // Remplissage complet
      rotation: 270, // Rotation pendant le remplissage (-90 + 360)
      duration: 2,
      ease: "power2.out"
    })
  
    // Étape 2 : Le rose apparait (pop)
    .to("#pink-sector", {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)" // Petit effet de rebond sympa
    }, "-=0.5"); // Commence un peu avant la fin du violet
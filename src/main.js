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
    trigger: ".population-section", // La section contenant la grille
    start: "top 50%", // L'anim commence quand le haut de la section est à 70% de l'écran
    toggleActions: "play none none reverse"
  }
});

tlPopulation
  // 1. Les mecs bleus tombent en premier
  .from(".mec-bleu", {
    y: -window.innerHeight, // Ils tombent depuis le haut de l'écran
    opacity: 0,
    duration: 1.5,
    ease: "bounce.out", // Effet de rebond au sol
    stagger: 0.2 // Petit délai entre chaque bleu pour ne pas qu'ils tombent en bloc
  })

  // 2. Tous les autres (blancs) tombent ensuite
  .from(".mec-blanc", {
    y: -window.innerHeight, // Ils tombent depuis le haut
    opacity: 0,
    duration: 1.2,
    ease: "bounce.out",
    stagger: {
      amount: 1.5, // Temps total pour que tous les blancs tombent
      grid: [6, 5], // Indique à GSAP qu'on est sur une grille 6 lignes, 5 colonnes
      from: "random" // Ils tombent de façon aléatoire (pluie), pas ligne par ligne
    }
  }, "-=0.5"); // Cette anim commence 0.5s avant la fin de celle des bleus pour fluidifier


  
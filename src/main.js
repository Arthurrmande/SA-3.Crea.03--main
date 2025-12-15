import './style.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// On sélectionne tous les panneaux qui doivent défiler horizontalement
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
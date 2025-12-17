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
    toggleActions: "play none restart reverse",
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
    toggleActions: "play none restart reverse"
  }
});

tlPopulation
  .from(".mec-bleu", {
    y: -window.innerHeight, 
    opacity: 0,
    duration: 1.5,
    ease: "bounce.out",
    stagger: 0.2 
  })

  .from(".mec-blanc", {
    y: -window.innerHeight, 
    opacity: 0,
    duration: 1.2,
    ease: "bounce.out",
    stagger: 0.1
  }, "-=0.5");


// ANIMATION DU CERCLE DE LA GES

// 1. Calculs
  const fillRadius = 102.57;
  const circonference = 2 * Math.PI * fillRadius;
  
// permet la mise en place : cache le cercle violet et le secteur rose au debut
  gsap.set("#violet-fill", {
    strokeDasharray: circonference,
    strokeDashoffset: circonference, 
    rotation: -90, 
    transformOrigin: "50% 50%"
  });
  
  gsap.set("#pink-sector", {
    scale: 0, 
    opacity: 0,
    transformOrigin: "208px 246px" 
  });
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".info__ges",
      start: "top 30%",
      toggleActions: "play none restart reverse"
    }
  });
  
  tl
    .to("#violet-fill", {
      strokeDashoffset: 0, 
      rotation: 270, 
      duration: 2,
      ease: "power2.out"
    })
  
    .to("#pink-sector", {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)" 
    }, "-=0.5"); 






import { DotLottie } from "@lottiefiles/dotlottie-web";

const anim1 = new DotLottie({
  canvas: document.querySelector("#animation__feu"),
  src: "https://lottie.host/6375a0c4-ddd1-43e7-aef5-767956ae6cc4/TGDzHyypne.lottie",
  autoplay: false,
  loop: false,
});

anim1.addEventListener("load", () => {
  ScrollTrigger.create({
    trigger: ".info__feu",
    start: "top center",
    end: "bottom center",
    onEnter: () => anim1.play(),
    onLeave: () => anim1.pause(),
    onEnterBack: () => anim1.play(),
    onLeaveBack: () => anim1.pause(),
  });
});


const anim2 = new DotLottie({
  canvas: document.querySelector("#animation__france__eco"),
  src: "https://lottie.host/a502152b-2346-4547-9294-4e218495a0a0/Uifa6k6UCQ.lottie",
  autoplay: false,
  loop: false,
});

anim2.addEventListener("load", () => {
  ScrollTrigger.create({
    trigger: ".info__france",
    start: "top center",
    end: "bottom center",
    onEnter: () => anim2.play(),
    onLeave: () => anim2.pause(),
    onEnterBack: () => anim2.play(),
    onLeaveBack: () => anim2.pause(),
  });
});


const anim3 = new DotLottie({
  canvas: document.querySelector("#animation__touriste_etranger"),
  src: "https://lottie.host/7e5cb5c6-687e-44aa-8c9e-6df0ec4601a9/QoIjRqCuoZ.lottie",
  autoplay: false,
  loop: false,
});

anim3.addEventListener("load", () => {
  ScrollTrigger.create({
    trigger: ".info__touriste_etranger",
    start: "top center",
    end: "bottom center",
    onEnter: () => anim3.play(),
    onLeave: () => anim3.pause(),
    onEnterBack: () => anim3.play(),
    onLeaveBack: () => anim3.pause(),
  });
});


const anim4 = new DotLottie({
  canvas: document.querySelector("#animation__billets"),
  src: "https://lottie.host/2e40453f-e704-4eaa-bac8-d03eb9ac601b/eTfLULwctM.lottie",
  autoplay: false,
  loop: false,
});

anim4.addEventListener("load", () => {
  ScrollTrigger.create({
    trigger: ".info__billet",
    start: "top center",
    end: "bottom center",
    onEnter: () => anim4.play(),
    onLeave: () => anim4.pause(),
    onEnterBack: () => anim4.play(),
    onLeaveBack: () => anim4.pause(),
  });
});




// ANIMATION DU GRAPHIQUE SVG 2
const tlGraphique2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".graph-svg-2",
    start: "top 60%",
    toggleActions: "play none restart reverse",
  }
});

tlGraphique2
  .from("#gold-bars rect", {
    scaleY: 0,
    duration: 0.8,
    ease: "elastic.out(1, 0.5)",
    stagger: 0.1
  })

  .from("#axis-line", {
    scaleY: 0,
    duration: 1.5,
    ease: "power2.inOut"
  }, "-=0.5")

  .from("#chart-numbers", {
    y: -100,
    opacity: 0,
    duration: 1.5,
    ease: "bounce.out"
  }, "-=1.0")
  
  .to("#mask-rect", {
    width: 484, 
    duration: 2,
    ease: "power2.inOut"
  }, "-=1.5"); // Commence un peu avant la fin des chiffres
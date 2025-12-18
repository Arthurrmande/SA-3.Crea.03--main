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
    // markers: true,
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
  src: "https://lottie.host/21317719-9ea7-4bb0-9eca-c18fb4f508d1/5g1pERuheT.lottie",
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
  src: "https://lottie.host/8a45d72e-dff6-4318-a227-ea1a41a4166c/tb6zYgOjaH.lottie",
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
  src: "https://lottie.host/c3c1d41f-7010-40b1-837f-878c924007d4/vpIj0un82f.lottie",
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
  src: "https://lottie.host/6a9628cf-f7d6-4a8b-907f-3407b0d24891/Tivtpo9Wx3.lottie",
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


const anim5 = new DotLottie({
  canvas: document.querySelector("#animation__info__airbus__fig"),
  src: "https://lottie.host/e9e8a79b-fb77-49af-910e-412cc7ce03df/sKU1fIsQ3C.lottie",
  autoplay: false,
  loop: false,
});

anim5.addEventListener("load", () => {
  ScrollTrigger.create({
    trigger: ".info__airbus",
    start: "top center",
    end: "bottom center",
    onEnter: () => anim5.play(),
    onLeave: () => anim5.pause(),
    onEnterBack: () => anim5.play(),
    onLeaveBack: () => anim5.pause(),
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




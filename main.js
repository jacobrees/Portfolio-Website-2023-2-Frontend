import "./style.css";
import Typed from "typed.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

new Typed(".dynamic-description-text", {
  strings: ["Frontend", "Backend", "Full Stack", "Creative"],
  typeSpeed: 100,
  loop: true,
});

gsap.from(".my-expertise-title", {
  scrollTrigger: {
    trigger: ".my-expertise-title",
    start: "top bottom",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
});

gsap.from(".my-expertise-1", {
  scrollTrigger: {
    trigger: ".my-expertise-1",
    start: "top bottom",
  },
  y: 50,
  opacity: 0,
  delay: 0.2,
  duration: 1,
  ease: "power4.out",
})

gsap.from(".my-expertise-2", {
  scrollTrigger: {
    trigger: ".my-expertise-2",
    start: "top bottom",
  },
  y: 50,
  delay: 0.4,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
})

gsap.from(".my-expertise-3", {
  scrollTrigger: {
    trigger: ".my-expertise-3",
    start: "top bottom",
  },
  y: 50,
  delay: 0.6,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
})
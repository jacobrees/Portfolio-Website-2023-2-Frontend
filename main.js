import "./style.scss";
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

gsap.to(".about-me-title", {
  scrollTrigger: {
    trigger: ".about-me-title",
    start: "top bottom",
  },
  x: 150,
  
  duration: 1,
})
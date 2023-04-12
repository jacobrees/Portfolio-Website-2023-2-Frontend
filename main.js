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

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-me-title",
    start: "top bottom",
    scrub: 1,
    markers: true,
  },
});

tl.to(".about-me-title", {
  x: 150,
})

const projects = gsap.utils.toArray(".project-container")

projects.forEach((project) => {
  gsap.from(project, {
    scrollTrigger: {
      trigger: project,
      start: "top bottom",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  })
})
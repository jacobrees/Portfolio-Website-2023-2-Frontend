import "./style.scss";
import Typed from "typed.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    e.preventDefault();
    const id = navLink.textContent.toLowerCase();
    const section = document.getElementById(id);
    const position = section.offsetTop - 80;
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  });
});

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

const aboutMeTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-me-title",
    start: "top bottom",
    scrub: 1,
  },
});

aboutMeTl.to(".about-me-title", {
  x: 150,
});

const projectTitleTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects-title",
    start: "top bottom",
    end: "top center",
    scrub: 1,
  },
});

projectTitleTl.from(".projects-title", {
  opacity: 0,
});

const project1Tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".project-1",
    start: "top bottom",
    end: "top center",
    scrub: 1,
  },
});

project1Tl.from(".project-1", {
  x: 150,
  opacity: 0,
});

const project2Tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".project-2",
    start: "top bottom",
    end: "top center",
    scrub: 1,
  },
});

project2Tl.from(".project-2", {
  x: -150,
  opacity: 0,
});

const project3Tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".project-3",
    start: "top bottom",
    end: "top center",
    scrub: 1,
  },
});

project3Tl.from(".project-3", {
  x: 150,
  opacity: 0,
});

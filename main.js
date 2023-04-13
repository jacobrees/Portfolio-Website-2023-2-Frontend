import "./style.scss";
import Typed from "typed.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagesLoaded from "imagesloaded";

const content = document.querySelector("body");

imagesLoaded(content).on("done", (instance) => {
  gsap.to(".preloader-logo", {
    delay: 0.5,
    scale: 0,
  });
  gsap.to(".blind", {
    delay: 1,
    duration: 1,
    stagger: 0.1,
    y: "-100%",
    ease: "power4.out",
  });
});

const navLinks = document.querySelectorAll(".nav-link");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
const openNavButton = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const closeNavButton = document.querySelector(".close-navigation");

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

mobileNavLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    e.preventDefault();
    const id = navLink.textContent.toLowerCase();
    const section = document.getElementById(id);
    const position = section.offsetTop - 80;
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
    mobileNav.classList.remove("open");
  });
});

openNavButton.addEventListener("click", () => {
  mobileNav.classList.add("open");
});

closeNavButton.addEventListener("click", () => {
  mobileNav.classList.remove("open");
});

gsap.registerPlugin(ScrollTrigger);

new Typed(".dynamic-description-text", {
  strings: ["Frontend", "Backend", "Full Stack", "Creative"],
  typeSpeed: 100,
  loop: true,
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
  y: 150,
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
  y: 150,
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
  y: 150,
  opacity: 0,
});

const ContactTitleTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact-title",
    start: "top bottom",
    scrub: 1,
  },
});
ContactTitleTl.to(".contact-title", {
  x: 150,
});

const contactIconTl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact-link-icon-1",
    start: "top bottom",
    end: "top center",
    scrub: 1,
  },
});

contactIconTl1.from(".contact-link-icon-1", {
  x: -50,
  opacity: 0,
});

const contactIconTl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact-link-icon-2",
    start: "top bottom",
    end: "top center",
    scrub: 1,
  },
});

contactIconTl2.from(".contact-link-icon-2", {
  x: 50,
  opacity: 0,
});

// GSAP animations
gsap.from(".hero h1", { y: -50, opacity: 0, duration: 1 });
gsap.from(".hero p", { y: 50, opacity: 0, duration: 1, delay: 0.5 });
gsap.from(".profile-pic", { scale: 0, duration: 1, ease: "bounce.out" });

gsap.from(".about", { opacity: 0, y: 50, duration: 1, scrollTrigger: ".about" });
gsap.from(".projects", { opacity: 0, y: 50, duration: 1, scrollTrigger: ".projects" });
gsap.from(".contact", { opacity: 0, y: 50, duration: 1, scrollTrigger: ".contact" });
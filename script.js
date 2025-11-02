var tl = gsap.timeline();

tl.from(".navbar .logo, .navbar nav, .navbar a", {
  y: -30,
  duration: 0.7,
  delay: 0.5,
  opacity: 0,
  stagger: 0.15
})

tl.from(".hero-text h1",{
    x: -200,
    opacity: 0,
    duration: 0.5
},"-=0.3")

tl.from(".hero-text p",{
    x: -100,
    opacity: 0,
    duration: 0.4
})

tl.from(".hero-text a",{
    opacity: 0,
    duration: 0.4
})

tl.from(".hero img",{
    opacity: 0,
    duration: 0.5
},"-=0.3")

tl.from(".clients img",{
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6
})

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    scroller: "body",
    start: "top 50%",
    end: "top 0%",
    scrub: 2
  }
});

tl2.from(".services h2", {
    y: 30,
    opacity: 0,
    duration: 0.5
}, "-=0.3");

tl2.from(".services p", {
    y: 20,
    opacity: 0,
    duration: 0.4
}); 

tl2.from(".service-grid .card:nth-child(1), .service-grid .card:nth-child(3)", {
  x: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.3
});

tl2.from(".service-grid .card:nth-child(2), .service-grid .card:nth-child(4)", {
  x: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.3
}, "-=1");


var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".cta",
    scroller: "body",
    start: "top 70%",  
    end: "top 30%",     
    scrub: 2
  }
});

tl3.from(".cta-text h2", {
  x: -200,
  opacity: 0,
  duration: 0.5
})

.from(".cta-text p", {
  x: -100,
  opacity: 0,
  duration: 0.4
},"-=0.3")

.from(".cta-text a", {
  y: 30,
  opacity: 0,
  duration: 0.8
})

.from(".cta img", {
  x: 100,
  opacity: 0,
  duration: 0.8
},"-=0.3");

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".case-study",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: 2
  }
});

tl4.from(".case-study h2", {
    y: 30,
    opacity: 0,
    duration: 0.5
}, "-=0.3")

.from(".case-study p", {
    y: 20,
    opacity: 0,
    duration: 0.6
})

.from(".case-grid .card", {
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.15, 
  ease: "power3.out"
});

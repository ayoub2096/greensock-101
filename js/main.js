// gsap.to('ul li', {
//     duration: .7 ,
//     x: 40,
//     ease: "power2.out",
//     stagger:.3,
//     repeat:-1,
//     repeatDelay:1,
//     yoyo: true,
//     yoyoEase: 'none',
//     backgroundColor: "#c7150d",
//     delay :2,
// });
// gsap.fromTo('header',
//     {x:-40},
//     {x:40, repeat:2, duration:1, ease: "power2.inOut", yoyo: true},
// );

/* gsap.fromTo('body', 
    {backgroundColor : '#ffffff' },
    {backgroundColor: "#76c897", duration:3}
);
gsap.fromTo('h1, p', 
    {
    opacity : 0,
    y:-20,
    },
    {
    opacity:1, 
    y:0,
    duration:1.5, 
    delay:1,
    stagger:.5,
    }
);
gsap.fromTo(' img, h2 ', 
    {
    opacity : 0,
    y:-20,
    },
    {
    opacity:1, 
    y:0,
    duration:1.5, 
    delay:2,
    
    }
);
gsap.fromTo(' ul li ', 
    {
    opacity : 0,
    y:-20,
    },
    {
    opacity:1, 
    y:0,
    duration:1 , 
    delay:3,
    stagger:.5,   
    ease:"power2.inOut",
    }
); */

const timeline = gsap.timeline({
    duration:1,
});

timeline
  .from("body", {
    backgroundColor: "#fff",
    ease: "none",
  })
  .fromTo(
    ["h1, .intro"],
    {
      opacity: 0,
      y: -20,
    },
    {
      opacity: 1,
      y: 0,
      ease: "power1.out",
      stagger: 0.2,
    }
  )
  .from(
    " img, h2 ",
    {
      opacity: 0,
      ease:'none'
    }
  )
  .fromTo(
    " ul li ",
    {
      opacity: 0,
      y: -20,
    },
    {
      opacity: 1,
      y: 0,
      stagger: 0.5,
      ease: "power2.inOut",
    }
  );

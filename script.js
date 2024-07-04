// scroll trigger

// gsap.from("#page-1 #box",{
//     scale:0,
//     delay:1,
//     duration:1,
//     rotate:360
// })  
// gsap.from("#page-2 #box",{
//     scale:0,
//     delay:1,
//     duration:1,
//     rotate:360,
//     scrollTrigger:{
//         trigger:"#page-2 #box",
//         scroll:"body",
//         markers:true,
//         scrub:true,
//     }
// })  
// gsap.from("#page-3 #box",{
//     scale:0,
//     duration:1,
//     rotate:360,
//     scrollTrigger:{
//         trigger:"#page-3 #box",
//         scroll:"body",
//         markers:true,
//         scrub:2
//     }
// }) 

var tl =gsap.timeline()
tl.from("#nav",{
    opacity:0,
    delay:0.3,
    
})
tl.from("#nav h1,#nav h4,#nav h3",
{
    y:-80,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3
})

tl.from("#left h1, span",{
    x:-500,
    opacity:0,
    duration:0.5,
    stagger:0.4 
})

tl.from("#right img",{
    opacity:0,
    scale:2,
    duration:1
})

gsap.from("#page2 .box",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        start:"top 70%"
    }
})



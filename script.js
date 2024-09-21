let crcr=document.querySelector("#cursor")
let blur=document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crcr.style.left = dets.x+"px"
    crcr.style.top = dets.y+"px"
     blur.style.left = dets.x -250+"px"
    blur.style.top = dets.y -205 +"px"
})





gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:" top -11%",
        scrub:1

    }

})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroll:"body",
        // markers:true,
        start:"top -30%",
        end:"top -100%",
        scrub:2
    }
}) 

gsap.from("#about-us img,#about-text",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
            trigger:"#about-us",
            scroller:"body",
            // markers:true,
            start:"top 70%",
            end:"top 65%",
            scrub:1
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
            trigger:".card",
            scroller:"body",
            // markers:true,
            start:"top 70%",
            end:"top 65%",
            scrub:1
    }
})


gsap.from("#colon1",{
    x:-70,
    y:-70,
    scrollTrigger:{
            trigger:"#colon1",
            scroller:"body",
            // markers:true,
            start:"top 55%",
            end:"top 45%",
            scrub:4
    }
})

gsap.from("#colon2",{
    x:70,
    y:70,
    scrollTrigger:{
            trigger:"#colon2",
            scroller:"body",
            // markers:true,
            start:"top 75%",
            end:"top 65%",
            scrub:4
    }
})


gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 70%",
        scrub:4
}

})
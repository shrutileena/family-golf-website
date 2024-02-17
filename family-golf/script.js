gsap.to("#nav", {
    backgroundColor : "#95C11E",
    height : "100px",
    duration : 1,
    // delay : 1
    scrollTrigger : {
        trigger : "#nav",
        scroller : "body",
        // markers : true,
        start : "top -10%",
        end : "top -11%",
        scrub : 1
    }
})
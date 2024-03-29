var cursor = document.querySelector("#cursor")
var cursorBlur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function (dets) {
        cursor.style.left = dets.x + "px"
        cursor.style.top = dets.y + "px"
        cursorBlur.style.left = dets.x - "150" + "px"
        cursorBlur.style.top = dets.y - "150" + "px"
    }
)

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

gsap.to("#main", {
    backgroundColor : "#000",
    scrollTrigger : {
        trigger : "#main",
        scroller : "body",
        // markers : true,
        start : "top -25%",
        end : "top -70%",
        scrub : 2
    }
})
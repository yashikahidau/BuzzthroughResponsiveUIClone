function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#container"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#container", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#container").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
loco()



//Bottom to top button functionality
const topbtn = document.getElementById("clickme")

topbtn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
})

window.addEventListener("scroll", () => {
  topbtn.style.opacity = 1;

})
function button() {
  topbtn.style.opacity = 0;
}

window.addEventListener("scrollend", function () {
  this.setTimeout(button, 2000)
})

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > window.height) {
    topbtn.style.opacity = 1;
  }
}


//menu bar
function MenuAnimation(x) {
  x.classList.toggle("change");
}


//timelines
var tl = gsap.timeline();
tl.from("#page1-inner", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: .5
});



var tl2 = gsap.timeline();
tl2.from("#page2>video", {
  opacity: 0,
  delay: .5,
  duration: 3
});
tl2.from("#page2>h1", {
  y: 50,
  duration: 1,
  opacity: 0,
});


var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page3`,
    scrub: .5,
    start: `-30% top`,
    end: `20% top`,
    scroller: `#container`,
  }
})
tl3
  .add('start')
  .from("#page3>#page3-left>#img2-div2", { y: 40, opacity: 0, duration: 5, toggleActions: "play none none none" }, 'start')
  .from("#page3>#page3-right>h1", { y: 40, opacity: 0, duration: 5 }, 'start')
  .from("#page3>#page3-right>h4", { y: 40, opacity: 0, duration: 5 }, 'start')

  .add('next')
  .from("#page3>#page3-right>p", { y: 40, opacity: 0, duration: 5 }, 'next')
  .from("#page3>#page3-left>#img3-div3", { y: 40, opacity: 0, duration: 5, delay: -3 })


var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page4`,
    scrub: .5,
    scroller: `#container`,
    start: `-60% top`,
    end: `20% top`
  }
})
tl4.from("#page4>h1", {
  y: 40,
  opacity: 0,
  duration: 3
})
tl4.from("#page4>hr", {
  opacity: 0,
  width: `0%`
});

var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page5`,
    scrub: .5,
    scroller: `#container`,
    start: `-80% top`,
    end: `5% top`
  }
})
tl5.from("#page5>h1", {
  y: 40,
  opacity: 0,
  duration: 3
})
tl5
  .from("#page5-middle>.inner>i", {
    y: 40,
    opacity: 0,
    duration: 5
  })

  .from("#no1, #no2 ,#no3", {
    y: 40,
    opacity: 0,
    duration: 5
  })

  .from("#p1, #p2, #p3", {
    y: 40,
    opacity: 0,
    duration: 5,
    stagger: 0.1,
    delay: 0.1,
  })

  .from("#page5-bottom>span", {
    y: 20,
    opacity: 0,
    duration: 5,
    stagger: 0.1,
    delay: 0.1,
  })


var tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page6`,
    scrub: .5,
    start: `-80% top`,
    end: `-10% top`,
    scroller: `#container`,
  }
})
tl6.from("#page6", {
  opacity: 0,
  duration: 3
})

tl6.from("#page6-topright, #page6-topleft", {
  y: 40,
  opacity: 0,
  duration: 5,
  stagger: 0.1,
  delay: 0.1,
})
tl6.from("#page6-bottom>h1, #page6-bottom-middle", {
  y: 40,
  opacity: 0,
  duration: 5,
  stagger: 0.1,
  delay: 0.1,
})
tl6.from('#page6-bottom>hr', {
  width: `0`,
  opacity: 0,
  duration: 10,
})
tl6.from("#page6-bottom>span", {
  y: 40,
  opacity: 0,
  duration: 5,
})

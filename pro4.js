function canva1(){
    const canvas = document.querySelector("#page1 canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// console.log(window.innerWidth)
window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
})

function files(index) {
    var data =`/images/0000.png
    /images/0001.png
    /images/0002.png
    /images/0003.png
    /images/0004.png
    /images/0005.png
    /images/0006.png
    /images/0007.png
    /images/0008.png
    /images/0009.png
    /images/0010.png
    /images/0011.png
    /images/0012.png
    /images/0013.png
    /images/0014.png
    /images/0015.png
    /images/0016.png
    /images/0017.png
    /images/0018.png
    /images/0019.png
    /images/0020.png
    /images/0021.png
    /images/0022.png
    /images/0023.png
    /images/0024.png
    /images/0025.png
    /images/0026.png
    /images/0027.png
    /images/0028.png
    /images/0029.png
    /images/0030.png
    /images/0031.png
    /images/0032.png
    /images/0033.png
    /images/0034.png
    /images/0035.png
    /images/0036.png
    /images/0037.png
    /images/0038.png
    /images/0039.png
    /images/0040.png
    /images/0041.png
    /images/0042.png
    /images/0043.png
    /images/0044.png
    /images/0045.png
    /images/0046.png
    /images/0047.png
    /images/0048.png
    /images/0049.png
    /images/0050.png
    /images/0051.png
    /images/0052.png
    /images/0053.png
    /images/0054.png
    /images/0055.png
    /images/0056.png
    /images/0057.png
    /images/0058.png
    /images/0059.png
    /images/0060.png
    /images/0061.png
    /images/0062.png
    /images/0063.png
    /images/0064.png
   `;
    return data.split("\n")[index];
}

const frameCount = 65;

const images = [];
const imageSeq = {
    frame: 0
};

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
}
var cl = gsap.timeline({
    scrollTrigger: {
        scrub:4,
        trigger:"#page1",
        // scroller:"#main",
        start:"top top"
    }
})
cl
.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    duration:18,
    onUpdate: render
})
.to("#canvas",{
    opacity:0,
    duration:1.5,
    // delay:1/4
})

.to("#video",{
   opacity:1,
   duration:1.5, 
})
.to("#video h1",{
    opacity:1,
    duration:1.5,

})
.from("#video video",{
    opacity:0,
    duration:1.5,

})
.to("#video h1",{
    opacity:0,
    duration:1.5,

})
.to("#video h3",{
    top:"50%",
    duration:10
})
.to("#video h3",{
    top:"-150%",
    duration:10
})
// gsap.to(imageSeq, {
//     frame: frameCount - 1,
//     snap: "frame",
//     ease: "none",
//         scrollTrigger: {
//         scrub:4,
//         trigger:"#page1",
//         // scroller:"#main",
//         start:"top top"
//     },
//     onUpdate: render
// })
images[0].onload = render;

function render() {
    scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
    // var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
   
}
ScrollTrigger.create({
    trigger:"#page1",
    // scroller:"#main",
   start:"top top",
    pin:true,
    
})

}
canva1()

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 canvas",
        start:"top top",
        scrub:3,
        // ,
        end:"100% 0%",
        pin:true,
        snap:true
    }
})
tl
.to("#text h1",{
    scale:1.1,
    ease:Expo.ease
})
.to("#text h3",{
    opacity:0
},"-=.5")
.to("#text h1",{
    opacity:0,
    duration:1.5,
    ease:Expo.ease
})

// function pg2(){
// var tl = gsap.timeline({
//     scrollTrigger:{
//         trigger:"#page2",
//         pin:true,
//         start:"top top",
//         scrub:3
//     }
// })
// tl
// .from("#o1",{
//     opacity:0,
//     scale:1.2,
//     ease:Expo.ease,
//     duration:1
// })
// .from("#o2",{
//     opacity:0,
//     scale:1.2,
//     ease:Expo.ease,
//     duration:1
// }).from("#o3, #page2 video",{
//     opacity:0,
//     scale:1.2,
//     ease:Expo.ease,
//     duration:1
// })
// // .from("",{
// //     opacity:0,
// //     scale:1.1,
// //     ease:Expo.ease,
// //     duration:1
// // },"-=1")
// }
// pg2()

function pg2(){
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        start:"top top",
        pin:true,
        // ,
        scrub:3    }
})
tl
.from("#o1",{
    opacity:0,
    scale:1.1
})
.from("#o2",{
    opacity:0,
    scale:1.1
})
.from("#o3,#page2 video",{
    opacity:0,
    scale:1.1
})
}
pg2()




var il = gsap.timeline()

il.from("#box1",{
    top:"29rem",
    opacity:0,
    scrollTrigger:{
        trigger:"#page2",
        // ,
        start:"top top",
        end:"top 5%",
        scrub:3
    }
})

il.to("#box1",{
    top:"-10rem",
    opacity:0,
    scrollTrigger:{
        trigger:"#box1",
        start:"-88% top",
        end:"-93% top",
        scrub:3,
        // 
    }

})

il.from("#box3",{
    top:"29rem",
    opacity:0,
    scrollTrigger:{
        trigger:"#box3",
        // ,
        start:"-80% 0%",
        end:"-85% 0%",
        scrub:3
    }
})

il.to("#box3",{
    top:"-10rem",
    opacity:0,
    scrollTrigger:{
        trigger:"#box3",
        start:"-20% top",
        end:"-15% top",
        scrub:3,
        // 
    }

})

il.from("#box2",{
    top:"29rem",
    opacity:0,
    scrollTrigger:{
        trigger:"#box2",
        // ,
        start:"-5% 0%",
        end:"-10% 0%",
        scrub:3
    }
})

il.from("#bigbox",{
    y:1000,
    opacity:0,
    
    scrollTrigger:{
        trigger:"#box3",
        start:"160% 18%",
        scrub:3,
        // ,
        end:"10% top"
    }
})


gsap.to("#line",{
    height:"370px",
    scrollTrigger:{
        trigger:"#page3",
        scrub:3,
        // ,
        start:"-20% 40%",
        end:"30% 40%"

    }
})

gsap.to("#circle",{
    top:"466px",
    scrollTrigger:{
        trigger:"#page3",
        scrub:3,
        // ,
        start:"-20% 40%",
        end:"30% 40%"

    }
})


gsap.from("#right img",{
    y:150,
    opacity:0,
    scrollTrigger:{
        trigger:"#page3",
        scrub:3,
        // ,
        start:"-20% 40%",
        end:"30% 40%"

    }
})

gsap.from("#L",{
    opacity:0,
    x:100,
    scrollTrigger:{
        trigger:"#page4",
        // ,
        scrub:3,
        start:"-12% 40%",
        end:"3% 40%"
    }
})

gsap.from("#M",{
    opacity:0,
    x:100,
    scrollTrigger:{
        trigger:"#page4",
        // ,
        scrub:3,
        start:"-10% 40%",
        end:"0% 40%"
    }
})

gsap.from("#S",{
    opacity:0,
    x:100,
    scrollTrigger:{
        trigger:"#page4",
        // ,
        scrub:3,
        start:"-8% 40%",
        end:"-2% 40%"
    }
})

gsap.from("#XS",{
    opacity:0,
    x:100,
    scrollTrigger:{
        trigger:"#page4",
        // ,
        scrub:3,
        start:"-6% 40%",
        end:"-5% 40%"
    }
})

gsap.from("#size",{
    opacity:0,
    x:50,
    scrollTrigger:{
        trigger:"#page4",
        // ,
        scrub:3,
        start:"6% 40%",
        end:"5% 40%"
    }
})




function scroll(){
    let videoElem = document.querySelector("#video5");
    let src = videoElem.currentSrc || videoElem.src;
    
    function once(a, b, c, d) {
      var e = function () {
        a.removeEventListener(b, e), c.apply(this, arguments);
      };
      return a.addEventListener(b, e, d), e;
    }
    once(document.documentElement, "touchstart", function () {
      videoElem.play(), videoElem.pause();
    }),
      ScrollTrigger.create({
        trigger: videoElem,
        start: "top 70%",
        end: "bottom",
       
        onEnter: () => videoElem.play(),
        onEnterBack: () => videoElem.play(),
        onLeave: () => videoElem.pause(),
        onLeaveBack: () => videoElem.pause()
      });
    //videoElem.play();
    let video_timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".second",
        start: "top top",
        // markers: !0,
        scrub: !0,
        pin: !0,
        toggleClass: "acceso"
      }
    });
    video_timeline
      .fromTo(
        ".macbook-display",
        {
          backgroundColor: "transparent",
          outline: "none"
        },
        {
          backgroundColor: "#373435",
          duration: 5,
          outline: ".5px solid #fff",
          delay:10
        }
      )
      .fromTo(
        ".css-macbook",
        {
          scale: 3.5
        },
        {
          scale: 0.7,
          duration: 10,
          delay: 5
        }
      )
      .fromTo(
        ".macbook-bottom-cover,.macbook-body",
        {
          autoAlpha: 0
        },
        {
          autoAlpha: 1,
          duration: 10
        }
      )
      .fromTo(
        "#video5",
        {
          height: "100%",
          objectFit: "cover"
        },
        {
          height: "-webkit-fill-available",
          duration: 5
        }
      )
      .fromTo(
        ".macbook-screen",
        {
          backgroundColor: "transparent"
        },
        {
          backgroundColor: "#4b4b4d",
          duration: 2,
          delay: 10
        }
      );
    let video_tl = gsap.timeline({
      defaults: {
        duration: 1
      },
      scrollTrigger: {
        trigger: videoElem,
        start: "center center",
        end: "+=600",
        scrub: !0
      }
    });
    once(videoElem, "loadedmetadata", () => {
      video_tl.fromTo(
        videoElem,
        {
          currentTime: 0.01
        },
        {
          currentTime: videoElem.duration || 1
        }
      );
    }),
      setTimeout(function () {
        window.fetch &&
          fetch(src)
            .then((a) => a.blob())
            .then((a) => {
              let b = URL.createObjectURL(a),
                c = videoElem.currentTime;
              once(document.documentElement, "touchstart", function () {
                videoElem.play(), videoElem.pause();
              }),
                videoElem.setAttribute("src", b),
                (videoElem.currentTime = c + 0.01);
            });
      }, 1e3);
}

scroll()







var nig = gsap.timeline({
    scrollTrigger:{
        pin:true,
        trigger:"#page5"
    }
})


nig.from("#nigga1",{
    top:"29rem",
    opacity:0,
    scrollTrigger:{
        trigger:"#page5",
        
        // markers:true,
        start:"top top",
        end:"top 5%",
        scrub:3
    }
})

.to("#nigga1",{
    top:"-10rem",
    opacity:0,
    scrollTrigger:{
        trigger:"#nigga1",
        start:"-88% top",
        end:"-93% top",
        scrub:3,
        // 
    }

})

il.from("#nigga3",{
    top:"29rem",
    opacity:0,
    scrollTrigger:{
        trigger:"#nigga3",
        // ,
        start:"-80% 0%",
        end:"-85% 0%",
        scrub:3
    }
})

il.to("#nigga3",{
    top:"-10rem",
    opacity:0,
    scrollTrigger:{
        trigger:"#nigga3",
        start:"-20% top",
        end:"-15% top",
        scrub:3,
        // 
    }

})

il.from("#nigga2",{
    top:"29rem",
    opacity:0,
    scrollTrigger:{
        trigger:"#nigga2",
        // ,
        start:"-5% 0%",
        end:"-10% 0%",
        scrub:3
    }
})


var out = gsap.timeline({
    scrollTrigger:{
        trigger:"#page6",
        pin:true,
        start:"top top",
        // ,
        scrub:3,
        end:"70% top"
    }
})

out.from("#per1",{
    top:"29rem",
    opacity:0,
    scrollTrigger:{
        trigger:"#page6",
        // ,
        start:"top top",
        end:"top 5%",
        scrub:3
    }
})

.to("#per1",{
    top:"-10rem",
    opacity:0,
    scrollTrigger:{
        trigger:"#per1",
        start:"-88% top",
        end:"-93% top",
        scrub:3,
        // 
    }

})

.from("#per2",{
    top:"29rem",
    opacity:0,
    scrollTrigger:{
        trigger:"#per2",
        // ,
        start:"-80% 0%",
        end:"-85% 0%",
        scrub:3
    }
})



gsap.from("#iphone",{
    opacity:0,
    scrollTrigger:{
        trigger:"#page6",
        
        start:"top top",
        end:"5% top",
        // ,
        scrub:3
    }
})

gsap.from("#pods",{
    scale:1.3,
    scrollTrigger:{
        trigger:"#per1",
        
        start:"-90% 0%",
        end:"-95% 0%",
        // ,
        scrub:3
    }
})

gsap.from("#cover",{
    opacity:0,
    scrollTrigger:{
        trigger:"#page6",
        scrub:3,
        start:"top top",
        end:"5% top",
        // 
    }
})



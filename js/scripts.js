var x=new WarpSpeed("canvas",
{
    "speed":10,
"speedAdjFactor":5,
"density":1.5,
"shape":"square",
// "shape":"circle",
"warpEffect":true,
"warpEffectLength":15,
"depthFade":true,
"starSize":5,
// "backgroundColor":"rgba(0, 0, 0, 0)",
"starColor":"#FFFFFF"
});

gsap.defaults({
    ease: "none",
    duration: 0.2
  });

const video = document.getElementById("video");
const spaceBarTextWrap = document.getElementById("spacebar");
let main_tl = gsap.timeline();
let animation_triggered = false


function startAnimation(){
    if(animation_triggered===true) return
    animation_triggered = true
    console.log("Animation starts");
    spaceBarTextWrap.setAttribute("is-active", "true");
    gsap.timeline().to(spaceBarTextWrap,{
      backgroundColor: "white",
      color: "black",
      scale: 1.08
    })
    .to(".turn-on-sound",{
      opacity:0,
      y:5
    },"<")
    .to(".overlay-img",{
        opacity: 0,
        scale:1.3,
        duration: 0.5
    },"<")
    .to(".running-number-column.col-1",{
        y: "-182rem",
        duration: 1.75,
        ease: "power2.inOut",
        // delay:0.3
    })
    .to(".running-number-column.col-2",{
        y: "-168rem",
        duration: 1.75,
        ease: "power2.inOut",
        delay: 0.5,
    },"<")
    .to(".running-number-column.col-3",{
        y: "-168rem",
        duration: 1.75,
        ease: "power2.inOut",
        delay: 0.5,
    },"<")
    //video
    video.play();
}
function endAnimation(){
    if(animation_triggered===false) return
    animation_triggered = false
    console.log("Animation ends");
    spaceBarTextWrap.setAttribute("is-active", "false");
    gsap.timeline().to(spaceBarTextWrap,{
      backgroundColor: "transparent",
      color:"white",
      scale: 1
    })
    .to(".turn-on-sound",{
      opacity:1,
      y:0
    },"<")
    .to(".overlay-img",{
        opacity: 1,
        scale: 1
    },"<")
    .to(".running-number-column",{
        y: "0rem",
        duration: 1.2,
        ease: "power2.inOut"
    })
    //video
    video.pause();
    video.currentTime = 0;
}

  // Function to handle the keydown event
  function handleKeyDown(event) {
    if (event.keyCode === 32) {
      // Check if the key code is 32, which corresponds to the Spacebar
        startAnimation()
      
      // Your code to handle the Spacebar press can go here
    }
  }

  // Function to handle the keyup event
  function handleKeyUp(event) {
    if (event.keyCode === 32) {
      // Check if the key code is 32, which corresponds to the Spacebar
        endAnimation()
      // Your code to handle the Spacebar release can go here
    }
  }

  // Add event listeners to the document to listen for keydown and keyup events
  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keyup", handleKeyUp);
  spaceBarTextWrap.addEventListener("mousedown", startAnimation);
  spaceBarTextWrap.addEventListener("mouseup", endAnimation);
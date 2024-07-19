

var tl =gsap.timeline();
var sound=document.querySelector("#engine");




function playSound(){
    sound.play();
}
function pauseSound(){
    sound.pause();
}
function time(){
    var a=0;
    setInterval(function(){
        a=a+Math.floor(Math.random()*15);
        if(a<100){
            document.querySelector("#loader h1").innerHTML=a+"%";
        }
        else{
            a=100;
            document.querySelector("#loader h1").innerHTML=a+"%";

        }

        
    }, 150);

}

function runEngine(){
    var playtext=document.querySelector("#playicon h5")
    var playIcon=document.querySelector("#playicon i");
    playIcon.addEventListener("click",function(){
        
        if(playIcon.classList.contains("ri-play-fill")){
            playIcon.classList.remove("ri-play-fill")
            playIcon.classList.add("ri-pause-fill")
            playtext.textContent="Pause";
            playSound();
            jitterAnimation=gsap.from("#box1 img",{
                repeat: -1, 
                yoyo: true, 
                opacity:0.8,
                duration: 0.02,
                x: () => Math.random() * 2- 1, 
                y: () => Math.random() * 2 - 1, 
                    rotation: () => Math.random() * 4 - 2, 
                
                ease: 'power1.inOut', 
                  });
                  jitterAnimation2=gsap.from("#box1 i",{
                    repeat: -1, 
                    yoyo: true, 
                    opacity:0.8,
                    duration: 0.02,
                    x: () => Math.random() * 10 - 5, 
                    y: () => Math.random() * 10 - 5, 
                    rotation: () => Math.random() * 20 - 16, 
                    ease: 'power1.inOut', 
                      });
                      
        }
        
        else{
            playIcon.classList.remove("ri-pause-fill")
            playIcon.classList.add("ri-play-fill")
            pauseSound();
            playtext.textContent="Play";
            jitterAnimation.kill();
            jitterAnimation2.kill();
        }
        
        }
)}


runEngine();


tl.from("#loader img ,#loader h1",{
    opacity:0,
    delay:0.5,
    duration:1,
    onStart:time(),
    

})
tl.from("#loader img",{
    rotate:360,
    delay:0.5,
    duration:1
    
})

tl.to("#loader",{
    top:"-100vh",
    delay:0.5,
    duration:1,
    
})
   
tl.from("#nav",{
    opacity:0,
    duration:0.4,
    
    
})


tl.from("#logo,#nav-part2 h1,#nav-part3 button",{
    scale:0,
    opacity:0,
    duration:0.4,
    delay:0.5,
    // stagger:0.5 
})
tl.from("#thread h1",{
    opacity:0,
    duration:1
})


tl.to("#thread h1",{
    transform:"translateX(-70%)",
    color:"red",
    scrollTrigger:{
        trigger:"#thread",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:4,
        pin:true

    }  
})

tl.from("#box1 img",{
    x:"-100vh",
    // duration:3,
    scrollTrigger:{
        trigger:"#box1 img",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 100%",
        scrub: 4,
    }
    
})

tl.from("#playicon",{
    opacity:0,
    duration:2,
    delay:1
})

tl.from("#heading h3",{
    opacity:0,
    delay:3,
    scrollTrigger:{
        trigger:"#heading h3",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 100%",
        scrub:3
        
    }
})

tl.from("#box1-bottom p",{
    opacity:0,
    delay:2,
    scrollTrigger:{
        trigger:"#box1-bottom p",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 100%",
        scrub:3
        
    }
})



tl.to("#page2-thread h1",{
    transform:"translateX(-550%)",
    fontWeight:200,
    color:"#8A8D91",
    scrollTrigger:{
        trigger:"#page2-thread",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -120%",
        scrub:4,
        pin:true

    }  
})
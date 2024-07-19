// Function to initialize your animations and Locomotive Scroll
function init() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
  
    // Update ScrollTrigger on Locomotive Scroll updates
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // Create a proxy for Locomotive Scroll to work with ScrollTrigger
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
  
    // Refresh ScrollTrigger when the window updates
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // Refresh ScrollTrigger and update Locomotive Scroll after setup
    ScrollTrigger.refresh();
  }
  
  // Initialize the animation
  init();
  
  // Your animation timeline
  var tl = gsap.timeline();
  var sound = document.querySelector("#engine");
  var jitterAnimation, jitterAnimation2; // Declare these variables here
  
  // Function to play the sound
  function playSound() {
    sound.play();
  }
  
  // Function to pause the sound
  function pauseSound() {
    sound.pause();
  }
  
  // Function to update the loading progress
  function time() {
    var a = 0;
    var loaderH1 = document.querySelector("#loader h1");
  
    function updateProgress() {
      a += Math.floor(Math.random() * 15);
      if (a <= 100) {
        loaderH1.innerHTML = a + "%";
      } else {
        a = 100;
        loaderH1.innerHTML = a + "%";
      }
    }
  
    // Initial call
    updateProgress();
  
    // Set up an interval to continually update the progress
    var progressInterval = setInterval(updateProgress, 150);
    return progressInterval; // Return the interval so it can be cleared later
  }
  
  // Function to run the engine animation
  function runEngine() {
    var playtext = document.querySelector("#playicon h5");
    var playIcon = document.querySelector("#playicon i");
  
    playIcon.addEventListener("click", function () {
      if (playIcon.classList.contains("ri-play-fill")) {
        playIcon.classList.remove("ri-play-fill");
        playIcon.classList.add("ri-pause-fill");
        playtext.textContent = "Pause";
        playSound();
  
        // Add your jitterAnimation and jitterAnimation2 here
        jitterAnimation = gsap.from("#box1 img", {
          repeat: -1,
          yoyo: true,
          opacity: 0.8,
          duration: 0.02,
          x: () => Math.random() * 2 - 1,
          y: () => Math.random() * 2 - 1,
          rotation: () => Math.random() * 4 - 2,
          ease: 'power1.inOut'
        });
  
        jitterAnimation2 = gsap.from("#box1 i", {
          repeat: -1,
          yoyo: true,
          opacity: 0.8,
          duration: 0.02,
          x: () => Math.random() * 10 - 5,
          y: () => Math.random() * 10 - 5,
          rotation: () => Math.random() * 20 - 16,
          ease: 'power1.inOut'
        });
      } else {
        playIcon.classList.remove("ri-pause-fill");
        playIcon.classList.add("ri-play-fill");
        pauseSound();
        playtext.textContent = "Play";
  
        // Kill the jitterAnimations
        jitterAnimation.kill();
        jitterAnimation2.kill();
      }
    });
  }
  
  // Call the runEngine function
  runEngine();
  
  // Animation timeline
  tl.from("#loader img ,#loader h1", {
    opacity: 0,
    delay: 0.5,
    duration: 1,
    onStart: function () {
      var progressInterval = time();
      // Clear the progress interval when the loader animation is done
      tl.to("#loader", {
        top: "-100vh",
        delay: 0.5,
        duration: 1,
        onComplete: function () {
          clearInterval(progressInterval);
        }
      });
    }
  });
  
  tl.from("#nav", {
    opacity: 0,
    duration: 0.4
  });
  
  tl.from("#logo,#nav-part2 h1,#nav-part3 button", {
    scale: 0,
    opacity: 0,
    duration: 0.4,
    delay: 0.5
  });
  
  tl.from("#thread h1", {
    opacity: 0,
    duration: 1
  });
  
  tl.to("#thread h1", {
    transform: "translateX(-50%)", // Adjusted the transform value
    color: "red",
    scrollTrigger: {
      trigger: "#thread", // Updated trigger
      scroller: "body",
      start: "top 0",
      end: "top 200%", // Adjusted the end value
      scrub: 4,
      pin: true
    }
  });
  
  tl.from("#box1 img", {
    x: "-100vw", // Adjusted the animation
    scrollTrigger: {
      trigger: "#box1 img",
      scroller: "body",
      start: "top 80%",
      end: "top 100%",
      scrub: 4
    }
  });
  
  tl.from("#playicon", {
    opacity: 0,
    duration: 2,
    delay: 1
  });
  
  tl.from("#heading h3", {
    opacity: 0,
    delay: 3,
    scrollTrigger: {
      trigger: "#heading h3",
      scroller: "body",
      start: "top 80%",
      end: "top 100%",
      scrub: 3
    }
  });
  
  tl.from("#box1-bottom p", {
    opacity: 0,
    delay: 2,
    scrollTrigger: {
      trigger: "#box1-bottom p",
      scroller: "body",
      start: "top 80%",
      end: "top 100%",
      scrub: 3
    }
  });
  
  // Animation for page 2 thread
  tl.to("#page2-thread h1", {
    transform: "translateX(-200%)",
    fontWeight: 200,
    color: "#8A8D91",
    scrollTrigger: {
      trigger: "#page2-thread",
      scroller: "body",
      start: "top 0",
      end: "top 200%", // Adjusted the end value
      scrub: 4,
      pin: true
    }
  });
  
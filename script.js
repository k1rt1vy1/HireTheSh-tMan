// Array of video sources
const videos = [
    'annoy1.mp4',
    'annoy2.mp4'
];

// Function to select a random video
const videoPlayer = document.getElementById('videoPlayer');
function setRandomVideo() {
    const randomIndex = Math.floor(Math.random() * videos.length);
    // const videoSource = document.getElementById('videoSource');
    videoPlayer.src = videos[randomIndex];
    videoPlayer.load();  // Load the new video source
}

// Call the function to set a random video when the page loads
window.onload = setRandomVideo;


// var crsr = document.querySelector(".cursor");

// document.addEventListener("mousemove", function (dets) {
//     crsr.style.left = dets.x -15 + "px"
//     crsr.style.top = dets.y -10 + "px"
// });


gsap.from("#nav", {
    // backgroundColor: "#000",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    height: "110px",
    scrollTrigger:{
        trigger: "#nav", 
        scroller: "body",
        start: "top 0%",
        end: "top -5%",
        // markers: true, 
        scrub: 2
    }
})

// Scrolling behavior
gsap.from("#main", {
    // backgroundColor: "#000",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    scrollTrigger:{
        trigger: "#main", 
        scroller: "body",
        start: "top 0%",
        end: "top -110%",
        // markers: true, 
        scrub: 2
    }
})
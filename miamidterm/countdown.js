document.addEventListener('DOMContentLoaded', (event) => {
    const textArray = ['Please','scroll', 'down', 'to', 'access', 'link', 'to', 'buy', 'my', 'art!'];
    let i = 0;

    function animateText() {
        if(i < textArray.length) {
            document.getElementById('animated-text').innerHTML += textArray[i] + ' ';
            i++;
        }
    }
    setInterval(animateText, 500); 
});

var follower = document.getElementById('mouse');
var tween = gsap.to(follower, {
  x: 0,
  y: 0,
  duration: 0.5,
  ease: "power2",
  paused: true
});

document.body.addEventListener('mousemove', function(e) {
  tween.vars.x = e.clientX;
  tween.vars.y = e.clientY;
  tween.invalidate();
  tween.restart();
});
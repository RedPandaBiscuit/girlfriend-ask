function yesResponse() {
    const responseMessage = document.getElementById('response-message');
    responseMessage.innerHTML = '<span>Yay!</span> You made me the happiest person! ❤️';
    responseMessage.style.display = 'block';
    confettiAnimation();
  }
  
  function maybeResponse() {
    const responseMessage = document.getElementById('response-message');
    responseMessage.innerHTML = '<span>Aww...</span> I’ll keep trying to win your heart! 😊';
    responseMessage.style.display = 'block';
  }
  
  function confettiAnimation() {
    const confettiScript = document.createElement('script');
    confettiScript.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js';
    document.body.appendChild(confettiScript);
  
    confettiScript.onload = function() {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    };
  }
  
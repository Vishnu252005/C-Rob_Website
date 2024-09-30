// Ensure that this code runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    var options = {
        strings: ["Are You an Innovator?", "Join Our Team!", "Let's Make a Difference!"], // Add your desired text here
        typeSpeed: 100,    // Speed of typing
        backSpeed: 50,     // Speed of backspacing
        loop: true          // Loop the animation
    };

    var typed = new Typed(".typing-text", options);
});

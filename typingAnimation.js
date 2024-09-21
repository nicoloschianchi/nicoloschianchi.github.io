document.addEventListener('DOMContentLoaded', (event) => {
  const text = "Hi! I'm Nicolo";
  const typingText = document.getElementById('typing-text');
  let i = -1;

  function typeWriter() {
    if (i==-1) {
      setTimeout(typeWriter, 250);
      i++
    } else if (i == text.indexOf("!")+1) {
      setTimeout(typeWriter, 1000); // Adjust the typing speed here
      typingText.textContent += text.charAt(i);
      i++;
    } else if (i < text.length) {
      setTimeout(typeWriter, 150); // Adjust the typing speed here
      typingText.textContent += text.charAt(i);
      i++;
    } else {
      // Wait for the caret to blink a few times before removing it
      setTimeout(() => {
        typingText.classList.add('finished');
      }, 3000); // 3000ms = 4 blinks (0.75s * 4)
    }
  }

  typeWriter();
});
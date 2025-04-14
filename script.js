
const btn = document.querySelector('button');
    const h3 = document.querySelector('h3');
    const colorBox = document.querySelector('.color-box');

    btn.addEventListener('click', () => {
      const randomColor = getRandomColor();
      colorBox.style.backgroundColor = randomColor;
      h3.innerText = `Color: ${randomColor}`;
    });

    function getRandomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    }

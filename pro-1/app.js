// Step-1 

window.onload = () => {
  main();
};

function main(){
      const root = document.getElementById('root');
      const btn = document.getElementById('changeBtn');

      btn.addEventListener('click', function(){
        const bgColor = randomRGbColor();
        root.style.backgroundColor = bgColor;
      })
}

/**
 * Random color generator function 
 */

function randomRGbColor(){
   const red = Math.floor(Math.random() * 225);
   const green = Math.floor(Math.random() * 225);
   const blue = Math.floor(Math.random() * 225);

   return `rgb(${red}, ${green}, ${blue})`;
}
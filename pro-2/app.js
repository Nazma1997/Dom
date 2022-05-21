window.onload = () => {
  main();
};

function main(){
      const root = document.getElementById('root');
      const btn = document.getElementById('changeBtn');
      const output = document.getElementById('output')

      btn.addEventListener('click', function(){
        const bgColor = randomHEXColor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
      })
}

/**
 * Random color generator function 
 */

function randomHEXColor(){
   const red = Math.floor(Math.random() * 225);
   const green = Math.floor(Math.random() * 225);
   const blue = Math.floor(Math.random() * 225);

   return`#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
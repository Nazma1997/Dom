
let div = null;

window.onload = () => {
  main();
};

function main(){
      const root = document.getElementById('root');
      const changeBtn = document.getElementById('changeBtn');
      const output = document.getElementById('output')
      const copyBtn = document.getElementById('copyBtn');


       changeBtn.addEventListener('click', function(){
        const bgColor = randomHEXColor();
        root.style.backgroundColor = bgColor;
        output.value = `${bgColor}`;
      });

      copyBtn.addEventListener('click', function(){
        navigator.clipboard.writeText(`#${output.value}`);

        if(div != null){
          div.remove();
          div = null;
        }
        
        if(isValidHex(output.value)){
          generateToastMessage(`#${output.value} copied`);
        } else{
          alert('Invalid Color')
        }
      });

      output.addEventListener('keyup', function(e){
                const color = e.target.value;
                if(color && isValidHex(color)){
                  root.style.backgroundColor = color;
                }
      });
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

function generateToastMessage(msg){
     div = document.createElement('div');
    div.innerText = msg;
    div.className = 'toast-message toast-message-slide-in';

    div.addEventListener('click', function(){
      div.classList.remove('toast-message-slide-in');
      div.classList.add('toast-message-slide-out');

      div.addEventListener('animationend', function(){
        div.remove();
        div = null;
      })
    });


    document.body.appendChild(div)
};

/**
 * 
 * @param {string} color 
 * @returns 
 */
function isValidHex(color){
         if(color.length != 6) return false;
         return /^[0-9A-Za-z]{6}$/i.test(color);
}
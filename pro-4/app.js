
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
        output.value = bgColor;
      });

      copyBtn.addEventListener('click', function(){
        navigator.clipboard.writeText(output.value);

        if(div !== null){
          div.remove();
          div = null;
        }
        generateToastMessage(`${output.value} copied`);
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
}
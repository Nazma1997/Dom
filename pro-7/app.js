
let div = null;

window.onload = () => {
  main();
};

function main(){
      const root = document.getElementById('root');
      const changeBtn = document.getElementById('changeBtn');
      const output = document.getElementById('output');
      const output2 = document.getElementById('output2');
      const copyBtn = document.getElementById('copyBtn');


       changeBtn.addEventListener('click', function(){
        const color = generateColorDecimal();
        const hex = randomHEXColor(color);
        const rgb = generateRGBColor(color);
        root.style.backgroundColor = hex;
        output.value = hex.substring(1).toUpperCase();
        output2.value = rgb;
      });

      copyBtn.addEventListener('click', function(){
        navigator.clipboard.writeText(`${output.value}`);

        if(div != null){
          div.remove();
          div = null;
        }
        
        if(isValidHex(output.value)){
          generateToastMessage(`#${output.value} copied`.toUpperCase());
        } else{
          alert('Invalid Color')
        }
      });

      output.addEventListener('keyup', function(e){
                const color = e.target.value;
               if(color){
                 output.value = color.toUpperCase();
                 if(isValidHex(color)){
                   root.style.backgroundColor = `#${color}`;
                 }
               }
      });
}

function generateColorDecimal(){
  const red = Math.floor(Math.random() * 225);
  const green = Math.floor(Math.random() * 225);
  const blue = Math.floor(Math.random() * 225);

  return{
    red,
    green,
    blue
  }
}

function randomHEXColor({red, green, blue}){
  
  // const {red, green, blue} = generateColorDecimal();
  const getTwoCode = (value) => {
    const hex = value.toString(16);
    return hex.length == 1 ? `0${hex}` : hex
  }

   return`#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(blue)}`;
};

function generateRGBColor({red, green, blue}){
  // const {red, green, blue} = generateColorDecimal();

  return `rgb(${red}, ${green}, ${blue})`
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

// Global variables 
let div = null;



/**
 * Colors Picker by js DOM
 */
// Onload Function 
window.onload = () => {
  main();
};


// Main Function 
function main(){
      const root = document.getElementById('root');
      const changeBtn = document.getElementById('changeBtn');
      const output = document.getElementById('output');
      const output2 = document.getElementById('output2');
      const copyBtn = document.getElementById('copyBtn');
      const copyBtn2 = document.getElementById('copyBtn2');


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

      copyBtn2.addEventListener('click', function(){
        navigator.clipboard.writeText(`${output2.value}`);

        if(div != null){
          div.remove();
          div = null;
        }
        
        if(isValidHex(output.value)){
          generateToastMessage(`${output2.value} copied`);
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
                   output2.value = hexToRgb(color);
                 }
               }
      });
}


// Dom Function
/**
 * toast message
 * @param {String} msg 
 */ 
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

// Event handlers 



// Utils Function 


/**
 * generate and returns an object of three decimal values
 * @returns {object} generateColorDecimal()
 */
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
/**
 * convert hex code to rgb
 * @param {hex} hex 
 * @returns {String}
 */
function hexToRgb(hex){
  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4), 16);

  return `rgb(${red}, ${green}, ${blue})`;
}

/**
 * generate random hex color code
 * @param {object} color 
 * @returns {String}
 */
function randomHEXColor({red, green, blue}){
  
  // const {red, green, blue} = generateColorDecimal();
  const getTwoCode = (value) => {
    const hex = value.toString(16);
    return hex.length == 1 ? `0${hex}` : hex
  }

   return`#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(blue)}`;
};

/**
 * generate random rgb color code
 * @param {object} color
 * @returns {String}
 * 
 */
function generateRGBColor({red, green, blue}){
  // const {red, green, blue} = generateColorDecimal();

  return `rgb(${red}, ${green}, ${blue})`
}



/**
 * validate hex color code
 * @param {string} color 
 * @returns {boolean}
 */
function isValidHex(color){
         if(color.length != 6) return false;
         return /^[0-9A-Za-z]{6}$/i.test(color);
}


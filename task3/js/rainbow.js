function paintReinbow(COUNT, HI) {
    let elemViewRainbow = document.createElement("div");   
    for (let i = 0; i < COUNT; i++) {
        elemViewRainbow.innerHTML += `
        <svg style="width:70px; height:${HI}px; display:inline;">
           <line x1="0" 
             y1="${Math.floor(Math.random() * HI)}" 
             x2="0" 
             y2="${HI}"
             style="stroke: ${rndColor()}; stroke-width: 100" />
        </svg>`;
    }

    function rndColor() {
       let arr = new Array(3);
       for (let i = 0; i < arr.length; i++) {
          arr[i] = Math.floor(Math.random() * 256);
       }
       return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
    }
    return elemViewRainbow;
 }
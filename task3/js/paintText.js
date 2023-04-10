function createColorText(selector) {
    let elem = document.querySelector(selector);
    let text = elem.textContent;
    let innerText = "";
    let arrChar = text.split("");
    for (let i = 0; i < arrChar.length; i++) {
       innerText += `<span style="color: ${rndColor()};">${arrChar[i]}</span>`
    }

    function rndColor() {
       let arr = new Array(3);
       for (let i = 0; i < arr.length; i++) {
          arr[i] = Math.floor(Math.random() * 256);
       }
       return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
    }
    return innerText;
 }
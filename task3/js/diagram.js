function createDiagram(arrayValue, widthLineDiagram, indentLine, colorDiagram) {
    let maxHeight = arrayValue[0];
    for (let i = 1; i < arrayValue.length; i++) {
        if (maxHeight < arrayValue[i]) {
            maxHeight = arrayValue[i];
        }
    }
    let elemViewDiagram = document.createElement("div");
    for (let i = 0; i < arrayValue.length; i++) {
        elemViewDiagram.innerHTML += `
        <svg style="width:${indentLine}px; height:${maxHeight}px; display:inline;">
           <line x1="0" 
             y1="${maxHeight - arrayValue[i]}" 
             x2="0" 
             y2="${maxHeight}"
             style="stroke: ${colorDiagram}; stroke-width: ${widthLineDiagram}" />
        </svg>`;
    }
    return elemViewDiagram
}

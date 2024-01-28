 function getElementWidth(content, padding, border) {
     const contentNpx = Number.parseFloat(content);
     const paddingNpx = Number.parseFloat(padding);
     const borderNpx = Number.parseFloat(border);
    
     return contentNpx + paddingNpx * 2 + borderNpx * 2;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
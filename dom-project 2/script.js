window.onload = () => {
    main();

};

function main() {
    const root = document.querySelector("div");
    const btn = document.querySelector("button");
    const output = document.querySelector("input");


    btn.addEventListener('click' , function(){
    const hexaColor = generateHexaColor();
    root.style.backgroundColor = hexaColor;
    output.value = hexaColor;
    });
}
function generateHexaColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return`#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
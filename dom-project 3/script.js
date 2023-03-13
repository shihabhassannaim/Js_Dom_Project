window.onload = () => {
    main();

}

function main() {
    const container = document.querySelector(".container");
    const output = document.querySelector("input");
    const changeBtn = document.querySelector("#change-btn");
    const copyBtn = document.querySelector(".copy");

    changeBtn.addEventListener('click' , function() {
        const color = generateColor();
        container.style.backgroundColor = color;
        output.value = color;
    });

    copyBtn.addEventListener('click',function(){
        window.navigator.clipboard.writeText(output.value)
    })

}



function generateColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return`#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
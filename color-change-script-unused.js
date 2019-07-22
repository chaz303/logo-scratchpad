
let hue = 129;
    let offset = 180;
    let headerColor = "hsl(" + hue + ", 60%, 5%)";
    let rightSideColor = "hsl(" + ((hue + offset) % 360) + ", 25%, 90%)"
    document.querySelector('#header-left').style.backgroundColor = headerColor;
    document.querySelector('#header-right').style.backgroundColor = rightSideColor;
    document.querySelector('#body-left').style.backgroundColor = "white"
    document.querySelector('#body-right').style.backgroundColor = rightSideColor;
//changeBackgroundColor(hue);


function changeBackgroundColor(time){
    hue = parseInt(((new Date).getTime() / 500) % 360);
    let offset = 350;
    let headerColor = "hsl(" + hue + ", 60%, 5%)";
    let rightSideColor = "hsl(" + ((hue + offset) % 360) + ", 25%, 9%)"
    document.querySelector('#header-left').style.backgroundColor = headerColor;
    document.querySelector('#header-right').style.backgroundColor = rightSideColor;
    document.querySelector('#body-left').style.backgroundColor = "white"
    document.querySelector('#body-right').style.backgroundColor = rightSideColor;

requestAnimationFrame(changeBackgroundColor);
}

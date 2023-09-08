window.onload = function () {
    initColorPicker();
};
function initColorPicker() {
    let colorBox = document.getElementById("color-box");
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue"),
    };
    let ColorPickers = document.getElementsByClassName("picker")
    setColorPickerEventListeners(colorBox, rgb, pickerElemnts);
}
function setColorPickerEventListeners(colorBox, rgb, pickerElements) {
    rgb.red.addEventListener('change', () => {
    let pickerLen = pickerElements.length;
    for (let i = 0; i < pickerElements.length; i++) {
        pickerElements[i].addEventListener('change', () => {
            console.log("Red value: ", rgb.red.value);
            let red = rgb.red.value;
            let green = rgb.green.value;
            let blue = rgb.blue.value;
            setBoxBGColor(colorBox, 150, 150, 150);
            setDisplayValues(red,green,blue)

        });
    }
});
            function setBoxBGColor(colorBox, red, green, blue) {
                let rgbVal = [red, green, blue].join(',');
                colorBox.style.backgroundColor = "rgb(" + rgbVal + ")";
            }
            function setDisplayValues(red, green, blue) {
                let redVal = document.getElementById("redVal")
                let greenVal = document.getElementById("greenVal")
                let blueVal = document.getElementById('blueVal')

                redVal.innerText = red;
                greenVal.innerText = green;
                blueVal.innerText = blue;}}


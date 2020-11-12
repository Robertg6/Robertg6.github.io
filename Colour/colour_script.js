var buttons = document.getElementsByClassName('colourButton');
setButtonColour(buttons[0], 0, 0, 255);
var heading;
heading = document.getElementById('colourValue');
heading.innerHTML = 'Hello world!';
function setButtonColour(button, red, green, blue){
    button.setAttribute('style',
                        'background-color: rgb('+ red +','+ green +','+ blue +');'
                       );
}

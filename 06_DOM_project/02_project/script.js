// this usecase will give you empty vlaue
//  let height = parseFloat(document.querySelector('#h').value);
function oncli() {

    // parseFloat(string);
    // Reads the string character by character
    // Extracts a valid floating-point number
    // Returns it as a JavaScript Number type

    let height = parseFloat(document.querySelector('#h').value);
    let weight = parseFloat(document.querySelector('#w').value);
    let op = document.querySelector('#output');
    if(height <= 0 ){
        op.textContent = "please give height greater than 0";
        return;
    }
    if ( weight < 0)
    {
        op.textContent = "Please give a positive weight ";
        return;
    }
    let res = (weight * 10000) / (height * height);
    res  = res.toFixed(2);

    function display(val) {
        op.textContent= `your BMI is ${res} and ${val}`;
    }

    if (res <= 18.5) {
        display("You are under weight.");
    } else if (res >= 25) {
        display("You are over weight.");
    } else {
        display("Your BMI scale is good.");
    }
    }


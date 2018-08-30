// var test = document.getElementById('image');
// test.onclick = function() {
//     console.log('Hello');
//     let a = 1;
//     document.getElementById("numberOfClicks").innerHTML =a;
//     a++;
//     console.log(a++);    // 1
// };

var i = 0;
var x =0;
var y =0;
var z =0;
var a =0;

function buttonClick() {
    i++;
    //document.getElementById('number1').value = i;
    document.getElementById('number1').innerText = i;
}

function buttonClick2() {
    x++;
    //document.getElementById('number2').value = x;
    document.getElementById('number2').innerText = x;
}

function buttonClick3() {
    y++;
    //document.getElementById('number2').value = x;
    document.getElementById('number3').innerText = y;
}

function buttonClick4() {
    z++;
    //document.getElementById('number2').value = x;
    document.getElementById('number4').innerText = z;
}

function buttonClick5() {
    a++;
    //document.getElementById('number2').value = x;
    document.getElementById('number5').innerText = a;
}
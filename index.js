// var test = document.getElementById('image');
// test.onclick = function() {
//     console.log('Hello');
//     let a = 1;
//     document.getElementById("numberOfClicks").innerHTML =a;
//     a++;
//     console.log(a++);    // 1
// };

var i = 0;
function buttonClick() {
    i++;
    document.getElementById('number').value = i;
}
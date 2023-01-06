let displayBox = document.getElementById('display-minutes');
let setTimeButton = document.getElementById('settime')
let inputrange = document.querySelector('.inputRange');
let setTimeSpan = document.getElementById('setTimeSpan');

inputrange.oninput = () => {
    setTimeSpan.innerHTML = inputrange.value;
}

setTimeButton.onclick =() => {
    displayBox.innerHTML = inputrange.value;
}
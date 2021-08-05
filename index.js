const minusBtn = document.getElementById('minus-btn')
const plusBtn = document.getElementById('plus-btn')
const showNum = document.getElementById('show-num')
function eventlistner(btnevent, calBack) {
    btnevent.addEventListener('click', calBack)
}
eventlistner(plusBtn, () => {
    console.log('i am pluse btn');
})
eventlistner(minusBtn, () => {
    console.log('i am minusBtn');
})
const minusBtn = document.getElementById('minus-btn')
const plusBtn = document.getElementById('plus-btn')
const showNum = document.getElementById('show-num')
const minusBtn2 = document.getElementById('minus-btn2')
const plusBtn2 = document.getElementById('plus-btn2')
const showNum2 = document.getElementById('show-num2')
const iPhoneP = document.getElementById('iPhoneP')
const ipCover = document.getElementById('ipCover')

function eventlistner(btnevent, calBack) {
    btnevent.addEventListener('click', calBack)
}
eventlistner(plusBtn, () => {
    plusMinus((currValue) => {
        return showNum.value = currValue + 1
    }, showNum)
})
eventlistner(minusBtn, () => {
    plusMinus((currValue) => {
        return showNum.value = currValue <= 0 ? 0 : currValue - 1
    }, showNum)
})
eventlistner(plusBtn2, () => {
    plusMinus((currValue) => {
        return showNum2.value = currValue + 1
    }, showNum2)
})
eventlistner(minusBtn2, () => {
    plusMinus((currValue) => {
        return showNum2.value = currValue <= 0 ? 0 : currValue - 1
    }, showNum2)
})

function plusMinus(calback, showNum) {
    let currValue = showNum.value
    currValue = JSON.parse(currValue)
    calback(currValue)
    UpdatePrice(showNum)
}
function UpdatePrice(showNum) {
    let idE = showNum.getAttribute('id')
    let currentV = showNum.value
    let pPhoCov = idE === 'showNum' ? iPhoneP : ipCover
    let iPrice = pPhoCov.innerText
    iPrice = JSON.parse(iPrice)
    console.log(iPrice);
    iPhoneP.innerText = iPrice === 0 ? iPrice + 1219 : iPrice * (currentV + 1)

}
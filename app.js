// function otpShow() {
//     document.getElementById('otpShow')
//     Math.round(Math.random() * 10)
// }

// function valGenerate() {
//     document.getElementById('valGenerate').click
//     return otpShow()
// }

function generateOtp() {
    const otp = Math.floor(10000 + Math.random() * 90000)
    return otp
}

document.getElementById('valGenerate').addEventListener('click', function () {
    const otp = generateOtp()
    document.getElementById('otpShow').innerText = otp
})
let imgbox = document.getElementById("imgbox")
let qrimg = document.getElementById("qrimg")
let qrtext = document.getElementById("qrtext")
function generate() {
    if (qrtext.value.length > 0) {
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value
        imgbox.classList.add("show-img")
    }
    else {
        qrtext.style.border = "1px solid red"
        qrtext.classList.add("error")
        setTimeout(() => {
            qrtext.classList.add("error")
        }, 1000);
    }
}

let texto = document.querySelector(".entradaTexto")
let botaoGerar = document.querySelector(".botaoGerar")
let botaoBaixar = document.querySelector(".botaoBaixar")
let contendoQrCode = document.querySelector(".qrcode")

function gerarQRCode() {
    if(texto.value) {
       contendoQrCode.innerHTML = ""
       let qrCode = new QRCode(contendoQrCode,{      
        text: texto.value,
        width: 256,
        height: 256,
       })
     botaoBaixar.style.display = "block"
    } else {

    alert("Por Favor, digite algum texto ou URL para gerar o QR CODE")
    }
}

botaoGerar.addEventListener("click", gerarQRCode)
botaoBaixar.addEventListener("click", baixarQRCode)

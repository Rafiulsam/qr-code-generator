const qrImage = document.querySelector('img')
const inputFiled = document.querySelector('input')
const generateBtn = document.querySelector('#generate')
const downloadBtn = document.querySelector('#download')


generateBtn.addEventListener('click', () => {
    const inputValue = inputFiled.value
    inputFiled.value = '';
    const qrLink = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
    qrImage.src = qrLink
})

downloadBtn.addEventListener('click', async () =>{
    const res = await fetch(qrImage.src)
    const data= await res.blob()
    const downloadLink = document.createElement('a')
    downloadLink.href = URL.createObjectURL(data)
    downloadLink.download = "qrcode.jpg"
    downloadLink.click()
})
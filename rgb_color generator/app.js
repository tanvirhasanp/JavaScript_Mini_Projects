const colorGenerator= () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return `rgb(${r},${g},${b})`

}

const generateNewColor= () => {
    const colorGeneratorFunc = colorGenerator()
    document.getElementById('colorCode').innerText= colorGeneratorFunc

    document.getElementById('colorBox').style.backgroundColor = colorGeneratorFunc
}

document.getElementById('copyCode').addEventListener('click', () => {
    const paraCode= document.getElementById('colorCode') 
    const inputBox= document.createElement('input')
    document.body.appendChild(inputBox)
    inputBox.value = paraCode.innerText
    inputBox.select()
    document.execCommand('copy')
    document.body.removeChild(inputBox)
    alert('color copied to the clipboard!')
})
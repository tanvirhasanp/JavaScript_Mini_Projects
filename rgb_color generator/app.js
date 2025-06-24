const generateColor= () => {
    const r = Math.floor(Math.random() * 255)
    const g= Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return `rgb(${r},${g},${b})`
}

const colorBox= () => {
   const colorGenerateFunction = generateColor()
   const color= document.getElementById('colorBox')
   const  paraColorCode= document.getElementById('colorCode')

   color.style.backgroundColor= colorGenerateFunction 
   paraColorCode.textContent= colorGenerateFunction
}

document.getElementById('copyCode').addEventListener('click', () => {
    const copyCode= document.getElementById('colorCode')
    const inputBox= document.createElement('input')
    document.body.appendChild(inputBox)
    inputBox.value= copyCode.innerText

    inputBox.select()
    document.execCommand('copy') 
    document.body.removeChild(inputBox)  
    alert('color copied to the clipboard')  

})   
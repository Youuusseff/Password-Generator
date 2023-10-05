let alphaUpper = ['A','B','C','D','E','F','X']
let alphaLower = ['s','y','q','l','m','n','z']
let specialCaract = ['!','$','<']
let pswd1 = document.getElementById("result1")
let pswd2 = document.getElementById("result2")
console.log(pswd1)
console.log(pswd2)
console.log(alphaUpper)

function generate(){
    let shuffled = [...alphaUpper].sort(() => 0.5 - Math.random());
    console.log(shuffled)
    let shuffled2 = [...alphaLower].sort(() => 0.5 - Math.random());
    let shuffled3 = [...specialCaract].sort(() => 0.5 - Math.random());
    let shuffledList = shuffled.concat(shuffled2,shuffled3)
    console.log(shuffledList)
    let finalList = [...shuffledList].sort(() => 0.5 - Math.random());
    console.log(finalList)
    let pswd = finalList.join("")
    console.log(pswd)
    pswd1.innerText = pswd
    let shuffled5 = [...alphaUpper].sort(() => 0.5 - Math.random());
    let shuffled6 = [...alphaLower].sort(() => 0.5 - Math.random());
    let shuffled7 = [...specialCaract].sort(() => 0.5 - Math.random());
    let shuffledList1 = shuffled5.concat(shuffled6,shuffled7)
    let finalList1 = [...shuffledList1].sort(() => 0.5 - Math.random());
    pswd3 = finalList1.join("")
    pswd2.innerText = pswd3
}
function copy(){
    let el = document.getElementById("result1").innerText
    var inp = document.createElement('input')
    document.body.appendChild(inp)
    inp.value = el
    inp.select()
    document.execCommand('copy')
    inp.remove()
}
function copy1(){
    let el1 = document.getElementById("result2").innerText
    var inp1 = document.createElement('input')
    document.body.appendChild(inp1)
    inp1.value = el1
    inp1.select()
    document.execCommand('copy')
    inp1.remove()
}

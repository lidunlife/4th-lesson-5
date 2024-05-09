let h1 = document.getElementById(`random`)
let body = document.querySelector(`body`)

let num = Math.round(Math.random()*100)
h1.textContent = num


h1.style.color = `white`
h1.style.fontSize = `xxx-large`

body.style.background = `black`
body.style.display = `flex`
body.style.justifyContent = `center`
body.style.alignItems = `center`
body.style.height = `100vh`
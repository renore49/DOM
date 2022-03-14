const bodyClass = `
font-family: "Roboto";
font-style: normal;
font-weight: 400;
color: rgba(0, 0, 0, 0.7);
display:flex;
justify-content:center;
margin-top:100px;
`
const myClass = `	width: 306px;
	height: 336px;`

const h1Class = `font-size:48px;
font-weight: 300;
text-align:center;`

const h3Class = `   width: 100%;
    font-size: 14px;
    line-height: 16px;
		font-weight: 100;
    text-align: left;`

const buttonClass = `    margin: 55px 0px 0px 50px;
    width: 220px;
    height: 55px;
    background: #ca0000;
    border: 1px solid #ff0000;
    border-radius: 10px;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;`
const body = document.body
body.style.cssText = bodyClass

const myTag = document.createElement('div')
myTag.style.cssText = myClass
const h1 = document.createElement('h1')
h1.innerText = `Let’s talk`
h1.style.cssText = h1Class
const hr = document.createElement('hr')

const h3 = document.createElement('h3')
h3.innerText = `Your Name`
h3.style.cssText = h3Class
const hr2 = document.createElement('hr')

const h32 = document.createElement('h3')
h32.innerText = `Your Email`
h32.style.cssText = h3Class
const button = document.createElement('button')
button.innerText = `SEND MESSAGE`
button.style.cssText = buttonClass
myTag.append(h1)
myTag.append(hr)
myTag.append(h3)
myTag.append(hr2)
myTag.append(h32)
myTag.append(button)
console.log(body)
body.append(myTag)

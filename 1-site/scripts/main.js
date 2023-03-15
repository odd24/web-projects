// let myHeading = document.querySelector('h2');
// let myString = "xjh";
// //alert('我最喜欢巧克力冰激淋了。' + myString);
// myHeading.textContent = 'Hello world!';

// function sum(a,b) {
//     return a+b;
// }
// alert('我最喜欢巧克力冰激淋了。' + sum("50","llllllllllllslslslsl"));

// document.querySelector("h1").addEventListener("click", function () {
//     alert("别戳我，我怕疼。");
//   });

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/website-drawing-scan.png') {
      myImage.setAttribute('src', 'images/Snipaste_2023.png');
    } else {
      myImage.setAttribute('src', 'images/website-drawing-scan.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
 }
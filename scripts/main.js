

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

var myButton=document.querySelector('button');

var myHeading=document.querySelector('h1');

function setUserName(){
    var myName=prompt('please enter your name');
    localStorage.setItem('name',myName);
    myHeading.textContent=myName;
}

if (localStorage.getItem('name')){
    var storageName=localStorage.getItem('name');
    myHeading.textContent=storageName;
}
myButton.onclick=function(){
    setUserName();
}
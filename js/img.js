var i = 0;
var images = [];
var time = 3000;


//Img list
images[0] = "./img/11.jpg";
images[1] = "./img/12.jpg";
images[2] = "./img/13.jpg";
images[3] = "./img/14.jpg";
images[4] = "./img/15.jpg";
images[5] = "./img/16.jpg";
images[6] = "./img/17.jpg";
images[7] = "./img/18.jpg";
images[8] = "./img/19.jpg";

//Change img
function changeImg(){
    document.start.src = images[i];

if(i < images.length -1){
i++
} else{
    i = 0;
}
setTimeout("changeImg()", time);
}
window.onload = changeImg;
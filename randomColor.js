document.addEventListener("DOMContentLoaded", function(){

const btn = document.querySelector("#button");
const colorTop = document.querySelector("#rgb");
const colorBottom = document.querySelector("#hex");
const body = document.querySelector("#random-background");

let rgbToHex = function (rgb) { 
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
}

let fullColorHex = function(x,y,z) {   
  let red = rgbToHex(x);
  let green = rgbToHex(y);
  let blue = rgbToHex(z);
  return red+green+blue;
}

btn.addEventListener("click", function(){
	let x = Math.floor(Math.random() * 255);
	let y = Math.floor(Math.random() * 255);
	let z = Math.floor(Math.random() * 255);

	let rgbCode = "rgb(" +x+ ", " +y+ ", " +z+ ")"; 
	body.style.background = rgbCode;
	
	btn.style.color = "#f9fafa";
	btn.style.border = "3px solid #f9fafa";

	colorTop.innerHTML = rgbCode;
	colorTop.style.color = "#f9fafa";
	colorTop.style.border = "3px solid #f9fafa";

	colorBottom.innerHTML = "#" + fullColorHex(x,y,z);
	colorBottom.style.color = "#f9fafa";
	colorBottom.style.border = "3px solid #f9fafa";
});


});

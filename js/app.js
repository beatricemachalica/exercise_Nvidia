// JS menu burger :

document.querySelector('.burger').addEventListener("click", function (){
    document.querySelector("nav").classList.toggle("visible");
});

// JS one imag modal :

// Get the modal
// var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal
// var img = document.getElementById('myImg');
// var modalImg = document.getElementById("img01");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
// }

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }

// For multi img modal :

// Get the modal
var modal = document.getElementById('myModal');
// Get the images and bind an 
// onclick event on each to insert it inside the modal

var images = document.querySelectorAll(".photoGalerie");
var modalImg = document.getElementById("img01");
for(let i = 0; i < images.length; i++){
  images[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 
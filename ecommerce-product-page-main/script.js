document.getElementById('cart').addEventListener('click',()=>{
    document.querySelector('.drop-content').classList.toggle('show');
    
  })
const tab =     document.querySelectorAll('#tab');
tab.forEach(tab => {
tab.addEventListener('click',change);
});

 const image =document.getElementById('image')
function change(e){

image.src = e.target.src;

}
let p = 0;
//  alert(price)
$('#minus').click(()=>{
   $("#quan").text(p--) 
   
})


$('#plus').click(()=>{
    $("#quan").text(  p++ ) 
    
 })
 $("#add").click(()=>{

 })
 function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$("#image").click(()=>{
    $(".img-showcases").css('display','block')
    $("#bodie").css("background-color",'hsl(223, 64%, 98%)')
})
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("image");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  
  slides[slideIndex-1].style.display = "block";
  
}
$("#close").click(()=>{
  $(".img-showcases").css('display','none');
  $("#bodie").css('background-color','white');
});
$("#add-to-cart").click(()=>{
  const num = parseInt($("#quan").text());
  $("#notification").css('display',"block");
  $(".carts").css('display',"block")
  $("#empty").css('display',"none")
 $("#number").text(num);
 const equal = num * parseInt($("#normal").text())
 $("#equal").text(`$${equal}`)


});
$("#delete").click(()=>{
  $(".carts").css('display',"none")
  alert('hello world')
})

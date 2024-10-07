
let currImageIndex = 0;
let prev = document.querySelector("#prev")
let next = document.querySelector("#next");
let images = document.querySelectorAll(".box");

function showImage(Index){
   

images.forEach(image => {
    image.style.display = "none";
});

    images[Index].style.display = "block";
}
window.onload = function(){
    showImage(currImageIndex);
};



prev.addEventListener("click", () => {
    // Decrement the index first and wrap around if needed
    currImageIndex = (currImageIndex - 1 + images.length) % images.length;
    showImage(currImageIndex); // Show the previous image
});

next.addEventListener("click", () => {
    // Increment the index first and wrap around if needed
    currImageIndex = (currImageIndex + 1) % images.length;
    showImage(currImageIndex); // Show the next image
});
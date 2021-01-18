function loadGallery(){
    var x = document.getElementById("gallery").innerHTML;
    for (var i = 1; i <= 4; i++) {
        // x = x + "info";
        x = x + "<div class=\"image-block\"><img src=\"images/minecraft" + i + 
        ".png\" data-bs-target=\"\#gallerySlideshow\"data-bs-slide-to=\"" + i + "\"></div>";
    }
    document.getElementById("gallery").innerHTML = x;
}
// console.log(x);
// for(var i = 0; i += 4; i++){
    loadGallery();
// }

// function loadGalleryModal() {

// }

//  Initialize Swiper
let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  delay: 3000,
  loop: true,
  slidesPerView: 1,
  on: {
	slideChange: function () {
	  // Remove fade-in class from all images
	  var allImages = document.querySelectorAll('.swiper-slide img');
	  allImages.forEach(function (img) {
		img.classList.remove('zoom-in');
	  });

	  // Add fade-in class to the active slide's image
	  var activeSlideImage = this.slides[this.activeIndex].querySelector('img');
	  console.log(activeSlideImage);
	  activeSlideImage.classList.add('zoom-in');
	}
  }
});
swiper.autoplay.start();
document.querySelector(".swiper-button-next").style.top = "80%";
document.querySelector(".swiper-button-next").style.right = "40%";
// change button color
document.querySelector(".swiper-button-next").style.color = "rgb(241, 91, 21)";
// scale down button
document.querySelector(".swiper-button-next").style.transform = "scale(0.5)";

document.querySelector(".swiper-button-prev").style.top = "80%";
document.querySelector(".swiper-button-prev").style.left = "40%";
document.querySelector(".swiper-button-prev").style.color = "rgb(241, 91, 21)";
// scale down button
document.querySelector(".swiper-button-prev").style.transform = "scale(0.5)";


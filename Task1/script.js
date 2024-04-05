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
      var allImages = document.querySelectorAll(".swiper-slide img");
      allImages.forEach(function (img) {
        img.classList.remove("zoom-in");
      });

      var allRating = document.querySelectorAll(".rating");
      allRating.forEach(function (rating) {
        rating.classList.remove("zoom-in");
      });

      // Add fade-in class to the active slide's image
      var activeSlideImage = this.slides[this.activeIndex].querySelector("img");
      activeSlideImage.classList.add("zoom-in");
      var activeRating = this.slides[this.activeIndex].querySelector(".rating");
      activeRating.classList.add("zoom-in");

      document.querySelectorAll(".slider-img").forEach((img) => {
		img.classList.remove('zoom-in');
		// Trigger reflow to reset the animation
		void img.offsetWidth;
		img.classList.add('zoom-in');
      });

	  document.querySelectorAll(".img .slider-rating").forEach((rating) => {
		rating.classList.remove('zoom-in');
		// Trigger reflow to reset the animation
		void rating.offsetWidth;
		rating.classList.add('zoom-in');
	  });
    },
  },
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

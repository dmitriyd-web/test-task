document.addEventListener('DOMContentLoaded', function(){
	
	//	mobile menu
	
	$(".toggle-menu").on("click", function(){
		$(".toggle-menu, .burder-menu").toggleClass("open")
	})
	
	//	popup
	
	$(".btn").on("click", function(e){
		e.preventDefault()
		$(".overlay, .popup").addClass("open")
		$(".toggle-menu, .burder-menu").removeClass("open")
	})
	
	$(".overlay, .popup .popup-close").on("click", function(e){
		e.preventDefault()
		$(".overlay, .popup").removeClass("open")
	})

	if ( window.innerWidth <= 1200 ) {
		//	animation
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
		
		ScrollSmoother.create({
			wrapper: '.wrapper',
			content: '.content',
			smoot: 1.5,
			effects: true,
			once: true 
		})
		let showFromBottom = gsap.utils.toArray('.section-full .section-items .section-item')

		showFromBottom.forEach(item => {
			gsap.fromTo(item, { opacity: 0, y: -200 }, {
				opacity: 1, y: 0,
				scrollTrigger: {
					trigger: item,
					start: '-350',
					end: '-400',
					scrub: true,
					once: true 
				}
			})
		})
	}
	
	//	main-slider
	const mainSliderExists = document.querySelector(".main-slider")
	if ( mainSliderExists ) {
		const mainSlider = new Swiper('.main-slider', {
			// Optional parameters
			slidesPerView: 1,
		    spaceBetween: 0,
			loop: true,
			navigation: {
				nextEl: '.slider-pagination__btn--next',
				prevEl: '.slider-pagination__btn--prev',
			},
			scrollbar: {
				el: '.swiper-scrollbar',
			}
		});
		//$(".slider-pagination__btn--next").click()
	}
})
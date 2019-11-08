//script for tab

$(document).ready(function(){
	
	//tabs function
	
	$('ul.tabs li a').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li a').removeClass('active');
		$('.tab-content').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})
	
	//slider function for gallery
      $('.slider-gallery').bxSlider({
		  minSlides: 3,
		  maxSlides: 3,
		  moveSlides: 1,
		  slideWidth:600,
		  slideMargin:50,
		  auto:true
	  }
	  
	  );
	
	
		//slider function for testiminials
      $('.slider-testimonials').bxSlider({
		  auto: true,
		  pause: 3000
		  
	  });
	
	
	//slider function for partners
	      $('.slider-partners').bxSlider({
		  minSlides: 6,
		  maxSlides: 6,
		  moveSlides: 1,
		  slideWidth:150,
		  pager:false,	
		  slideMargin:30,
			  auto:true,
			  speed:200,
			  pause: 1000,
			  autoHover:true
	  }
	  
	  );

})
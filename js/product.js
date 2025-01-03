$(function(){
	 var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });


	//수량
	$('.pl').on('click',function(){
		var productQaun = parseInt($('.quantity_box input').val());		
		if(productQaun < 100){
			$('.quantity_box input').val(productQaun+1);
		}
	});
	$('.mn').on('click',function(){
		var productQaun = parseInt($('.quantity_box input').val());		
		if(productQaun > 0){
			$('.quantity_box input').val(productQaun-1);
		}else{
			alert('최소 주문량은')
		}
	});


	//찜하기
	$('.like').on('click',function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active');
		}
	});
	//장바구니
	$('.addcart').on('click',function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active');
		}
	});


});
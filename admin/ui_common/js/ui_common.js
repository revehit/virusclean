$(function(){

	//
		$('.depth01').on('click',function(){
			if($(this).hasClass('open')){
				$(this).find('.depth02').slideUp();
				$(this).removeClass('open');
			}else{
				$(this).find('.depth02').slideDown();
				$(this).addClass('open')
			}
		});

	//
	$('.radio_box').on('click',function(){

		$('.radio_box').each(function(){			
			if($(this).find('input').is(':checked')){
				$(this).addClass('check');
			}
			if(!$(this).find('input').is(':checked')){
				$(this).removeClass('check');
			}
		})
		
	});
	// 
	$('.close').on('click',function(){
		$(this).parents('.modal_window').hide();
		$('.modal_backdrop').hide();
	});


});
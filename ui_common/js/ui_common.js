$(function(){
	//tab

	$('.tab ul li a').on('click',function(){
		var targer = $(this).closest('li')
		var idx = targer.index();

		targer.addClass('active').siblings().removeClass('active');
		$('.tab_cont > ul> li').eq(idx).addClass('active').siblings().removeClass('active');

	});


	$('.menu_btn').on('click',function(){
		console.log('d')
		if($('#heaeder').hasClass('show')){
			$('#heaeder').removeClass('show')
		}else{
			$('#heaeder').addClass('show')	
		}
	
	})

	$('.question').on('click',function(){
		console.log('d')
		target = $(this).closest('li');

		if(target.hasClass('active')){
			target.removeClass('active');
			target.find('.answer').slideUp();
		}else{
			target.addClass('active')
			target.find('.answer').slideDown();
		}
		
	});

	$(".modal_cls_btn").on("click", function(){
		$('.modal_backdrop').hide();
		$('body').removeClass('modal_open');
		$('#popup01').hide();
		$('#popup02').hide();
		$('#popup03').hide();

	});//팝업닫기


	//top_btn

	$('.top_btn').on('click',function(){
		$('body,html').animate({scrollTop: '0'}, 1000);
	});


	//mobile 뒤로가기 버튼- 스크롤시 show

	if (window.innerWidth > window.innerHeight) {
		 // 가로 모드
		if(window.innerWidth < 1368 && window.innerHeight < 1026){
			console.log('가로1');
			$(window).on('scroll', function(){
				var num = $(window).scrollTop();
				if(num > 100){
					$(".location_bar").addClass('mo');
				}else{
					$(".location_bar").removeClass('mo');
				}
				
			});
		}else{
			console.log('가로2');
			$(window).on('scroll', function(){
				var num = $(window).scrollTop();
				if(num > 100){
					$(".location_bar").addClass('mo');
				}else{
					$(".location_bar").removeClass('mo');
				}
				
			});
		}
	} else {
		 // 세로 모드
		console.log('세로');
		$(window).on('scroll', function(){
			var num = $(window).scrollTop();
			if(num > 100){
				$(".location_bar").addClass('mo');
			}else{
				$(".location_bar").removeClass('mo');
			}
			
		});
	} // 새로고침 없이 화면 전환 시

	

	//마이페이지 팝업 모바일
	$('.modal_window.mypg_modal .ranking_detail_wrap li').on('click', function(){
		
		$(this).children('.r_coup_wrap').toggleClass('active');
	
	});





})

function openPop(){	
	$('body').addClass('modal_open');
	$('.modal_backdrop').show();
	$('#popup01').show();
}
function openPop2(){	
	$('body').addClass('modal_open');
	$('.modal_backdrop').show();
	$('#popup02').show();
}

function openPop3(){	
	$('body').addClass('modal_open');
	$('.modal_backdrop').show();
	$('#popup03').show();
}

//팝업열기


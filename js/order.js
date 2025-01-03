$(function(){

	$(".mypg_list li").on('click', function(){
	   $(".mypg_list li").removeClass("active");
	   $(this).addClass("active");
	}); //상단 페이지 리스트 클릭시

	$(".paging_wrap li").on('click', function(){
	   $(".paging_wrap li").removeClass("active");
	   $(this).addClass("active");
	});

	$('.modal_backdrop').hide();
	$('#popup01').hide();

	

	$('.ranking_detail_benefit').hide();
	$('.open_cont').on('click',function(){
		$('.ranking_detail_benefit').show();
		$(this).hide();
	});

	
});


$(function(){
	$('#container').fullpage({
		anchors: ['section01', 'section03', 'section04', 'section05' ,'section06' , 'section07' ,'section07'],
	});
});

function closeTopBanner(){
	$('.tap_banner').hide();
	$('#heaeder').addClass('no_top');

	
}

function popClose (){
	$('#popup_banner').hide();

}
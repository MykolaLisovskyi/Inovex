$( document ).ready(function(){


$('body').append('<pagetrans><div class="columns hide-in-left"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><img src="../img/loader.gif"></div></pagetrans>');


function ColVisible(mood){

	if ( mood == "true" ){
		$('pagetrans .columns').removeClass('hide-in-left');
	} 

	else if ( mood == "false" ){
		$('pagetrans .columns').addClass('hide-in-left');
	} 

}




function disableLinks(){

	$('a.logo, a.menu_logo, .main_content_card_item a, a.contact, a.back, .menu_hamb li a ').addClass('translink');

	$('.translink').each(function(){
		var link = $(this).attr('href');
		$(this).removeAttr('href').attr('data-href',link);
	});

}

disableLinks();




	
$('.translink').click(function(){

	ColVisible("true");

	$('#hamburger').prop('checked', false);

	var link = $(this).attr('data-href');

	var lang = $('.menu_button_footer .menu_button_footer_item:nth-child(1) a.active').html().toLowerCase().substring(0, 2);

	setTimeout(loadContent,2000, link, lang);

	function loadContent(link, lang){

		

		$('main').load(link+' main',function(){

			window.history.replaceState({}, '',link);

			ColVisible("false");

			 if ( window.location.pathname == "/" || window.location.pathname == "/index" || window.location.pathname == "/indexUA" || window.location.pathname == "/indexRU"){
			    $('div canvas').remove();
			    init();
			    animate();
			} 


			else {
			$('div canvas').remove();
			}

			$('.anim-here-1').addClass('anim-1');
			$('.anim-here-2').addClass('anim-2');
			$('.anim-here-3').addClass('anim-3');

	    });

		

		

		

	}
	
});



});



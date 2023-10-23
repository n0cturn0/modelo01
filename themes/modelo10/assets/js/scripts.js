$(document).ready(function(){

    /* MENU RESPONSIVO */
    $(".menu-responsivo").click(function(){
        $(".menu").animate({right: 0}, "slow");
        $(".menu-responsivo-fundo").fadeIn();
        // $("body").animate({marginLeft: "-100px"}, "slow");
    });
    $(".menu-responsivo-fechar, .menu-responsivo-fundo").click(function(){
        // $("body").animate({marginLeft: "0"}, "slow");
        $(".menu").animate({right: "-100%"}, "slow");
        $(".menu-responsivo-fundo").fadeOut();
    });

    $(".slogan").cycle({
		fx: 'scrollHorz',
		speed: 1000,
		timeout: 5000,
		slides:'> h2'
	});

});
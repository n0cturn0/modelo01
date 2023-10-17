$(document).ready(function(){
    $('#formcontato').submit(function(){
        var dados = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "envia.php",
            data: dados,
            dataType: 'json',
            beforeSend: function(){
                $("#result").text('Enviando mensagem');
                $("#result").fadeIn(250);
            },
            success: function(resposta){
                $("#result").removeClass("error success").addClass(resposta.tipo);
                $("#result").text(resposta.mensagem);
                $("#result").fadeIn(250);
            },
            error: function(){
                $("#result").removeClass("error success").addClass('error');
                $("#result").text('Um erro desconhecido aconteceu e sua mensagem não pode ser enviada');
                $("#result").fadeIn(250);
            }
        });
        return false;
    });
    $("#mainmenu>.item-submenu>a").bind("click", function(){
        if($(this).next(".sub-menu").is(":hidden")){
            $(".item-submenu>a.ativo").next(".sub-menu").slideUp();
            $(".item-submenu>a.ativo").removeClass("ativo");
            
            $(this).addClass("ativo");
            $(this).next(".sub-menu").slideDown();
        } else {
            $(this).removeClass("ativo");
            $(this).next(".sub-menu").slideUp();
        }
    });
    $(".sub-menu>.item-submenu>a").bind("click", function(){
        if($(this).next(".sub-menu").is(":hidden")){
            $(".sub-menu>.item-submenu>a.ativo").next(".sub-menu").slideUp();
            $(".sub-menu>.item-submenu>a.ativo").removeClass("ativo");
            
            $(this).addClass("ativo");
            $(this).next(".sub-menu").slideDown();
        } else {
            $(this).removeClass("ativo");
            $(this).next(".sub-menu").slideUp();
        }
    });
});
$('.nav-menu, .fundo-menu').click(function(){
    $('.nav-menu').toggleClass('open');
    $('body').toggleClass('hidden');
    if($('.nav-menu').hasClass('open')){
        $("#menu").animate({right: "0"}, "slow");
        $('.fundo-menu').fadeIn("slow");
    } else {
        $("#menu").animate({right: "-100%"}, "slow");
        $('.fundo-menu').fadeOut("slow");
    }
});
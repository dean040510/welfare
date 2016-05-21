
$(function() {
	$(".card1").hover(
        function(){
            $(".card1").parent().addClass("card-active");
            $(".card1").parent().removeClass("card-inactive");
            $(".card1 > img").attr("src","img/pic/low02.png");
        },
        function(){
            $(".card1").parent().addClass("card-inactive");
            $(".card1").parent().removeClass("card-active");
            $(".card1 > img").attr("src","img/pic/low01.png");
        }
    );
    $(".card2").hover(
        function(){
            $(".card2").parent().addClass("card-active");
            $(".card2").parent().removeClass("card-inactive");
            $(".card2 > img").attr("src","img/pic/fam02.png");
        },
        function(){
            $(".card2").parent().addClass("card-inactive");
            $(".card2").parent().removeClass("card-active");
            $(".card2 > img").attr("src","img/pic/fam01.png");
        }
    );
    $(".card3").hover(
        function(){
            $(".card3").parent().addClass("card-active");
            $(".card3").parent().removeClass("card-inactive");
            $(".card3 > img").attr("src","img/pic/stu02.png");
        },
        function(){
            $(".card3").parent().addClass("card-inactive");
            $(".card3").parent().removeClass("card-active");
            $(".card3 > img").attr("src","img/pic/stu01.png");
        }
    );
    $(".card4").hover(
        function(){
            $(".card4").parent().addClass("card-active");
            $(".card4").parent().removeClass("card-inactive");
            $(".card4 > img").attr("src","img/pic/old02.png");
        },
        function(){
            $(".card4").parent().addClass("card-inactive");
            $(".card4").parent().removeClass("card-active");
            $(".card4 > img").attr("src","img/pic/old01.png");
        }
    );
    $(".card5").hover(
        function(){
            $(".card5").parent().addClass("card-active");
            $(".card5").parent().removeClass("card-inactive");
            $(".card5 > img").attr("src","img/pic/disable02.png");
        },
        function(){
            $(".card5").parent().addClass("card-inactive");
            $(".card5").parent().removeClass("card-active");
            $(".card5 > img").attr("src","img/pic/disable01.png");
        }
    );
    $(".card6").hover(
        function(){
            $(".card6").parent().addClass("card-active");
            $(".card6").parent().removeClass("card-inactive");
            $(".card6 > img").attr("src","img/pic/aboriginal02.png");
        },
        function(){
            $(".card6").parent().addClass("card-inactive");
            $(".card6").parent().removeClass("card-active");
            $(".card6 > img").attr("src","img/pic/aboriginal01.png");
        }
    );
    $(".card7").hover(
        function(){
            $(".card7").parent().addClass("card-active");
            $(".card7").parent().removeClass("card-inactive");
            $(".card7 > img").attr("src","img/pic/soldier02.png");
        },
        function(){
            $(".card7").parent().addClass("card-inactive");
            $(".card7").parent().removeClass("card-active");
            $(".card7 > img").attr("src","img/pic/soldier01.png");
        }
    );
    $(".card8").hover(
        function(){
            $(".card8").parent().addClass("card-active");
            $(".card8").parent().removeClass("card-inactive");
            $(".card8 > img").attr("src","img/pic/immgrant02.png");
        },
        function(){
            $(".card8").parent().addClass("card-inactive");
            $(".card8").parent().removeClass("card-active");
            $(".card8 > img").attr("src","img/pic/immgrant01.png");
        }
    );
	$(".news > span").hover(
		function(){
            $(".news > span > a > img").attr("src","img/pic/moreinfo02.png");
        },
        function(){
			$(".news > span > a > img").attr("src","img/pic/moreinfo01.png");
        }
	);
    
});

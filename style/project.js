var activeweb;
$(document).ready(function(){
	$("#left-arrow").hover(function() {
		$(this).attr("src","images/projects/arrow_left_hover.png");
			}, function() {
		$(this).attr("src","images/projects/arrow_left.png");
	});
	$("#right-arrow").hover(function() {
		$(this).attr("src","images/projects/arrow_right_hover.png");
			}, function() {
		$(this).attr("src","images/projects/arrow_right.png");
	});
	$("#front-end").hover(function() {
		$(this).attr("src","images/skills/front-end-hover.png");
			}, function() {
		$(this).attr("src","images/skills/front-end.png");
	});
	$("#uiux-des").hover(function() {
		$(this).attr("src","images/skills/ui-ux-hover.png");
			}, function() {
		$(this).attr("src","images/skills/ui-ux.png");
	});
	$("#graphics-des").hover(function() {
		$(this).attr("src","images/skills/graphic-design-hover.png");
			}, function() {
		$(this).attr("src","images/skills/graphic-design.png");
	});
	
});
 function proj_btn()
{
    document.getElementById("visit-web").innerHTML ="View Project"; 
}
function web_btn()
{
    document.getElementById("visit-web").innerHTML ="Visit Website"; 
}
$('.carousel').on('slide.bs.carousel',function(e){
    var slideFrom = $(this).find('.active').index();
    var slideTo = $(e.relatedTarget).index();
    console.log(slideFrom+' => '+slideTo);
    if(slideTo == 0){
	    $("#project-name").text("Lollaksi UK");	
	    $("#labels").html("<span class='label label-primary'>HTML</span> <span class='label label-warning'>CSS</span> <span class='label label-info'>jQuery</span> <span class='label label-success'>Bootstrap</span> <span class='label label-respon'>Responsive</span>");
	    web_btn();
	    activeweb = "lolaksi.uk";
    }else if(slideTo == 1){
	     $("#project-name").text("Art Deco");
	    $("#labels").html("<span class='label label-primary'>HTML</span> <span class='label label-warning'>CSS</span> <span class='label label-info'>jQuery</span> <span class='label label-ajax'>Ajax</span> <span class='label label-success'>Bootstrap</span> <span class='label label-default'>3D Modeling</span> <span class='label label-respon'>Responsive</span>");
	    web_btn();
	     activeweb = "art-deco";
    }
    else if(slideTo == 2){
	     $("#project-name").text("Lollaksi South Africa");
	     $("#labels").html("<span class='label label-primary'>HTML</span> <span class='label label-warning'>CSS</span> <span class='label label-info'>jQuery</span> <span class='label label-success'>Bootstrap</span> <span class='label label-respon'>Responsive</span> <span class='label label-googlemap'>Google Maps</span>");
	     web_btn();
	     activeweb = "lolaksi.za";	
    }
    else if(slideTo == 3){
	     $("#project-name").text("Space");
	     $("#labels").html("<span class='label label-illustartor'>Illustrator</span> <span class='label label-ps'>Photoshop</span> <span class='label label-invison'>InVision</span>");
	     proj_btn();
	     activeweb = "space";		
    }

});

 function web_onclick(){
	  if(activeweb == undefined){
		    window.open("http://lollaksi.co.uk/");
	    }else if (activeweb == "lolaksi.uk"){
		    window.open("http://lollaksi.co.uk/");
	    }else if (activeweb == "art-deco"){
		    window.open("http://users.sussex.ac.uk/~ik80/web3d_app/part_2/index.html");
	    }else if(activeweb == "lolaksi.za"){
		    window.open("http://lollaksi.co.za/");
	    }else if(activeweb == "space"){
		    window.open("https://invis.io/6V470MWKU");
	    }	
 }

    $('#visit-web').click(function(){
	    web_onclick();	
	});
	 $('#proj-img').click(function(){
	    web_onclick();	
	});

	
function expheight(){	
	$('.exp-space').each(function() {
	        var highestBox = 0;
	        $('.exp-ind', this).each(function() {
	
	            if ($(this).height() > highestBox)
	                highestBox = $(this).height();
	        });
			console.log(highestBox);
	        $('.exp-ind', this).height(highestBox);
	    });

	
}
expheight();
$(window).on('resize',function() { 
		  $('.exp-ind').css('height','auto');
		 expheight();
	});

	
$('#cv-btn').click(function(){
window.open("online_cv.pdf");
});

$('#linkedin-btn').click(function(){
window.open("https://uk.linkedin.com/pub/ishita-karnam/105/1a6/b45");
});




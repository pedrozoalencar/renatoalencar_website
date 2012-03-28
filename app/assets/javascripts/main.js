
 function titulo_bg_resize () {
 	var windowSize = ($(window).width() < 1024 ? 1024 : $(window).width());
 	$(".title_bg").width(windowSize);
 	var num = (windowSize - $(".title_bg").width()) / 2;
 	$(".title_bg").offset({left: num});
 }

 function title_shadow_bg_resize () {
 	var windowSize = ($(window).width() < 1024 ? 1024 : $(window).width());
 	$(".title_shadow").width(windowSize);
 	var num = (windowSize - $(".title_shadow").width()) / 2;
 	$(".title_shadow").offset({left: num});
 }
 
 function works_shadow_bg_resize () {
 	var windowSize = ($(window).width() < 1024 ? 1024 : $(window).width());
 
 	$(".picture_shadow_bg").width(windowSize);
 
 	var num = (windowSize - $(".picture_shadow_bg").width()) / 2;
 	$(".picture_shadow_bg").offset({left: num});
 }
 
 function footer_shadow_bg_resize () {
  	var windowSize = ($(window).width() < 1024 ? 1024 : $(window).width());
 
  	$(".blockRodape").width(windowSize);
 
  	var num = (windowSize - $(".blockRodape").width()) / 2;
  	$(".blockRodape").offset({left: num});
 }
 
 
 
  
 
 
 
 	
 $(document).ready(function() {
		$(".blockApresentation").text($("img").mouseenter(function() {
		 	// alert("sf");
		 	$(".luz_lampada").fadeIn("slow");
		}));
		
		$(".blockApresentation").text($("img").mouseout(function() {
		 	// alert("sf");
		 	$(".luz_lampada").fadeOut("slow");
		}));
		
		//Replace href links to javascript links
		$('.legenda_titulo').click(function() {
		 	window.carousel.scroll(1);
		 	return false;    
		});
		
		titulo_bg_resize();
		title_shadow_bg_resize();
		works_shadow_bg_resize();
		footer_shadow_bg_resize();
		
		$(window).on("resize", titulo_bg_resize);
		$(window).on("resize", title_shadow_bg_resize);
		$(window).on("resize", works_shadow_bg_resize);
		$(window).on("resize", footer_shadow_bg_resize); 
		
		
		//Call anchor of solicited resource 
		var url = $(location).attr('href');
		
		setTimeout(function () {
			if ( url.indexOf('/contact_forms') > -1 ) {
			 	$('.btnContact').click();
			}
			if( url.indexOf('/posts') > -1 ) {
			 	$('.btnBlog').click();
			}
			if( url.indexOf('/jobs') > -1 ) {
			 	$('.btJobs').click();
			}
		},500);
		
		
		// On Submit Contact Us Form
		$('#contact_form_submit').click(function() {	
			$.ajax({
				url:'/contact_forms',
				type: 'POST',
				data: $('.new_contact_form').serialize(),
				dataType: "json", 
				success: function(data){
					$(document).ready(function() {
						$('div.qtip').remove();
						$('.notice_success span').text("Seu formulário foi enviado!").fadeIn();
					});
				},
				error: function(jqXHR, textStatus, errorThrown) {
					var json = $.parseJSON(jqXHR.responseText).errors;
					$('div.qtip').remove();
						
					for(property in json) {
						//alert(property);
						//alert(json[property]);
						var configQtip = {
							content: {
								text: json[property][0]
							},
							position: {
								my: 'bottom left',  // Position my top left...
								at: 'top center',
								adjust: {
									x:-70
								}
							},
							show: {
								event: false, // Don't specify a show event...
								ready: true // ... but show the tooltip when ready
							},
							hide: false,
							style: {
								classes: 'tooltip-contact ui-tooltip-shadow ui-tooltip-red',
								width: '220px'
							}
						};
						
						$("."+property+"_field_line input").qtip(configQtip);
						$("."+property+"_field_line textarea").qtip(configQtip);
					};
					
					$.each(json, function(indexName, value) {
						indexName;
						value;
					});
					
				}  
			});
		});
 });
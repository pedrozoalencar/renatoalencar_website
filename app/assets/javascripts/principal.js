var Carrousel = {
	actionPost : false,
	nextPost : function nextPost() {
		if(!this.actionPost) {
			this.actionPost = true;
			var left = -($(".postBlogSpacer").position().left); 
			var limit = $(".postBlogSpacer").width() - 803;
	
			if(left < limit) {
				var newLeft = $(".postBlogSpacer").position().left - 803;
	
				$(".postBlogSpacer").animate({
					left: newLeft
				})
			}
			this.actionPost = false;
		}
		return false;
	},
	previous : function previousPost() {
		if(!this.actionPost) {
			this.actionPost = true;
			var left = $(".postBlogSpacer").position().left; 
	
			// var limit = $(".postBlogSpacer").width() - 803;
	
			if(left < 0) {
				var newLeft = $(".postBlogSpacer").position().left + 803;
	
				$(".postBlogSpacer").animate({
					left: newLeft
				})
			}
			this.actionPost = false;
		}
		return false;
	}
}
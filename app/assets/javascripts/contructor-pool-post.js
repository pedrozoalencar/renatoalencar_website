var ConstructorPoolPost = {
	hasNext: false,
	count: 2,
	id: null,
	idElement: null,
	init: function(id,idElement){
		this.id = id;
		this.idElement = idElement;
		this.postHasNext(this.id++);
	},
	//Verify if there is one more post in database.
	postHasNext: function postHasNext(id) {
		$.ajax({
	 		type: "GET",
	 		url: "posts/"+id+"/hasNext",
	 		contentType: "application/json; charset=utf-8",
	 		dataType: "json",
	 		success: function(data){
	 			// alert(data.hasNext);

	 			if(data.hasNext == true) {
	 				ConstructorPoolPost.generateNextPost(data);
	 			}

	 		}
		});
	},
	generateNextPost: function showNextPost(data) {
		//Extends frame
		widthActually = $('.postBlogSpacer').width();
		$('.postBlogSpacer').width(widthActually+803);
		
		var elementOriginal = $('#'+this.idElement);
		var newElement = elementOriginal.clone();
		newElement.attr('id', this.idElement + this.count);
		elementOriginal.after(newElement);


		this.count++;
		this.postHasNext(this.id++);
	}
}
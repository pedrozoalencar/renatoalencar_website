var NewsCarouselLoader = {
	carousel: null,
	
	initCallback: function initCallback(carousel,state) {
		NewsCarouselLoader.init(carousel,state)
	},
	
	init: function initCallback(carousel,state) {
		window.carousel = carousel;
		this.carousel = carousel;
		this.carousel.resize(this.carousel.options.size+1);
		
		
		//load MAIN item
		this.loadItem(carousel, state, this.carousel.options.start-1, this.carousel.options.start-1);
		
		//get amount posts
		this.loadOtherItems(this.carousel.options.size-1,this.carousel.options.start-1);      
	},
	
	loadItem: function loadItem(carousel, state,first, last) {
			//get post from database 
			$.ajax({
				url:'/posts/'+first+'/to/'+last, 
				dataType: "json", 
				success: function(data){
					NewsCarouselLoader.addItem(carousel, first, last, data);
				}  
			});
	},
	
	addItem: function addItem(carousel, first, last, json) {
			// Set the size of the carousel
			//carousel.size(parseInt(jQuery('total', xml).text()));
	
			$(json).each(function(index,obj) {
					carousel.add(first+1, NewsCarouselLoader.getItemHTML(obj));
			});
	},
	
	loadOtherItems: function loadOtherItems(size,index_of) {
	
		for(var i = 1; i <= size; i++) {
			prevCount = index_of-i;
			nextCount = index_of+i;
	
			if(prevCount > 0){
					this.loadItem(this.carousel,null,prevCount,prevCount);
			}
	
			if(nextCount <= size){
				this.loadItem(this.carousel,null,nextCount,nextCount);
			}
	
			if(!(prevCount > 0) && !(nextCount <= size)) {
				break
			}
		}
	
		$.ajax({
			url:'/posts/all/menu', 
			dataType: "json", 
			success: function(data){
				var menu = AssemblerMenu.assemble(data);
	
				carousel.add(1, AssemblerMenu.assemble(data));
			}  
		});
	},
	
	/**
	 * Item html creation helper.
	 */
	getItemHTML: function getItemHTML(post) {
			var html = '<li class="jcarousel-item-'+post.id+'">'+
				'<div class="post_titulo"><span>'+new Date(post.date).format('dd/mm/yyyy')+'</span><br/>'+post.title+'</div>'+
				'<div class="post_texto">'+
					post.content +
				'</div>' +
			'</li>';
	
			return html;
	}
	
};



AssemblerMenu = {
	assemble: function (data) {
		var menu = $(document.createElement('ul'));
		$(menu).addClass('blogMenu');
		
		var thiss = this;
		$(data).each(function (i,obj) {
			$(menu).append(thiss.createItem(i,obj));
			
			if ( i < $(data).size()-1 ) {
				item = $(document.createElement('li'));
				$(item).addClass("liHrMenu");
				
				line = document.createElement("hr");
				$(line).addClass("hrMenu");
				
				$(item).append(line);
				$(menu).append(item);
			}
		});
		
		return menu;
		
	},
	createItem: function (i,obj) {
		var item = $(document.createElement('li'));
		$(item).addClass('itemMenu');
		$(item).attr('href','/posts/'+obj.id);
		$(item).click(function(eventt) {
			window.carousel.scroll(i+2);
			// return false;
		});
		
		//add div for date
		var dateDiv = document.createElement('div');
		$(dateDiv).addClass('dateItemMenu');
		$(dateDiv).text(new Date(obj.date).format('dd/mm/yyyy'));
		
		//add div for title post
		var titleDiv = document.createElement('div');
		$(titleDiv).addClass('titleItemMenu');
		$(titleDiv).text(obj.title);
		
		
		//append data in the item
		$(item).append(dateDiv);
		$(item).append(titleDiv);
		
		return item;
	} 
};
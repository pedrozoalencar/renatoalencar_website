class PostsController < ApplicationController
  layout 'public'
  
  # GET /posts
  # GET /posts.json
  def index
    @post = Post.order("date DESC").last
    @count = Post.all.count
    @num_nexts = Post.where("date > :post_date", {:post_date => @post.date}).count
    @index_of = 0
    @contact_form = ContactForm.new(params[:contact_form])
    
    @jobs = Job.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @post }
    end

  end
  
  # GET /posts/count
  def count
  
    @posts = Post.all.count
  
    respond_to do |format|
      format.json { render json: @posts }
    end
  end	

  # GET /posts/menu
  def menu
  
    @posts = Post.order("date DESC")
  
    respond_to do |format|
      format.json { render json: @posts }
    end
  end	

  # GET /posts/1
  # GET /posts/1.json
  def show
    if params[:id]
      @post = Post.find(params[:id]) 
    else
      @post = Post.order("date DESC").last
    end
    
    @jobs = Job.all
    @count = Post.all.count
    @num_nexts = Post.where("date > :post_date", {:post_date => @post.date}).count
    @contact_form = ContactForm.new
        
    if params[:index_of]
      @index_of = params[:index_of]
    else
      @index_of = @count - @num_nexts
    end
    
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @post }
    end
  end

  def last
    @post = Post.last

    respond_to do |format|
      format.html # last.html.erb
      format.json { render json: @post }
    end
  end

  def hasNext
    @hasNext = Post.exists?(params[:id].to_i + 1)
    respond_to do |format|
      format.json { 
        render json: {
          :hasNext => @hasNext
        }
      }
    end
  end
  
  def index_of
    @count = Post.all.count
    post = Post.find(params[:id])
    @num_nexts = Post.where("date > :post_date", {:post_date => post.date}).count
    @index_of = @count - @num_nexts
    
    respond_to do |format|
      format.json { 
        render json: {
          :count => @count, 
          :num_nexts => @num_nexts,
          :index_of => @index_of
        }
      }
    end
  end


  # GET /posts/new
  # GET /posts/new.json
  def new
    @post = Post.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @post }
    end
  end

  # GET /posts/1/edit
  def edit
    @post = Post.find(params[:id])
  end

  # GET /posts/1/to/6
  def find
    if params[:first]
      if !params[:last]
        amount = 1
      else
        amount = params[:last].to_i - params[:first].to_i + 1
      end
      @posts = Post.order("date DESC").offset(params[:first].to_i-1).limit(amount)
    else 
      @posts = Post.find_all
    end

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @posts }
    end
  end


  # POST /posts
  # POST /posts.json
  def create
    @post = Post.new(params[:post])

    respond_to do |format|
      if @post.save
        format.html { redirect_to @post, notice: 'Post was successfully created.' }
        format.json { render json: @post, status: :created, location: @post }
      else
        format.html { render action: "new" }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /posts/1
  # PUT /posts/1.json
  def update
    @post = Post.find(params[:id])

    respond_to do |format|
      if @post.update_attributes(params[:post])
        format.html { redirect_to @post, notice: 'Post was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    respond_to do |format|
      format.html { redirect_to posts_url }
      format.json { head :no_content }
    end
  end
end

class ContactFormsController < ApplicationController
  respond_to :json,:js,:html,:xml
  
  # GET /contact_forms
  # GET /contact_forms.json
  def index
    @post = Post.order("date DESC").last
    @count = Post.all.count
    @num_nexts = Post.where("date > :post_date", {:post_date => @post.date}).count
    @index_of = 0
    @contact_form = ContactForm.new(params[:contact_form])
    
    @jobs = Job.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @contact_forms }
    end
  end
  
  # GET /contact_forms/new
  # GET /contact_forms/new.json
  def new
    @contact_form = ContactForm.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @contact_form }
    end
  end

  # POST /contact_forms
  # POST /contact_forms.json
  def create
    @contact_form = ContactForm.new(params[:contact_form])
    
    @contact_form.save
  
    respond_with @contact_form
    # respond_to do |format|
    #   if @contact_form.save
    #     format.html { redirect_to contact_forms_path, notice: 'Contact form was successfully created.' }
    #     format.json { render json: @contact_form, status: :created, location: @contact_form }
    #   else
    #     format.html { render action: "new" }
    #     format.json { render json: @contact_form.errors, status: :unprocessable_entity }
    #   end
    # end
  end
end

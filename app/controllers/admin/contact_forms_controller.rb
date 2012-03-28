class Admin::ContactFormsController < ApplicationController
	layout 'admin'
	
	# GET /contact_forms
	# GET /contact_forms.json
	def index
		@contact_forms = ContactForm.all
	
		respond_to do |format|
			format.html # index.html.erb
			format.json { render json: @contact_forms }
		end
	end
	
	# GET /contact_forms/1
	# GET /contact_forms/1.json
	def show
		@contact_form = ContactForm.find(params[:id])
	
		respond_to do |format|
			format.html # show.html.erb
			format.json { render json: @contact_form }
		end
	end
	
	# DELETE /contact_forms/1
	# DELETE /contact_forms/1.json
	def destroy
		@contact_form = ContactForm.find(params[:id])
		@contact_form.destroy
	
		respond_to do |format|
			format.html { redirect_to contact_forms_url }
			format.json { head :no_content }
		end
	end
end

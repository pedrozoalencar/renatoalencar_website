class ContactForm < ActiveRecord::Base
	validates_presence_of :name
	validates_presence_of :email
	validates :email, :email_format => {:message => I18n.t(:invalid_email_format, :scope => "activerecord.errors.messages")}
	validates_presence_of :subject
	validates_presence_of :description
end

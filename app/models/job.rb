class Job < ActiveRecord::Base
	has_attached_file :image, :styles => { :medium => "780x600!", :thumb => "260x202!" }
end

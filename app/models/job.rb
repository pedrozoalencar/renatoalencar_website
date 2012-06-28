class Job < ActiveRecord::Base
	has_attached_file :image, :styles => { :medium => "780x600!", :thumb => "260x202!" },
		:storage => :s3,
		:bucket => '1327f9168550468312ab6578ccb863f378fa21fc0bc75133f1ba32544d712960',
		:s3_credentials => {
			:access_key_id => 'AKIAIXOYVU4S3EP2FWLQ',
			:secret_access_key => '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'
		}
end

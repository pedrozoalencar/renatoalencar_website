require 'spec_helper'

describe "contact_forms/index" do
  before(:each) do
    assign(:contact_forms, [
      stub_model(ContactForm,
        :name => "Name",
        :email => "Email",
        :subject => "Subject",
        :description => "Description"
      ),
      stub_model(ContactForm,
        :name => "Name",
        :email => "Email",
        :subject => "Subject",
        :description => "Description"
      )
    ])
  end

  it "renders a list of contact_forms" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Email".to_s, :count => 2
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Subject".to_s, :count => 2
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Description".to_s, :count => 2
  end
end

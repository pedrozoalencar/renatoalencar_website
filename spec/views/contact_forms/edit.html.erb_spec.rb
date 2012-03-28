require 'spec_helper'

describe "contact_forms/edit" do
  before(:each) do
    @contact_form = assign(:contact_form, stub_model(ContactForm,
      :name => "MyString",
      :email => "MyString",
      :subject => "MyString",
      :description => "MyString"
    ))
  end

  it "renders the edit contact_form form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form", :action => contact_forms_path(@contact_form), :method => "post" do
      assert_select "input#contact_form_name", :name => "contact_form[name]"
      assert_select "input#contact_form_email", :name => "contact_form[email]"
      assert_select "input#contact_form_subject", :name => "contact_form[subject]"
      assert_select "input#contact_form_description", :name => "contact_form[description]"
    end
  end
end

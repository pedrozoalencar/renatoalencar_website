require 'test_helper'

class PostsControllerTest < ActionController::TestCase
  setup do
    @post = posts(:one)
    @post_two = posts(:two)
   
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:posts)
  end
  
  test "should get index_of" do
    get :index_of, :format => :json, id: 1
        
    assert_equal 2, json_response['index_of']

    
    assert_response :success
    assert_
  end


  test "should show post" do
    get :show, id: @post
    assert_response :success
  end
  
  test "should route to post hasNext" do
    assert_routing '/posts/980190961/hasNext', 
    { 
      :controller => "posts", 
      :action => "hasNext", 
      :id => "980190961" 
    }
  end
  
  test "should route to post find" do
    assert_routing '/posts/1/to/2', 
    { 
      :controller => "posts", 
      :action => "find", 
      :first => "1",
      :last => "2"
    }
  end
  
  test "should route to post count" do
    assert_routing '/posts/all/count', 
    { 
      :controller => "posts", 
      :action => "count"  
    }
  end
  
  test "should route to post index_of" do
    assert_routing '/posts/2/index_of', 
    { 
      :controller => "posts", 
      :action => "index_of"  
    }
  end
  
  
  test "should get boolean true has next post" do
    
    get :hasNext,:format => :json, id: 980190961

    assert_equal true, json_response['hasNext']
  end

  test "should get boolean false in invalid post" do
    get :hasNext, :format => :json, id: 99999999999
    assert_equal false, json_response['hasNext']
  end
  
end

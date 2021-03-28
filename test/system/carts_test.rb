require "application_system_test_case"

class CartsTest < ApplicationSystemTestCase
  setup do
    visit store_index_url
  end

  test 'adding first line item to empty cart shows cart' do
    assert_no_text 'Your Cart'

    click_on 'Add to Cart', match: :first

    assert_text 'Your Cart'
  end

  test 'emptying cart hides cart' do
    click_on 'Add to Cart', match: :first
    assert_text 'Your Cart'

    accept_confirm do
      click_on 'Empty cart'
    end

    assert_no_text 'Your Cart'
  end
end

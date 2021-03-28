require "application_system_test_case"

class LineItemsTest < ApplicationSystemTestCase
  test 'adding line item flashes it in cart' do
    visit store_index_url

    assert_no_selector '.line-item-highlight'

    click_on 'Add to Cart', match: :first

    assert_selector '.line-item-highlight'
  end
end

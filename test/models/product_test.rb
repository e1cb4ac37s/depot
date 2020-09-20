require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  test 'product attributes must not be empty' do
    product = Product.new
    assert product.invalid?
    assert product.errors[:title].any?
    assert product.errors[:description].any?
    assert product.errors[:price].any?
    assert product.errors[:image_url].any?
  end

  test 'product price must be positive' do
    product = Product.new(title: 'My Book Title', description: 'My book description', image_url: 'image_url.jpg')

    product.price = -1
    assert product.invalid?
    assert_equal ['must be greater than or equal to 0.01'], product.errors[:price]

    product.price = 0
    assert product.invalid?
    assert_equal ['must be greater than or equal to 0.01'], product.errors[:price]

    product.price = 1
    assert product.valid?
  end

  test 'image url' do
    ok = %w{ fred.gif fred.jpg fred.png FRED.JPG FRed.Jpg http://a.b.c/x/y/z/fred.gif }
    bad = %w{ fred.doc fred.gif/more fred.gif.more }

    ok.each do |image_url|
      assert new_product(image_url).valid?, "#{image_url} shouldn't be invalid"
    end

    bad.each do |image_url|
      assert new_product(image_url).invalid?, "#{image_url} shouldn't be valid"
    end
  end

  test 'product is not valid without a unique title' do
    product = Product.new(title: products(:ruby).title, description: 'My book description', price: 1, image_url: 'fred.jpg')

    assert product.invalid?
    assert_equal ['has already been taken'], product.errors[:title]
  end

  test 'product is not valid without a unique title - i18n' do
    product = Product.new(title: products(:ruby).title, description: 'My book description', price: 1, image_url: 'fred.jpg')

    assert product.invalid?
    assert_equal [I18n.translate('errors.messages.taken')], product.errors[:title]
  end

  test 'product title must be at least 10 chars long' do
    product = Product.new(title: 'Foo', description: 'My book description', price: 1, image_url: 'fred.jpg')

    assert product.invalid?
    assert_equal ['title is too short (minimum 4 characters, please)'], product.errors[:title]
  end

  private

  def new_product(image_url)
    Product.new(title: 'My Book Title', description: 'My book description', price: 1, image_url: image_url)
  end
end

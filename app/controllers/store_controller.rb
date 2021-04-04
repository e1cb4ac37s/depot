class StoreController < ApplicationController
  include CurrentCart
  include Counter

  before_action :set_cart, :set_counter
  skip_before_action :authorize

  def index
    @products = Product.order(:title)
  end
end

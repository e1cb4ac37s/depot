class StoreController < ApplicationController
  include CurrentCart
  include Counter

  before_action :set_cart, :set_counter
  skip_before_action :authorize

  def index
    if params[:set_locale]
      redirect_to store_index_url(locale: params[:set_locale])
    else
      @products = Product.order(:title)
    end
  end
end

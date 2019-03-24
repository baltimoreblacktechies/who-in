# == Schema Information
#
# Table name: reviews
#
#  id         :bigint(8)        not null, primary key
#  user_id    :bigint(8)
#  review     :float
#  type       :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

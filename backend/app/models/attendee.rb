# == Schema Information
#
# Table name: attendees
#
#  id         :bigint(8)        not null, primary key
#  user_id    :bigint(8)
#  event_id   :bigint(8)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Attendee < ApplicationRecord
  belongs_to :event
  belongs_to :user
end

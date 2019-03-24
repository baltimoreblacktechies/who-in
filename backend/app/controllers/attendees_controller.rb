class AttendeesController < ApplicationController
  before_action :authorize_request, except: :index

  def index
    event = Event.find(params[:event_id])
    @attendees = event.attendees

    render json: @attendees, status: :ok
  end

  def create
    @attendee = Attendee.new(user: @current_user, event_id: params[:event_id])
    if @attendee.save
      render json: @attendee, status: :created
    else
      render json: { errors: @attendee.errors.full_messages }, status: :unprocessable_entity
    end
  end
end

# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
json.(list, :id, :title, :board_id, :ord, :created_at, :updated_at)

cards ||= nil
unless cards.nil?
  json.cards(cards) do |card|
    json.partial!("api/cards/card", card: card)
  end
end

  
  # json.partial! 'comments/comments', comments: @message.comments

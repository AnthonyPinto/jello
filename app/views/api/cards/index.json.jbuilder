# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
json.array! @cards do |card|
  json.partial!("card", card: card)
end
  
  # json.partial! 'comments/comments', comments: @message.comments

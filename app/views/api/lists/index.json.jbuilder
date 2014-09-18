# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
json.array! @lists do |list|
  json.partial!("list", list: list)
end
  
  # json.partial! 'comments/comments', comments: @message.comments

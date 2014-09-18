# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
json.array! @items do |item|
  json.partial!("item", item: item)
end
  
  # json.partial! 'comments/comments', comments: @message.comments

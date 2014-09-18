# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
json.array! @boards do |board|
  json.partial!("board", board: board)
end
  
  # json.partial! 'comments/comments', comments: @message.comments

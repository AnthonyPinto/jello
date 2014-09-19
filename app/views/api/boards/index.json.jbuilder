# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
json.array! @boards do |board|
  json.id board.id
  json.title board.title
  json.user_id board.user_id
  json.created_at board.created_at
  json.updated_at board.updated_at
end
  
  # json.partial! 'comments/comments', comments: @message.comments

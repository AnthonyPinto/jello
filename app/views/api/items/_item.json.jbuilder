# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
json.(item, :id, :title, :card_id, :done, :created_at, :updated_at)

  
  # json.partial! 'comments/comments', comments: @message.comments

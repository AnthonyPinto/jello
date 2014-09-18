# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list
json.partial!("list", list: @list, cards: @cards)

  
  # json.partial! 'comments/comments', comments: @message.comments
